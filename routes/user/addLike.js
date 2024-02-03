const Blog = require("../../models/Blog");

module.exports = async (req, res) => {
  try {
    let { id, blogId } = req.query;
    const likeAdded = await Blog.findOneAndUpdate(
      { _id: blogId },
      {
        $push: { likes: id },
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: likeAdded });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
