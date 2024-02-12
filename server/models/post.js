const mongoose = require("mongoose");

const generateRandomId = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const ReplySchema = new mongoose.Schema({
  id: {
    type: Number,
    default: generateRandomId,
    unique: true,
  },
  reply_text: {
    type: String,
    required: true,
  },
  parent_id: {
    type: String,
    required: true,
  },
  parent_type: {
    type: String,
    enum: ["post", "comment"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: generateRandomId,
    unique: true,
  },
  title: {
    type: String,
    maxlength: [50, "Title length cannot be more than 50 characters"],
    required: [true, "Please enter title"],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
    maxlength: [500, "Description cannot be more than 500 characters"],
  },
  category: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  images: {
    type: String,
    default: "https://source.unsplash.com/random/150x100",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  replies: [ReplySchema],
});

module.exports = mongoose.model("Post", PostSchema);
