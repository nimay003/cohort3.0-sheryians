const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://edunimay003:lPPnXjuXAgZEpAp1@cluster0.g5uvgrb.mongodb.net/",
    );
    console.log("Database is connected");
  } catch (error) {
    console.log("Error in connectDB", error);
  }
};

module.exports = connectDB;
