import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	return (
		<li className="minus">
			<span>{transaction.text}</span>
			<span className="amount">- ₽{Math.abs(transaction.amount)}</span>
			<button
				onClick={() => deleteTransaction(transaction.id)}
				className="delete-btn"
			>
				<i className="material-icons">delete</i>
			</button>
		</li>
	);
};
