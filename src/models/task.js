const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    rent: {
      type: Number,
      default: false,
    },
    manufactureDate: {
      type: Date,
      default: false,
    },
    actualCost: {
      type: Number,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
