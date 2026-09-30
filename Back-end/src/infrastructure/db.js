import mongoose from "mongoose";

const connectDB = async () => {
  const mongodbUrl = process.env.MONGODB_URL;

  if (!mongodbUrl) {
    throw new Error("MONGODB_URL is not set");
  }

  await mongoose.connect(mongodbUrl);
  console.log("Connected to the database...");
};

export default connectDB;