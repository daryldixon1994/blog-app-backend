const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res) => {
  let KEY = process.env.KEY;
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        status: false,
        error: "Wrong email or password, please check again",
      });
    }
    let checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(200).json({
        status: false,
        error: "Wrong email or password, please check again",
      });
    }
    let token = await jwt.sign(
      {
        id: user.id,
        email: user.email,
        isUser: user.isUser,
      },
      KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      status: true,
      data: {
        userId: user._id,
        isUser: user.isUser,
        isBanned: user.isBanned,
        token,
      },
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
