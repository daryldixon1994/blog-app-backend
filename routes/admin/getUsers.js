const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    const data = await User.find().select({
      userName: 1,
      imgUrl: 1,
      isBanned: 1,
    });

    res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
