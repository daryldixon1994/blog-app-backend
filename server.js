const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");

//ENVIRONMENT VARIABLES
const DB = process.env.DB;

// CONNECT TO DATABASE
mongoose
  .connect(
    `mongodb+srv://gmcws2024:${DB}@cluster0.4dmpkdc.mongodb.net/blog-app?retryWrites=true&w=majority`
  )
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((err) => console.log(err));

//MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: ["https://momments.netlify.app", "http://localhost:3000"],
  })
);

//ROUTES
// app.post("/api/test", async (req, res) => {
//   console.log(req.files);
//   console.log(req.file);
//   res.json({ message: "ok" });
// });
// user routes
app.use("/blog/api", require("./routes/user"));
// admin routes
app.use("/blog/api/admin", require("./routes/admin"));

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("SERVER IS UP AND RUNNING");
});
