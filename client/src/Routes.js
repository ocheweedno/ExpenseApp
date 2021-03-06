import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AppPage from "./pages/AppPage";

export const useRoutes = (isAuthenticated) => {
	if (isAuthenticated) {
		return (
			<Switch>
				<Route path="/app" exact>
					<AppPage />
				</Route>
				<Redirect to="/app" />
			</Switch>
		);
	}

	return (
		<Switch>
			<Route path="/" exact>
				<AuthPage />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};
