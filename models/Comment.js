const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    required: [true, "This is a required field"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  blogId: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
  },
});

module.exports = Comment = mongoose.model("comments", commentSchema);