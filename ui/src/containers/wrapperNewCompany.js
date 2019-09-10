import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { jwtDecode, takeId } from "../_utils/checkExp";
import { getLogOutAuthRequest } from "../actions/actionAuth";
import { getUserByIdRequest } from "../actions/actionsUser";
import { getCompaniesRequest, postNewCompanyRequest} from "../actions/actionCompany";
import NewCompany from "../components/newCompany";
import Wrapper from "./wrapper";

class WrapperNewCompany extends Component{
    takeValueNewCompany = values => {
        const token = localStorage.getItem("token");
        const {new_company} =  this.props.form_new_company;

        if (jwtDecode(token)){
            const userId = takeId(token);

            values= {...values, userId: userId};

            this.props.postNewCompanyRequest(values);
            this.props.getCompaniesRequest();

            new_company.values.name = "";
            new_company.values.address = "";
            new_company.values.service_of_activity = "";
            new_company.values.number_of_employees = "";
            new_company.values.type = "";
            new_company.values.description = "";

            this.props.history.push('/companies');
        }
    };

    render() {
        return (
            <Wrapper>
                <NewCompany onSubmit={ this.takeValueNewCompany } />
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    form_new_company: state.form
});
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getUserByIdRequest,
        getLogOutAuthRequest,
        postNewCompanyRequest,
        getCompaniesRequest,
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperNewCompany);
