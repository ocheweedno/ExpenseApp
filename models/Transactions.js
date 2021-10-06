const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
	id: { type: String, unique: true },
	category: { type: String },
	description: { type: String },
	amount: { type: Number },
	date: { type: String },
	owner: [{ type: Types.ObjectId, ref: "User" }],
	createDate: { type: Date },
});

module.exports = model("Transactions", schema);
