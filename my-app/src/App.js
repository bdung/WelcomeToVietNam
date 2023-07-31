import "./App.css";
import { React } from "react";

// some JSX here

import LoginScreen from "./pages/Login";
import { Outlet, Route, Routes } from "react-router-dom";
import UserHomePage from "./user/UserHomePage";
import TravelHomePage from "./user/Travel/TravelHomePage";
import DetailedTravelBlog from "./user/Travel/DetailedTravelBlog";
import UserLayout from "./user/UserLayout";
import Error from "./pages/Error";

const App = () => {
  return (
    // <Fragment>
    //   <Login />
    // </Fragment>
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<UserHomePage />} />
          <Route path="travel" element={<Outlet />}>
            <Route index element={<TravelHomePage />} />
            <Route path="view-blog/:blogId" element={<DetailedTravelBlog />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
