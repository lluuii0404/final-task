import React from "react";
import { Route, Redirect } from "react-router-dom";
import { jwtDecode } from "./_utils/checkExp";
import { getLogOutAuthRequest } from "./actions/actionAuth";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, getLogOutAuthRequest, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			const token = localStorage.getItem("token");
			if (!token || !jwtDecode(token)) {
				getLogOutAuthRequest();
				return <Redirect to={auth} />;
			}
			return <Component {...props} />;
		}}
	/>
);

export default connect(
	null,
	{ getLogOutAuthRequest }
)(PrivateRoute);
