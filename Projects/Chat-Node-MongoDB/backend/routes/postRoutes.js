const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.post("/posts", postController.createPosts);
router.get("/posts", postController.readMultiplePosts);
router.put("/posts/:id", postController.updateSinglePost);
router.delete("/posts/:id", postController.deleteSinglePost);

module.exports = router;
