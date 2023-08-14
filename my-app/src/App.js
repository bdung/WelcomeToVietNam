import React from "react";
// some JSX here

import { Outlet, Route, Routes } from "react-router-dom";
import UserHomePage from "./user/UserHomePage";
import TravelHomePage from "./user/Travel/TravelHomePage";
import DetailedTravelBlog from "./user/Travel/DetailedTravelBlog";
import UserLayout from "./user/UserLayout";
import FoodScreen from "./user/food/FoodPage";
import DetailedFoodBlog from "./user/food/FoodDetailPage";
import CultureScreen from "./user/culture/Culture";
import DetailedCultureBlog from "./user/culture/details/DetailedCultureBlog";
import AdminHomeScreen from "./admin/AdminHomePage";
import AdminLayout from "./admin/adminLayout";
import CreatePostScreen from "./admin/createdPost";
import DashboardAdminScreen from "./admin/dashboard.admin";
import Error from "./pages/Error";
import LoginScreen from "./pages/Login";
import Register from "./pages/Register";
import Search from "./user/Search";
import Test from "./user/Test.jsx";

function Page(props) {
	if (props === 1) return <UserHomePage />;
	else return null;
}
function AdminPage(props) {
	if (props === 1) return <AdminHomeScreen />;
	else return <FoodScreen />;
}
const App = () => {
	var props = 1;
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<UserLayout />}>
					<Route path="" element={Page(props)} />
					<Route path="travel" element={<TravelHomePage />}>
						<Route
							path="view-blog/:blogId"
							element={<DetailedTravelBlog />}
						/>
					</Route>

					<Route path="food" element={<FoodScreen />}></Route>
					<Route path="culture" element={<CultureScreen />} />
					<Route
						path="/culture/view-blog/:blogId"
						element={<DetailedCultureBlog />}
					/>
				</Route>

				<Route path="/search" element={<Search />} />
				<Route path="/test" element={<Test />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<Register />} />

				<Route path="/create-post" element={<CreatePostScreen />} />
				<Route path="*" element={<Error />} />

				<Route path="/admin" element={<AdminLayout />}>
					<Route path="" element={<DashboardAdminScreen />} />
					<Route path="post" element={<AdminHomeScreen />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
