import { GlobalProvider } from "./context/GlobalState";
import { AuthContext } from "./context/AuthContext";
import { useRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";

function App() {
	const { token, login, logout, userId } = useAuth();
	const isAuthenticated = !!token;
	const routes = useRoutes(isAuthenticated);
	return (
		<AuthContext.Provider
			value={{ token, login, logout, userId, isAuthenticated }}
		>
			<BrowserRouter>
				<GlobalProvider>{routes}</GlobalProvider>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
