import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {renderField, renderTextarea} from "./customField";
import { newCompanyValidation } from "../_utils/validate";
import "../_style/style_profile_company_newcompany.css";

function NewCompany ({ handleSubmit, submitting, pristine }) {
    return (
        <div className="content-wrapper">
            <form className='content-form' onSubmit={handleSubmit} >
                <div className="block-edit-info">
                    <h2>Enter information about new company:</h2>
                    <div className="fields">
                        <Field name="name" type="text" label="Company name" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="address" type="text" label="Address" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="service_of_activity" type="text" label="Service of activity" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="number_of_employees" type="text" label="Number of employees" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="type" type="text" label="Type" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="description" type="text" label="Description" component={renderTextarea}/>
                    </div>

                    <div className="buttons">
                        <button className="btn" disabled={pristine || submitting}>
                            <span></span> Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default reduxForm({
    form: 'new_company',
    validate: newCompanyValidation
})(NewCompany);
