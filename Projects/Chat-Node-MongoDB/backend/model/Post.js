const mongoose = require("mongoose");

// Define the schema for chat messages
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      minlength: 3,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Add timestamps for createdAt and updatedAt
);

// Create the model from the schema
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
