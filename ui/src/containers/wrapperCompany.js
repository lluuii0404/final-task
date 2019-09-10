import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCompaniesByIdRequest, updateCompanyByIdRequest } from "../actions/actionCompany";
import { getUserByIdRequest } from "../actions/actionsUser";
import { getLogOutAuthRequest } from "../actions/actionAuth";
import Company from "../components/Company";
import Wrapper from "./wrapper";


class WrapperCompany extends Component{
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getCompaniesByIdRequest(id);
    }
    getInitialValues () {
        const { company } = this.props;
        const { id } = this.props.match.params;
        // console.log('getInitialValues COMPANY ', company);
        if (company._id === id) {
            return {
                name: company.name,
                address: company.address,
                service_of_activity: company.service_of_activity,
                number_of_employees: company.number_of_employees,
                type: company.type,
                description: company.description
            }
        }
    }
    takeValueCompany = values => {
        const { company } = this.props;
        // console.log('takeValueProfile VALUES-------- ', values);
        if (company) {
            this.props.updateCompanyByIdRequest({ id: company._id, values });
            this.props.getCompaniesByIdRequest(company._id);
        }
    };

    render() {
        const { company } = this.props;
        return (
            <Wrapper>
                {
                    company && (
                        <Company company={company}
                             initialValues={this.getInitialValues()}
                             onSubmit={this.takeValueCompany}/>
                    )
                }
            </Wrapper>
        );
    }
}
const mapStateToProps = state => ({
    company: state.companies.data[0],
    message: state.message
});
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getCompaniesByIdRequest,
        updateCompanyByIdRequest,
        getUserByIdRequest,
        getLogOutAuthRequest
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperCompany);
