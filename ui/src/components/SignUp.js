import React from 'react'
import { Field, reduxForm } from 'redux-form'


import { signUpValidation } from '../_utils/validate'
import { renderField, renderTextarea,RenderPhoneNumber } from './customField'
import { Link } from "react-router-dom";

function SignUp ( { handleSubmit, submitting, pristine }) {
	return (
		<div className='wrapper'>
			<div className="block-background">
			</div>
			<div className="block-form-wrapper">
				<form className="block-form"  onSubmit={handleSubmit}>
					<h1>Регистрация</h1>
					<p>Заполните все поля</p>
					<div className="block-field">
						<Field name="first_name" type="first_name" label="First name" component={renderField}/>
					</div>
					<div className="block-field">
						<Field name="last_name" type="last_name" label="Last name" component={renderField}/>
					</div>
					<div className="block-field">
						<Field name="nick_name" type="nick_name" label="Nick name" component={renderField}/>
					</div>
					<div className="block-field">
						<Field name="email" type="email" label="Email" component={renderField}/>
					</div>
					<div className="block-field">
						<Field name="password" type="password" label="Password" component={renderField}/>
					</div>
					<div className="block-field">
						<Field name="phone_number" type="text" label="Phone number" component={RenderPhoneNumber}/>
					</div>
					<div className="block-field">
						<Field name="position" type="position" label="Position" component={renderField}/>
					</div>
					<div className="block-field">
						<Field name="description" type="description" label="Description" component={renderTextarea}/>
					</div>
					<div className="block-form-button">
						<button className="form-btn" disabled={pristine || submitting}> Регистрация </button>
					</div>
				</form>
				<div className="block-link">
					<Link to="login"> Login </Link>
				</div>
			</div>
		</div>
	)
}
export default reduxForm({
	form: 'signUp',
	validate: signUpValidation,
})(SignUp)
