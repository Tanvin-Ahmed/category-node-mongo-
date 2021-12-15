const mongoose = require("mongoose");
const { Schema } = mongoose;
const { app } = require("../config/config");

const PostSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		slag: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model(app.category, PostSchema);
