const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [15, "Minimum 15 characters are required"],
  },
});

const notesModel = mongoose.model("notes", notesSchema);

module.exports = notesModel;
