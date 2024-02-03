const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    let { id } = req.query;
    let data = await User.findById(id).select({ password: 0 });
    res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
