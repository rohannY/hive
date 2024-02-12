const mongoose = require("mongoose");
const Post = require("../models/post");
const asyncHandler = require("../utils/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc   Create Post
// @route  POST api/v1/post/create
// @access Public
exports.createPost = asyncHandler(async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(201).json({ success: true, data: post });
});

// @desc   Get popular post
// @route  GET api/v1/post
// @access Public
exports.getPost = asyncHandler(async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ votes: -1 });
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// @desc   Get popular post
// @route  GET api/v1/post/:id
// @access Public
exports.getSpecificPost = asyncHandler(async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findOne({ id: postId });
    if (!post)
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    console.error("Error fetching specific post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// // @desc   Get post by category
// // @route  GET api/v1/post/category
// // @access Public
// exports.getUser = asyncHandler(async (req, res, next) => {
//   const userId = req.params.id;
//   if (userId) {
//     if (!mongoose.isValidObjectId(userId)) {
//       return next(new ErrorResponse(`Invalide id`, 400));
//     }
//   }
//   const user = await User.findById(userId);
//   if (!user) {
//     return next(new ErrorResponse(`No user found with id ${userId}`, 404));
//   }
//   res.status(200).json({ success: true, data: user });
// });

// @desc   Reply to Post
// @route  POST api/v1/post/:id/reply/
// @access Public
exports.reply = asyncHandler(async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findOne({ id: postId });
  if (!post)
    return res.status(404).json({ success: false, message: "Post not found" });

  const { reply_text, parent_type, parent_id } = req.body;
  post.replies.push({
    reply_text,
    parent_type,
    parent_id,
  });
  await post.save();
  res.status(200).json({ success: true });
});
