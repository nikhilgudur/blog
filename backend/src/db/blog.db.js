const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
  },
  readtime: {
    type: Number,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Blog = new Model("Blog", blogSchema);
