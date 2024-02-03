const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    let { userId } = req.query;
    const bannedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          isBanned: true,
        },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ status: true, data: "User was banned successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
