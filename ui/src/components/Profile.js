import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField, RenderPhoneNumber, renderTextarea } from "./customField";
import { updateUserInfoValidation } from "../_utils/validate";
import "../_style/style_profile_company_newcompany.css";

function Profile ({ handleSubmit, submitting, pristine, user }) {
    return (
        <div className="content-wrapper">
            <form className='content-form' onSubmit={handleSubmit} >
                <div className="block-info">
                    <h2>P r o f i l e</h2>
                    <p>First name: <span>{user.first_name}</span> </p>
                    <p>Last name: <span>{user.last_name}</span> </p>
                    <p>Nick name: <span>{user.nick_name}</span> </p>
                    <p>Email: <span>{user.email}</span></p>
                    <p>Phone number: <span>{user.phone_number}</span></p>
                    <p>Position: <span>{user.position}</span></p>
                    <p>Description: <span>{user.description}</span></p>
                </div>
                <div className="block-edit-info">
                    <h2>Edit your info:</h2>
                    <div className="buttons">
                        <button className="btn" disabled={pristine || submitting}>
                            <span></span> Save
                        </button>
                    </div>
                    <div className="fields">
                        <Field name="first_name" type="first_name" label="First name" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="last_name" type="last_name" label="Last name" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="nick_name" type="nick_name" label="Nick name" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="email" type="email" label="Email" disabled={true} component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="phone_number" type="text" label="Phone number" component={RenderPhoneNumber}/>
                    </div>
                    <div className="fields">
                        <Field name="position" type="position" label="Position" component={renderField}/>
                    </div>
                    <div className="fields">
                        <Field name="description" type="description" label="Description" component={renderTextarea}/>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default reduxForm({
    form: 'profile',
    validate: updateUserInfoValidation,
})(Profile);
