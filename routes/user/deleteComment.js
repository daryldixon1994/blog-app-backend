const Comment = require("../../models/Comment");

module.exports = async (req, res) => {
  try {
    let { id } = req.query;
    let data = await Comment.findByIdAndDelete(id);
    res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
