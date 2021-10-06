const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
	email: { type: String, requred: true, unique: true },
	password: { type: String, requred: true },
	links: [{ type: Types.ObjectId, ref: "Transactions" }],
});

module.exports = model("User", schema);
