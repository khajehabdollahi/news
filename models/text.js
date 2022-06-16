const mongoose = require("mongoose");

let textSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: false
  },
  language: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    value: false,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
    name: String,
  },
});

module.exports = mongoose.model("Text", textSchema);
