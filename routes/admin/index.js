const express = require("express");
const route = express.Router();

// Register router : /blog/api/admin/register
// route.post("/register", require("./register"));

// Login router : /blog/api/admin/login
route.post("/login", require("./login"));

// Get blogs : /blog/api/admin/blogs
route.get("/blogs", require("./getBlogs"));


// Get reported blogs : /blog/api/admin/reportedBlogs
route.get("/reportedBlogs", require("./getReportedBlogs"));

// Get comments : /blog/api/admin/getComments
route.get("/getComments", require("./getComments"));

// Get users : /blog/api/admin/users
route.get("/users", require("./getUsers"));

// Delete blog : /blog/api/admin/deleteBlog
route.delete("/deleteBlog", require("./deleteBlog"));

// Ban user : /blog/api/admin/banUser
route.put("/banUser", require("./banUser"));

// Unban user: /blog/api/admin/unbanUser
route.put("/unbanUser", require("./unbanUser"));

module.exports = route;
