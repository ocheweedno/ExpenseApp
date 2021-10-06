import React, { useContext, useState } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
import { toDay, yesterDay, curMonthGrad } from "../utils/utils";

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);
	const [expand, setExpand] = useState(false);

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

	//
	///
	//
	//
	/////
	foo.sort((a, b) => {
		console.log(a);
		console.log(b);
	});
	/* Спускаем дату с хедера, по ней фильтруем массив */

	const BlockDate = (props) => (
		<>
			{console.log(foo)}
			<p>
				{props.data[0].date == toDay
					? "Сегодня"
					: props.data[0].date.slice(8, 10) == yesterDay
					? "Вчера"
					: props.data[0].date.slice(8, 10) + ` ${curMonthGrad}`}
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
				{!foo.length ? <p>Нет операций</p> : ""}
				<ul className="list">
					{foo.map((item, index) => (
						<BlockDate data={item} key={index} />
					))}
				</ul>
			</div>
		</>
	);
};
