const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.post("/create", postController.createPosts);
router.post("/read-multiple", postController.readMultiplePosts);
router.put("/update-multiple", postController.updateMultiplePosts);
router.delete("/delete-multiple", postController.deleteMultiplePosts);

module.exports = router;
