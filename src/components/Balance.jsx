import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Emoji from "a11y-react-emoji";
import { curMonth } from "../utils/utils";
export const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);

	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
		<div className="inc-exp-container">
			<h1>Траты за {curMonth}</h1>
			<h2>
				₽ {total}
				<Emoji symbol="💵" />
			</h2>
			{/*  https://emojipedia.org/dollar-banknote/ */}
		</div>
	);
};
