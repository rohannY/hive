const router = require("express").Router();

const { createPost, getPost, getSpecificPost, reply } = require("../controllers/post");

router.post("/create", createPost);
router.post("/:id/reply", reply);
router.get("/", getPost);
router.get("/:id", getSpecificPost);

module.exports = router;
