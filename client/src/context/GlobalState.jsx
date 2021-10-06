import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";

// Initial state
/* const initialState = {
	transactions: [],
}; */

/* const initialState = JSON.parse(localStorage.getItem("state")) || []; */
// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
	/* const [state, dispatch] = useReducer(AppReducer, initialState); */

	const [transactions, setTransactions] = useState([]);

	// Actions
	/* function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	} */
	/* useEffect(() => {
		localStorage.setItem("state", JSON.stringify(state));
	}, [state]); */

	return (
		<GlobalContext.Provider
			value={{
				transactions,
				setTransactions,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
