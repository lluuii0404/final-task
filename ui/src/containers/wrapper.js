import React, {Component} from 'react';

import Header from "../components/Header";
import {takeId} from "../_utils/checkExp";
import {connect} from "react-redux";
import {getUserByIdRequest} from "../actions/actionsUser";

class Wrapper extends Component {
    componentDidMount() {
        const token = localStorage.getItem("token");
        const userId = takeId(token);
        this.props.getUserByIdRequest(userId);
    }

    render() {
        const {children, user } = this.props;

        return (
            <div className='main-wrapper'>
                <Header />
                { user && children }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.data,
});
export default connect(
    mapStateToProps,
    { getUserByIdRequest }
)(Wrapper);
