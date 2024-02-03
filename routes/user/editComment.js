const Comment = require("../../models/Comment");
module.exports = async (req, res) => {
  try {
    let { commentId } = req.query;
    let { comment } = req.body;

    const newComment = await Comment.findByIdAndUpdate(
      commentId,
      {
        $set: { comment },
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: newComment });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
