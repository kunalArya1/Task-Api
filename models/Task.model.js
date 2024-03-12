import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    maxLength: [15, "Name Length should not exceed 15 characters"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
    required: [true, "Descritption is also Required"],
  },
});

export default mongoose.model("Task", TaskSchema);
