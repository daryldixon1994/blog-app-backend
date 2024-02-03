const Blog = require("../../models/Blog");
const fs = require("fs");
const path = require("path");
const cloudinary = require("../../middlewares/cloudinary");
module.exports = async (req, res) => {
  try {
    let { carId } = req.query;
    // const imgBuffer = fs.readFileSync(
    //   path.join(
    //     "D:/Dévelopement WEB/rentCarApp/backend/",
    //     "uploads",
    //     req.file.filename
    //   )
    // );
    // const base64Image = await imgBuffer.toString("base64");
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    let { path } = file;
    const { url } = uploader(path);
    fs.unlinkSync(path);
    const newCar = await Blog.findByIdAndUpdate(
      carId,
      {
        $set: { img: url },
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: newCar });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
