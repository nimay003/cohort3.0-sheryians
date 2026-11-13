const express = require("express");
const connectDB = require("./config/db.js");
const NotesRouter = require("./routes/notes.route.js");

const app = express();
app.use(express.json());

connectDB().catch((error) => {
  console.log("Error in connectDB from app.js", error);
});

app.get("/", (req, res) => {
  res.send("Done Bro!");
});

app.use("/notes", NotesRouter);

module.exports = app;
