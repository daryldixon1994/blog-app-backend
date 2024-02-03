const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");
// Register router : /blog/api/register
route.post("/register", require("./register"));

// Login router : /blog/api/login
route.post("/login", require("./login"));

// Add blog router : /blog/api/addBlog
route.post("/addBlog/:id", multer.single("photo"), require("./addBlog"));

// Get all the blogs : /blog/api/blogs
route.get("/blogs", require("./getBlogs"));

// Update single blog : /blog/api/updateBlog
route.put("/updateBlog", require("./updateBlog"));

// Update single blog image : /blog/api/updateBlogImage
route.put(
  "/updateBlogImage",
  multer.single("photo"),
  require("./updateBlogImage")
);

// Get single blog : /blog/api/singleBlog
route.get("/singleBlog", require("./getSingleBlog"));

// Get own blogs : /blog/api/ownBlogs
route.get("/ownBlogs/:userId", require("./getOwnBlogs"));

// Report blog : /blog/api/reportBlog
route.put("/reportBlog/:blogId", require("./reportBlog"));

// Delete single blog : /blog/api/deleteBlog
route.delete("/deleteBlog", require("./deleteBlog"));

// Add comment : /blog/api/addComment
route.post("/addComment", require("./addComment"));

// Edit comment : /blog/api/editComment
route.put("/editComment", require("./editComment"));

// Delete comment : /blog/api/deleteComment
route.delete("/deleteComment", require("./deleteComment"));

// Get comments : /blog/api/getComments
route.get("/getComments", require("./getComments"));
// route.post("/addComment", require("./addComment"));

// Add like : /blog/api/addLike
route.post("/addLike", require("./addLike"));

// User update picture : /blog/api/updateProfilePicture
route.put(
  "/updateProfilePicture",
  multer.single("photo"),
  require("./updateUserImage")
);

// User get own profile : /blog/api/myData
route.get("/myData", require("./myData"));
module.exports = route;
