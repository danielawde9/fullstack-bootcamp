// models/Post.js

const mongoose = require("mongoose");

// Define the schema for our blog posts
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});

// Create the model from the schema
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
