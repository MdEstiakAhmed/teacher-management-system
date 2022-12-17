import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import useCheckAuth from "../hooks/useCheckAuth";
import AuthRoute from "../middleware/AuthRoute";
import Chat from "../pages/Chat";
import Dashboard from "../pages/Dashboard";
import Email from "../pages/Email";
import Event from "../pages/Event";
import Login from '../pages/Login'
import Todo from "../pages/Todo";
import User from "../pages/User";
const App = () => {
	// const [isAuthenticated, setIsAuthenticated] = useState(undefined);
	const isAuthenticated = useCheckAuth();
	return (
		<>
			<BrowserRouter>
				{
					isAuthenticated === true ? (
						<PrivateRoute />
					) :
						isAuthenticated === false ? (
							<PublicRoute isAuthenticated />
						) : (
							<span className="sr-only">Loading...</span>
						)
				}
			</BrowserRouter>
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
						<div className="titleArea">
							<h3 className="title">Dashboard</h3>
							<div className="userArea">
								<div className="user">
									<div className="userDetails">
										<h4 className="userName">John Doe</h4>
										<p className="userDesignation">Admin</p>
									</div>
									<img src="images/user.png" alt="user" />
								</div>
							</div>
						</div>
						<Routes>
							<Route path="/user" element={<User />} />
							<Route path="/event" element={<Event />} />
							<Route path="/todo" element={<Todo />} />
							<Route path="/chat" element={<Chat />} />
							<Route path="/email" element={<Email />} />
							<Route path="/" element={<Dashboard />} />
							{/* <Route path="*" element={<Navigate to="/" />} /> */}
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