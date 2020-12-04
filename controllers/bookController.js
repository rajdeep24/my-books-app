const express = require("express");
const router = express.Router();
const db = require("../models");

//Finds and returns ALL books from the book db model
router.get("/api/book", (req, res) => {
	db.Book.find({}).then((foundBooks) => {
		res.json(foundBooks);
	});
});
//Finds and returns ONE book by id from the book db model
router.get("/api/book/:id", (req, res) => {
	db.Book.find({ _id: req.params.id }).then((foundBook) => {
		res.json(foundBook);
	});
});
//INSERTS a new book into the book db model.
router.post("/api/book", (req, res) => {
	db.Book.create(req.body).then((newBook) => {
		res.json(newBook);
	});
});

router.put("/api/book/:id", (req, res) => {
	db.Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(updatedBookById) => {
			res.json(updatedBookById);
		}
	);
});

router.delete("/api/book/:id", (req, res) => {
	db.Book.findByIdAndDelete(req.params.id).then((result) => {
		res.json(result);
	});
});

module.exports = router;
