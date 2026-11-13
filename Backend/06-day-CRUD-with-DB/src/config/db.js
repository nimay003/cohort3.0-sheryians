const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if(!process.env.MONGODB_URI) throw new Error("MONGODB_URI is missing from .env file");
    
    await mongoose.connect(
      process.env.MONGODB_URI,
    );

    console.log("DB connected successfully");
    
  } catch (error) {
    console.log("Error in connectDB from db.js", error);
  }
};

module.exports = connectDB;
