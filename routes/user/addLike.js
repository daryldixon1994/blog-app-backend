const Blog = require("../../models/Blog");

module.exports = async (req, res) => {
  try {
    let { id, blogId } = req.query;
    let blog = await Blog.findById(blogId);
    if (!blog.likes.includes(id)) {
      const likeAdded = await Blog.findOneAndUpdate(
        { _id: blogId },
        {
          $push: { likes: id },
        },
        { new: true }
      );
      return res.status(200).json({ status: true, data: likeAdded });
    } else {
      return res
        .status(200)
        .json({ status: true, data: "Like has been already added" });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
