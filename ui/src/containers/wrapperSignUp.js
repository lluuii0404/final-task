import React, { Component } from 'react';
import sha256 from 'sha256';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { jwtDecode } from "../_utils/checkExp";
import { bindActionCreators } from 'redux';
import { postSignUpAuthRequest } from "../actions/actionAuth";

import SignUp from '../components/SignUp';

class WrapperSignUp extends Component {

    takeValueSignUp = values => {
        this.props.postSignUpAuthRequest({
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

        return (
            <SignUp onSubmit={this.takeValueSignUp} />
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        postSignUpAuthRequest,
    }, dispatch);

const mapStateToProps = state => ({
    token: state.auth.token,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperSignUp)
