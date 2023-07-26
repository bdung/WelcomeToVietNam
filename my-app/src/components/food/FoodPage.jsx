import React from "react";
import FoodBanner from "./FoodBanner"
import FoodBody from "./FoodBody"
import FoodDetailBody from "./FoodDetailBody"


export default function LoginScreen() {
	return (
        <React.Fragment>
            <FoodBanner/>
            <FoodBody/>

            <FoodDetailBody/>

        </React.Fragment>
	);
}