const Blog = require("../../models/Blog");

module.exports = async (req, res) => {
  try {
    let { blogId } = req.params;
    const reportedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $set: {
          isReported: true,
        },
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: reportedBlog });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
