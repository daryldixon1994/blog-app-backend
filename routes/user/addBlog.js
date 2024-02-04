const Blog = require("../../models/Blog");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
const path = require("path");
// const Binary = require("mongoose").Binary;
module.exports = async (req, res) => {
  try {
    let { title, body, desc } = req.body;
    let { id } = req.params;
    // const imgBuffer = fs.readFileSync(
    //   path.join(
    //     __dirname.substr(0, __dirname.length - 11),
    //     "uploads",
    //     req.file.filename
    //   )
    // );
    // const base64Image = await imgBuffer.toString("base64");
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    let { path } = req.file;
    const { url } = await uploader(path);
    fs.unlinkSync(path);
    const newBlog = new Blog({
      title,
      body,
      desc,
      user: id,
      imgUrl: url,
    });
    await newBlog.save();
    res
      .status(200)
      .json({ status: true, message: "Your blog was added successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
