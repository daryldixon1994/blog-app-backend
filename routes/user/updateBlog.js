const Blog = require("../../models/Blog");

module.exports = async (req, res) => {
  try {
    let { userId, blogId } = req.query;
    console.log(req.body)
    const newBlog = await Blog.findOneAndUpdate(
      { user: userId, _id: blogId },
      {
        $set: { ...req.body },
      },
      { new: true }
      );
      res.status(200).json({ status: true, data: newBlog });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
