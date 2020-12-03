const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Server connecting to localhost 3000 (front-end)
const PORT = process.env.PORT || 3000;

//Server connecting to the back-end database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my_books_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Mongoose successfully connected");
});

connection.on("error", (err) => {
	console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

app.listen(PORT, () => {
	console.log(`App is running on http://localhost${PORT}`);
});
