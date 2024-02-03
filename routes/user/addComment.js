const Comment = require("../../models/Comment");

module.exports = async (req, res) => {
  try {
    let { id, blogId } = req.query;
    let { comment } = req.body;
    const newComment = await new Comment({
      comment,
      user: id,
      blogId,
    });
    await newComment.save();
    res
      .status(200)
      .json({
        status: true,
        message: "Your comment has been added successfully",
      });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
