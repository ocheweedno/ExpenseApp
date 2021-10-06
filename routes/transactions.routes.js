const { Router } = require("express");
const Transactions = require("../models/Transactions");
const router = Router();
const auth = require("../middleware/auth.middleware");
/* const config = require("config"); */

//api/transactions/add
router.post("/add", auth, async (req, res) => {
	try {
		/* const baseUrl = config.get(baseURL); */
		const { id, description, amount, category, date } = req.body;
		const item = new Transactions({
			id,
			category,
			description,
			amount,
			date,
			owner: req.user.userId,
		});

		await item.save();
		res.status(201).json({ message: "Транзакция добавлена" });
	} catch (e) {
		res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
	}
});

//api/transactions/get
router.get("/get", auth, async (req, res) => {
	try {
		const transactions = await Transactions.find({
			owner: req.user.userId,
		}).sort({ _id: -1 });
		res.json(transactions);
	} catch (e) {
		res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
	}
});

//api/transactions/delete
router.delete("/:id", auth, async (req, res) => {
	try {
		const transactions = await Transactions.deleteOne({ id: req.body.id }); ///?????
		res.json(transactions);
	} catch (e) {
		res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
	}
});
module.exports = router;
