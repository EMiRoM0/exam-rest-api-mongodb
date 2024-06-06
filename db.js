import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const url = "mongodb://127.0.0.1/blog_db";
    await mongoose.connect(url);
    console.log(`Database connected in: ${url}`);
  } catch (err) {
    console.error(`Connection error :( : ${err}`);
    process.exit(1);
  }
}
