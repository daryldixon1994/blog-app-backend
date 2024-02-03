const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The title field is required"],
    },
    body: {
      type: String,
      required: [true, "The blog's body is required"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    imgUrl: {
      type: String,
      default:
        "https://icons.veryicon.com/png/o/miscellaneous/1em/add-image.png",
    },
    desc: {
      type: String,
    },
    isReported: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = Blog = mongoose.model("blogs", blogSchema);
