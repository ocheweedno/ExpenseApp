import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Emoji from "a11y-react-emoji";
import { curMonth } from "../utils/utils";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);

	const total = amounts.reduce(
		(acc, item) => (acc += item),
		0
	); /* .toFixed(2) */

	/* ============================= */

	const history = useHistory();
	const auth = useContext(AuthContext);
	const logoutHandler = () => {
		console.log("logoutHandler");
		auth.logout();
		history.push("/");
	};
	return (
		<div className="inc-exp-container">
			<h1>Траты за {curMonth}</h1>
			<h2>
				{total} ₽
				<Emoji symbol="💵" />
			</h2>
			{/*  https://emojipedia.org/dollar-banknote/ */}
			<button onClick={logoutHandler}>выйти</button>
			{/* <div
				style={{
					marginTop: "6px",
					marginLeft: "6px",
					cursor: "pointer",
				}}
			>
				<i className="material-icons">drag_handle</i>
			</div> */}
		</div>
	);
};
