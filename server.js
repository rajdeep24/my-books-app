const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Server connecting to localhost 3000 (front-end)
const PORT = process.env.PORT || 3000;

const db = require("./models");

//Server connecting to the back-end database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myBooksDb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Mongoose successfully connected");
});

connection.on("error", (err) => {
	console.log("Mongoose connection error: ", err);
});

/* ROUTES */

app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

//Finds and returns ALL books from the book db model
app.get("/api/book", (req, res) => {
	db.Book.find({}).then((foundBooks) => {
		res.json(foundBooks);
	});
});
//Finds and returns ONE book by id from the book db model
app.get("/api/book/:id", (req, res) => {
	db.Book.find({ _id: req.params.id }).then((foundBook) => {
		res.json(foundBook);
	});
});
//INSERTS a new book into the book db model.
app.post("/api/book", (req, res) => {
	db.Book.create(req.body).then((newBook) => {
		res.json(newBook);
	});
});

// app.put("/api/book/:id", (req, res) => {});

// app.delete("/api/book/:id", (req, res) => {});

app.listen(PORT, () => {
	console.log(`App is running on http://localhost${PORT}`);
});
