const express = require("express");
const connectDB = require("./config/db.js");

const app = express();
const PORT = 3000;

connectDB().catch((error) => {
  console.log("Error in connectDB in app file", error);
});


app.get("/", (req, res) => {
  res.send("Done Bro!");
});

module.exports = { app, PORT };
