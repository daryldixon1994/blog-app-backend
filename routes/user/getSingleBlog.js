const Blog = require("../../models/Blog");

module.exports = async (req, res) => {
  try {
    let { id } = req.query;
    const data = await Blog.findById(id)
      .populate("user", "userName imgUrl")
      .populate("likes", "userName");
    res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
