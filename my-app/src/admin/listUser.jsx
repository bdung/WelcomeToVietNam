import React from "react";
import { Route } from "react-router-dom";
import Model from "./layoutPost";
import TextEditor from "./textEditor";


export default function ListUsers() {
	const [showModel, setShowModal] = React.useState(false);
	return (
		<div className="m-5 shadow sm:shadow md:shadow lg:shadow xl:shadow">
			Dashboard
		</div>
	);
}
