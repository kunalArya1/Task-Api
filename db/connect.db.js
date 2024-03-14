import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.connect(url).then(console.log("DataBase Connectd Successfully"));
};

export default connectDB;
