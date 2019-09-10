import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getLogOutAuthRequest } from '../actions/actionAuth';
import '../_style/style_header.css';

class Header extends Component {
    handleLogout = event => {
        localStorage.removeItem ( "token" );
        this.props.getLogOutAuthRequest();
    };

    render() {
        const { user } = this.props;

        return user && (
            <div className="header-wrapper">
                <div className='header-title'>
                    <h1>{`${user.first_name} ${user.last_name}`}</h1>
                    <h2>Nick name: {user.nick_name}</h2>
                </div>
                <div className='header-icons'>
                    <Link className="back" to="/companies" >
                        <span ></span>
                    </Link>
                    <Link className="update" to="/profile" >
                        <span ></span>
                    </Link>
                    <Link className="add" to="/new_company" >
                        <span ></span>
                    </Link>
                    <Link className="logout" to="/login" >
                        <span onClick={ this.handleLogout.bind(this)}></span>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    user: state.user.data
});
Header = connect(
    mapStateToProps,
    { getLogOutAuthRequest }
)(Header);

export default Header
