const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  let { adminName, email, password } = req.body;
  try {
    //   Verify if the email is already used
    let existedAdmin = await Admin.findOne({ email });
    if (existedAdmin) {
      return res.status(401).json({
        status: false,
        message: "This email is already existed, please use another one",
      });
    }
    let testPassword = await password.match(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+|~-]).{8,}$/
    );
    if (!testPassword) {
      return res.status(401).json({
        error: `Your password must contain 8 characters with at least one uppercase character, one lowercase character and one special character (!@#$%^&*()_+|~-)`,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // CREATE NEW ADMIN
    const newAdmin = new Admin({
      adminName,
      email,
      password: hashedPassword,
    });
    await newAdmin.save();
    res.status(200).json({
      status: true,
      message: "Your account has been created successfully",
    });
  } catch (error) {
    if (error.errors.email) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.email.message });
    } else if (error.errors.password) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.password.message });
    } else if (error.errors.adminName) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.adminName.message });
    }
  }
};
