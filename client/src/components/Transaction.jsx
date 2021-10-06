import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHttp } from "../hooks/http.hooks";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "./loader";
import { getTrasactions, delTransaction } from "../api/methodCalls";

export const Transaction = ({ transaction }) => {
	const [loader, setLoader] = useState(false);
	const { deleteTransaction, setTransactions } = useContext(GlobalContext);
	/* const { loading, error, request, clearError } = useHttp(); */
	const auth = useContext(AuthContext);

	const pressHandler = (id) => {
		setLoader(true);
		delTransaction(id, auth.token)
			.then((res) => {
				console.log(res);
				getTrasactions(auth.token)
					.then((res) => {
						setTransactions([...res.data]);
						setLoader(false);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<li className="minus">
			<Loader loader={loader} />
			<span>{transaction.description}</span>
			<span className="amount">-{Math.abs(transaction.amount)} ₽</span>

			<button
				onClick={() => pressHandler(transaction.id)}
				className="delete-btn"
			>
				<i className="material-icons">delete</i>
			</button>
		</li>
	);
};
