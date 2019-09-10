import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserByIdRequest, updateUserByIdRequest  } from "../actions/actionsUser";
import Profile from "../components/Profile";
import Wrapper from "./wrapper";

class WrapperProfile extends Component{

    getInitialValues () {
        const { user } = this.props;
        if (user) {
            return {
                first_name: user.first_name,
                last_name: user.last_name,
                nick_name: user.nick_name,
                email: user.email,
                // password: user.password,
                phone_number: user.phone_number,
                position: user.position,
                description: user.description
            }
        }
    }
    takeValueProfile = values => {
        const { user } = this.props;
        // console.log('takeValueProfile VALUES-------- ', values);
        if (user) {
            this.props.updateUserByIdRequest({ id: user._id, values });
            this.props.getUserByIdRequest(user._id);
        }
    };

    render() {
        const {user} = this.props;
        return (
            <Wrapper>
                <Profile user={user}
                         onSubmit={this.takeValueProfile}
                         initialValues={this.getInitialValues()}
                />
            </Wrapper>
        );
    }
}
//
const mapStateToProps = state => ({
    user: state.user.data
});
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getUserByIdRequest,
        updateUserByIdRequest
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperProfile);

