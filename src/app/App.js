import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Chat from "../pages/Chat";
import Dashboard from "../pages/Dashboard";
import Email from "../pages/Email";
import Event from "../pages/Event";
import Login from '../pages/Login'
import Todo from "../pages/Todo";
import User from "../pages/User";
import Users from "../pages/Users";
import { Context } from "../store/store";

const App = () => {
	const { userAction, authState, authAction } = useContext(Context)

	useEffect(() => {
		const data = localStorage.getItem("tms_data");
		if (data) {
			userAction.setUser(JSON.parse(data))
			authAction.setAuth();
		}
		else {
			authAction.unsetAuth();
		}
	}, [])

	return (
		<>
			{
				(authState === true) ? (
					<PrivateRoute />
				) :
					authState === false ? (
						<PublicRoute />
					) : (
						<span className="sr-only">Loading...</span>
					)
			}
		</>
	);
}

export default App;


const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<>
			<section className="dashboardArea">
				<Sidebar />
				<main className="mainArea">
					<div className="container">
						<Header />
						<Routes>
							<Route path="/users/:id" element={<User />} />
							<Route path="/users" element={<Users />} />
							<Route path="/event" element={<Event />} />
							<Route path="/todo" element={<Todo />} />
							<Route path="/chat" element={<Chat />} />
							<Route path="/email" element={<Email />} />
							<Route path="/" element={<Dashboard />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>

					</div>
				</main>
			</section>
		</>
	)
}

const PublicRoute = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/login");
	}, []);
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
		</Routes>
	)
}