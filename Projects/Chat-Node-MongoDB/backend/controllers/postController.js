const Post = require("../model/Post");

const handleError = (error, res) => {
  console.error("Error occurred:", error);
  res
    .status(500)
    .send({ error: "Internal Server Error", details: error.message });
};

exports.createPosts = async (req, res) => {
  try {
    const newMessage = await Post.create(req.body);
    res.send(newMessage);
  } catch (error) {
    handleError(error, res);
  }
};

exports.readMultiplePosts = async (req, res) => {
  try {
    const messages = await Post.find({});
    res.send(messages);
  } catch (error) {
    handleError(error, res);
  }
};

exports.updateSinglePost = async (req, res) => {
  const { filter, data } = req.body;
  try {
    const updatedMessage = await Post.updateOne(filter, { $set: data });
    res.send(updatedMessage);
  } catch (error) {
    handleError(error, res);
  }
};

exports.deleteSinglePost = async (req, res) => {
  try {
    const deletedMessage = await Post.deleteOne(req.body);
    res.send(deletedMessage);
  } catch (error) {
    handleError(error, res);
  }
};
