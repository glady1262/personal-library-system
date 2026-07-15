const express = require("express");
const router = express.Router();

let books = [];

// Get all books
router.get("/", (req, res) => {
    res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Book title is required" });
    }

    books.push({ id: books.length + 1, title });

    res.json({
        message: "Book added successfully",
        books
    });
});

module.exports = router;