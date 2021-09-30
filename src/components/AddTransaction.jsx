import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Select from "react-select";
/* import Emoji from "a11y-react-emoji"; */

export const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState("");
	const [expand, setExpand] = useState(true);

	const date = new Date().toISOString().slice(0, 10);

	const options = [
		{ value: "Аренда", label: "Аренда" },
		{ value: "Магазины", label: "Магазины" },
		{ value: "Транспорт", label: "🚕" },
		{ value: "Развлечения", label: "Развлечения" },
	];
	//React-select;
	const [category, setCategory] = useState({ value: null });

	const updateForm = (value) => {
		setCategory({ ...category, value: value });
	};

	const resetForm = () => {
		setCategory({ value: null });
	};
	const customStyles = {
		control: (base) => ({
			...base,
			borderRadius: "2px",
			width: "auto",
		}),
	};
	//

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: +amount,
			...category,
			date,
		};

		addTransaction(newTransaction);
		setText("");
		setAmount("");
		resetForm();
	};
	const divStyle = {
		display: "flex",
		justifyContent: "space-between",
	};

	return (
		<>
			<h3>Добавить операцию</h3>
			<form onSubmit={onSubmit} className={expand ? "form" : "none"}>
				<div className="form-control">
					<label htmlFor="amount">
						Категория <br />
					</label>
					<div style={divStyle}>
						<div style={{ width: "100%" }}>
							<Select
								name="mySelect"
								value={options.filter(({ value }) => value === category.value)}
								onChange={({ value }) => updateForm(value)}
								options={options}
								styles={customStyles}
								placeholder={"Категория..."}
							/>
						</div>
						<div
							style={{
								marginTop: "6px",
								marginLeft: "6px",
								color: "#9c88ff",
								cursor: "pointer",
							}}
						>
							<i className="material-icons">settings</i>
						</div>
					</div>
				</div>
				<div className="form-control">
					<label htmlFor="text">Описание</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Описание..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Сумма <br />
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Сумма..."
					/>
				</div>
				<button className="btn">Добавить</button>
			</form>
		</>
	);
};
