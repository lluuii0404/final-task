import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";

import { setToken } from "./actions/actionAuth";
import { jwtDecode } from "./_utils/checkExp";
import { bindActionCreators } from "redux";
import PrivateRoute from "./privateRouter";
import WrapperCompany from './containers/wrapperCompany';
import WrapperCompanies from "./containers/wrapperCompanies";
import WrapperNewCompany from "./containers/wrapperNewCompany";
import WrapperProfile from "./containers/wrapperProfile";
import WrapperSignIn from './containers/wrapperSignIn';
import WrapperSignUp from './containers/wrapperSignUp';

class Router extends Component {

	componentDidMount() {
		const token = localStorage.getItem("token");

		if ( token && jwtDecode(token) ) {
			const { setToken } = this.props;
			return setToken(token);
		}
	}

	render() {
		return (
			<Fragment>
				<Switch>
					<PrivateRoute path="/companies"  auth={'/login'} component={WrapperCompanies} />
					<PrivateRoute path="/profile"  auth={'/login'} component={WrapperProfile} />
					<PrivateRoute path="/company/:id"  auth={'/login'} component={WrapperCompany} />
					<PrivateRoute path="/new_company"  auth={'/login'} component={WrapperNewCompany} />

					<Route exact path="/login" component={ WrapperSignIn } />
					<Route exact path="/signup" component={ WrapperSignUp } />

					<Route
						render={() => (
							<Fragment>
								<div >404 NOT FOUND</div>
							</Fragment>
						)}
					/>
				</Switch>
			</Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ setToken }, dispatch);
Router = connect( null, mapDispatchToProps)(Router);

export default Router;
