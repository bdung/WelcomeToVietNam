import React from "react";
// some JSX here

import Register from "./pages/Register";
import LoginScreen from "./pages/Login";
import { Outlet, Route, Routes } from "react-router-dom";
import UserHomePage from "./user/UserHomePage";
import TravelHomePage from "./user/Travel/TravelHomePage";
import DetailedTravelBlog from "./user/Travel/DetailedTravelBlog";
import UserLayout from "./user/UserLayout";
import FoodScreen from "./user/food/FoodPage";
import CultureScreen from "./user/culture/Culture";
import AdminHomeScreen from "./admin/AdminHomePage";
import DashboardAdminScreen from "./admin/dashboard.admin";
import CreatePostScreen from "./admin/createdPost";
import Error from "./pages/Error";
import AdminLayout from "./admin/adminLayout";

function Page(props) {
	if (props === 1) return <UserHomePage />;
	else return null;
}
function AdminPage(props) {
	if (props === 1) return <AdminHomeScreen />;
	else return <FoodScreen />;
}
const App = () => {
	var props = 2;
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={Page(props)}>
					<Route path="/admin" element={<AdminLayout />}>
						<Route path="" element={<DashboardAdminScreen />} />
						<Route path="post" element={<AdminHomeScreen />} />
					</Route>
					<Route path="travel" element={<Outlet />}>
						<Route index element={<TravelHomePage />} />
						<Route
							path="view-blog/:blogId"
							element={<DetailedTravelBlog />}
						/>
					</Route>
					<Route path="food" element={<FoodScreen />}></Route>
					<Route path="culture" element={<CultureScreen />}></Route>
				</Route>

				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<Register />} />

				<Route path="/create-post" element={<CreatePostScreen />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};

export default App;
