const mongoose = require("mongoose");
const { app } = require("../config/config");

const url = app.db_url;

if (!url) return console.log("Environment variable not found");

mongoose.connect(url, err => {
	if (err) console.error(err);
	else console.log("connect to database");
});

module.exports = mongoose;
