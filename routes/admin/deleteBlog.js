const Blog = require("../../models/Blog");

module.exports = async (req, res) => {
  try {
    let { blogId } = req.query;
    const newBlog = await Blog.findByIdAndDelete(blogId);
    res
      .status(200)
      .json({ status: true, message: "Blog has been deleted successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
