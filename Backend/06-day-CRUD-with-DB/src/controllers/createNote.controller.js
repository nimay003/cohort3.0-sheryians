const notesModel = require("../models/notes.models");

const createNote = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await notesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("Error from createNote api in createNote.controller.js", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllNotes = async (req, res) => {
  try {
    let allNotes = await notesModel.find();

    return res.status(200).json({
      message: "All Notes fetched successfully",
      data: allNotes,
    });
  } catch (error) {
    console.log(
      "Error from getAllNotes api in createNote.controller.js",
      error,
    );

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getByIDNote = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await notesModel.findById(id);

    res.status(200).json({
      message: "Note has been fetched successfully",
      data,
    });
  } catch (error) {
    console.log(
      "Error from getByIDNote api in createNote.controller.js",
      error,
    );

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateByIDNote = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedNote = await notesModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.status(200).json({
      message: "Note has been updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    console.log(
      "Error from updateByIDNote api in createNote.controller.js",
      error,
    );

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const DeleteByIDNote = async (req, res) => {
  try {
    const { id } = req.params;

    await notesModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "Note has been deleted successfully",
    });
  } catch (error) {
    console.log(
      "Error from DeleteByIDNote api in createNote.controller.js",
      error,
    );

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getByIDNote,
  updateByIDNote,
  DeleteByIDNote,
};
