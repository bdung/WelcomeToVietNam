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
import DetailedFoodBlog from "./user/food/FoodDetailPage";
import CultureScreen from "./user/culture/MainContent";
import AdminHomeScreen from "./admin/AdminHomePage";
import CreatePostScreen from "./admin/createdPost";
import Error from "./pages/Error";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<UserLayout />}>
					<Route index element={<UserHomePage />} />
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
				<Route path="/admin" element={<AdminHomeScreen />}>
					
				</Route>
				<Route path="/create-post" element={<CreatePostScreen />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};

export default App;
