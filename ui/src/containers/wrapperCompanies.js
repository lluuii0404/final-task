import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { jwtDecode, takeId } from "../_utils/checkExp";
import { getUserByIdRequest } from "../actions/actionsUser";
import { getCompaniesRequest,
    deleteCompanyRequest,
    getCompaniesSortByNameUpRequest,
    getCompaniesSortByNameDescRequest,
    getCompaniesSortByServesUpRequest,
    getCompaniesSortByServesDescRequest,
    getCompaniesSortByNumberUpRequest,
    getCompaniesSortByNumberDescRequest } from "../actions/actionCompany";
import { getLogOutAuthRequest } from "../actions/actionAuth";


import Companies from "../components/Companies";
import Wrapper from "./wrapper";
import '../_style/style_wrapper_companies.css'

class WrapperCompanies extends Component{
    state = {
        CompaniesNameSort: true,
        CompaniesServesSort: true,
        CompaniesNumberSort: true,
    };
    componentDidMount() {
        this.props.getCompaniesRequest();
    }

    handleSortByNameUp = e => {
        const token = localStorage.getItem("token");
        if (jwtDecode(token)) {
            const userId = takeId(token);
            this.props.getCompaniesSortByNameUpRequest(userId);
            this.setState({
                CompaniesNameSort: false
            })
        }
    };

    handleSortByNameDesc = e => {
        const token = localStorage.getItem("token");
        if (jwtDecode(token)) {
            const userId = takeId(token);
            this.props.getCompaniesSortByNameDescRequest(userId);
            this.setState({
                CompaniesNameSort: true
            })
        }
    };

    handleSortByServesUp = e => {
        const token = localStorage.getItem("token");
        if (jwtDecode(token)) {
            const userId = takeId(token);
            this.props.getCompaniesSortByServesUpRequest(userId);
            this.setState({
                CompaniesServesSort: false
            })
        }
    };

    handleSortByServesDesc = e => {
        const token = localStorage.getItem("token");
        if (jwtDecode(token)) {
            const userId = takeId(token);
            this.props.getCompaniesSortByServesDescRequest(userId);
            this.setState({
                CompaniesServesSort: true
            })
        }
    };

    handleSortByNumberUp = e => {
        const token = localStorage.getItem("token");
        if (jwtDecode(token)) {
            const userId = takeId(token);
            this.props.getCompaniesSortByNumberUpRequest(userId);
            this.setState({
                CompaniesNumberSort: false
            })
        }
    };

    handleSortByNumberDesc = e => {
        const token = localStorage.getItem("token");
        if (jwtDecode(token)) {
            const userId = takeId(token);
            this.props.getCompaniesSortByNumberDescRequest(userId);
            this.setState({
                CompaniesNumberSort: true
            })
        }
    };

    handleDeleteCompany = (id,e) => {
        console.log("handle ID", id);
        this.props.deleteCompanyRequest(id);
        this.props.getCompaniesRequest();
    };

    render() {
        const { user, companies } = this.props;

        const companies_for_this_user = user && companies && companies.filter(item => {
            return item.userId === user._id ? item : null
        });
        return (
            <Wrapper>
                {
                    companies && (
                        <Companies companies={companies_for_this_user}
                                   companiesNameSort={this.state.CompaniesNameSort}
                                   companiesServesSort={this.state.CompaniesServesSort}
                                   companiesNumberSort={this.state.CompaniesNumberSort}
                                   handleDeleteCompany={this.handleDeleteCompany}
                                   handleSortByNameUp={this.handleSortByNameUp}
                                   handleSortByNameDesc={this.handleSortByNameDesc}
                                   handleSortByServesUp={this.handleSortByServesUp}
                                   handleSortByServesDesc={this.handleSortByServesDesc}
                                   handleSortByNumberUp={this.handleSortByNumberUp}
                                   handleSortByNumberDesc={this.handleSortByNumberDesc}
                        />
                    )
                }
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.data,
    companies: state.companies.data
});
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getUserByIdRequest,
        getCompaniesRequest,
        getCompaniesSortByNameUpRequest,
        getCompaniesSortByNameDescRequest,
        getCompaniesSortByServesUpRequest,
        getCompaniesSortByServesDescRequest,
        getCompaniesSortByNumberUpRequest,
        getCompaniesSortByNumberDescRequest,
        deleteCompanyRequest,
        getLogOutAuthRequest
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperCompanies);

