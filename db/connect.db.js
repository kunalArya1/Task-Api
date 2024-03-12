import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connect(url);
};
