const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res) => {
  let KEY = process.env.KEY;
  let { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(200).json({
        status: true,
        message: "Wrong email or password, please check again",
      });
    }
    let checkPassword = await bcrypt.compare(password, admin.password);

    if (!checkPassword) {
      return res.status(200).json({
        status: true,
        message: "Wrong email or password, please check again",
      });
    }
    let token = await jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        isAdmin: admin.isAdmin,
      },
      KEY,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      status: true,
      data: {
        adminId: admin._id,
        isAdmin: admin.isAdmin,
        token,
      },
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};