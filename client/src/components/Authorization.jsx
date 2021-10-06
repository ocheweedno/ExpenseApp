import { React, useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hooks";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

import SomeChildComponent from "./snakbar";
import SnackbarProvider from "react-simple-snackbar";

import { register, login } from "../api/methodCalls";
import { Loader } from "./loader";

export const Authorization = () => {
	const auth = useContext(AuthContext);
	const [loader, setLoader] = useState(false);
	const { loading, error, request, clearError } = useHttp();

	/* const message = useMessage(); */

	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	/* useEffect(() => {
		message(error);
		clearError();
	}, [error, message, clearError]); */

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};
	/* const registerHandler = async () => {
		try {
			const data = await request("/api/auth/register", "POST", { ...form });
			console.log("data", data);
		} catch (e) {}
	}; */
	const registerHandler = () => {
		register({ ...form })
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	/* const loginHandler = async () => {
		try {
			const data = await request("/api/auth/login", "POST", { ...form });
			console.log("data", data);
			auth.login(data.token, data.userId);
		} catch (e) {}
	}; */
	const loginHandler = () => {
		setLoader(true);
		login({ ...form })
			.then((res) => {
				console.log(res);
				setLoader(false);
				auth.login(res.data.token, res.data.userId);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Loader loader={loader} />
			<h3>Авторизация</h3>
			<form
				className={"form"}
				onKeyPress={(e) => {
					if (e.code === "Enter") {
						loginHandler();
					}
				}}
			>
				<div className="form-control">
					<label htmlFor="text">Email</label>
					<input
						type="text"
						name="email"
						placeholder="Введите Email..."
						onChange={changeHandler}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Пароль <br />
					</label>
					<input
						type="password"
						name="password"
						autocomplete="on"
						placeholder="Введите пароль..."
						onChange={changeHandler}
					/>
				</div>
			</form>
			<button className="btn" onClick={loginHandler} disabled={loading}>
				Войти
			</button>
			<button className="btn" onClick={registerHandler} disabled={loading}>
				Зарегистрироваться
			</button>
			{/* 			<SnackbarProvider>
				<SomeChildComponent msg={"error"} />
			</SnackbarProvider> */}
		</div>
	);
};
