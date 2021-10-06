import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { GlobalContext } from "../context/GlobalState";
import Select from "react-select";
/* import Emoji from "a11y-react-emoji"; */
import { useHttp } from "../hooks/http.hooks";
import { getTrasactions, putTransaction } from "../api/methodCalls";
import { Loader } from "./loader";

export const AddTransaction = () => {
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [loader, setLoader] = useState(false);

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

	const { addTransaction, setTransactions, transactions } =
		useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			description,
			amount: +amount,
			...category,
			date,
		};

		/* addTransaction(newTransaction); */
		setDescription("");
		setAmount("");
		resetForm();
	};

	const divStyle = {
		display: "flex",
		justifyContent: "space-between",
	};

	const auth = useContext(AuthContext);
	const pressHandler = () => {
		setLoader(true);
		putTransaction(
			{
				id: Math.floor(Math.random() * 100000000),
				category: category["value"],
				description: description,
				amount: amount,
				date: date,
			},
			auth.token
		)
			.then((res) => {
				getTrasactions(auth.token)
					.then((res) => {
						setTransactions([...res.data]);
						setLoader(false);
					})
					.catch((err) => {
						console.log(err);
						setLoader(false);
					});
			})
			.catch((err) => {
				console.log(err);
				setLoader(false);
			});
	};
	useEffect(() => {
		setLoader(true);
		getTrasactions(auth.token)
			.then((res) => {
				setTransactions([...res.data]);
				setLoader(false);
			})
			.catch((err) => {
				console.log(err);
				setLoader(false);
			});
	}, []);

	return (
		<>
			<h3>Добавить операцию</h3>
			<Loader loader={loader} />
			<form onSubmit={onSubmit} className="form">
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
						value={description}
						onChange={(e) => setDescription(e.target.value)}
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
				<button className="btn" onClick={pressHandler}>
					Добавить
				</button>
			</form>
		</>
	);
};
