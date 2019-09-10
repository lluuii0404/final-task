import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField, renderTextarea} from "./customField";
import { updateCompanyValidation } from "../_utils/validate";
import "../_style/style_profile_company_newcompany.css";

function Company ({ handleSubmit, submitting, pristine, company }) {
    return (
        <div className="content-wrapper">
            <form className='content-form' onSubmit={handleSubmit} >
                <div className="block-info">
                    <h2>I n f o r m a t i o n</h2>
                    <p>Name: <span>{company.name}</span> </p>
                    <p>Address: <span>{company.address}</span> </p>
                    <p>Service of activity: <span>{company.service_of_activity}</span> </p>
                    <p>Number of employees: <span>{company.number_of_employees}</span></p>
                    <p>Type: <span>{company.type}</span></p>
                    <p>Description: <span>{company.description}</span></p>
                </div>
                <div className="block-edit-info">
                    <h2>Edit your info:</h2>
                    <div className="buttons">
                        <button className="btn" disabled={pristine || submitting}>
                            <span></span> Save
                        </button>
                    </div>
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
                </div>
            </form>
        </div>
    );

}
export default reduxForm({
    form: 'company',
    validate: updateCompanyValidation
})(Company);
