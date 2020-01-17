const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  }
});

module.exports = Task;
