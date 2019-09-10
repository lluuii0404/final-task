import React, { Component } from 'react';
import sha256 from 'sha256';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { jwtDecode } from "../_utils/checkExp";
import { bindActionCreators } from 'redux';
import { postSignInRequest, getLogOutAuthRequest } from "../actions/actionAuth";
import SingIn from '../components/SignIn';

class WrapperSignIn extends Component {

    takeValueSignIn = values => {
        this.props.postSignInRequest({
            ...values,
            password: sha256( values.password )
        });
    };

    render() {
        const { token } = this.props;
        const token_lS = localStorage.getItem("token");

        if (jwtDecode(token_lS)){
            if (token && token === token_lS) {
                return <Redirect to={`/companies`} />;
            }
        }
        else { this.props.getLogOutAuthRequest() }

        return (
            <SingIn onSubmit={this.takeValueSignIn}/>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({postSignInRequest,getLogOutAuthRequest}, dispatch);

const mapStateToProps = state => ({
    token: state.auth.token,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperSignIn)
