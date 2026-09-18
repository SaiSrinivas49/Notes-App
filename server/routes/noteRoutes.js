const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = new Note({
      title,
      content
    });

    const savedNote = await note.save();

    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(500).json({ message: error.message });
  }
});

module.exports = router;