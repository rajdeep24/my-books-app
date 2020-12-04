const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Server connecting to localhost 3000 (front-end)
const PORT = process.env.PORT || 3000;

//const db = require("./models");
const BookController = require("./controllers/bookController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
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

app.use(BookController);

app.listen(PORT, () => {
	console.log(`App is running on http://localhost${PORT}`);
});
