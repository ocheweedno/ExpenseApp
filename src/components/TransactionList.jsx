import React, { useContext, useState } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
import { toDay, yesterDay } from "../utils/utils";

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);
	const [expand, setExpand] = useState(false);
	/* 	const arr = [
		{
			id: 16739464,
			text: "",
			amount: 10,
			category: { value: null },
			date: "2021-09-29",
		},
		{
			id: 85238510,
			text: "",
			amount: 20,
			category: { value: null },
			date: "2021-09-28",
		},
		{
			id: 97931471,
			text: "",
			amount: 30,
			category: { value: null },
			date: "2021-09-27",
		},
		{
			id: 97931472,
			text: "",
			amount: 40,
			category: { value: null },
			date: "2021-09-27",
		},
	]; */

	//уникальные даты
	const newArr = transactions.map((item) => {
		return item.date;
	});
	const uniqnewArr = newArr.filter(
		(it, index) => index === newArr.indexOf((it = it.trim()))
	);
	const foo = [];
	uniqnewArr.forEach((item) => {
		foo.push(transactions.filter((itm) => itm.date === item));
	});
	/* Спускаем дату с хедера, по ней фильтруем массив */

	const BlockDate = (props) => (
		<>
			<p>
				{props.data[0].date == toDay
					? "Сегодня"
					: props.data[0].date.slice(8, 10) == yesterDay
					? "Вчера"
					: props.data[0].date.slice(8, 10) + " сентября"}
			</p>

			{props.data.map((item) => (
				<Transaction key={item.id} transaction={item} />
			))}
		</>
	);
	return (
		<>
			<div className="trns-header" onClick={() => setExpand((value) => !value)}>
				<h3>История</h3>
				<h3>
					<i className="material-icons">
						{expand ? "expand_less" : "expand_more"}
					</i>
				</h3>
			</div>
			<div className={expand ? "list-form" : "list-form-none"}>
				<ul className="list">
					{foo.map((item, index) => (
						<BlockDate data={item} key={index} />
					))}
				</ul>
			</div>
		</>
	);
};
