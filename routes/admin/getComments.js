const Comment = require("../../models/Comment");

module.exports = async (req, res) => {
  try {
    let { blogId } = req.query;
    const comments = await Comment.find({ blogId }).populate(
      "user",
      "imgUrl userName"
    );
    res.status(200).json({ status: true, data: comments });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
