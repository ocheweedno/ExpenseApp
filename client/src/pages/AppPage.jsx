import React from "react";
import { Balance } from "../components/Balance";
import { TransactionList } from "../components/TransactionList";
import { AddTransaction } from "../components/AddTransaction";

const AppPage = () => {
	return (
		<>
			<Balance />
			<div className="container">
				<TransactionList />
				<AddTransaction />
			</div>
		</>
	);
};

export default AppPage;
