const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    adminName: {
      type: String,
      required: [true, "This is a required field, please insert a adminname"],
    },
    email: {
      type: String,
      required: [true, "This is a required field, please insert an email"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "This is invalid email, please check it again",
      ],
    },
    password: {
      type: String,
      required: [true, "This is a required field, please insert a password"],
      match: [
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+|~-]).{8,}$/,
        `Your password must contain 8 characters with at least one uppercase character, one lowercase character and one special character (!@#$%^&*()_+|~-)`,
      ],
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    imgUrl: {
      type: "string",
      default: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Admin = mongoose.model("Admin", adminSchema);
