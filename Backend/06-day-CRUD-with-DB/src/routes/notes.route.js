const express = require("express");
const {
  createNote,
  getAllNotes,
  getByIDNote,
  updateByIDNote,
  DeleteByIDNote,
} = require("../controllers/createNote.controller.js");

const router = express.Router();
 
// Create Note
router.post("/create", createNote);

// Get All Notes
router.get("/allnotes", getAllNotes);

// Get Perticular Note
router.get("/:id", getByIDNote);

// Update Note
router.put("/:id", updateByIDNote);

// Delete Note
router.delete("/:id", DeleteByIDNote)

module.exports = router;
