import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { signInValidation } from '../_utils/validate'
import { renderField } from './customField'
import '../_style/style_login_singup_page.css';

function SignIn ({ handleSubmit, submitting, pristine }) {
	return (
		<div className='wrapper'>
			<div className="block-background">
			</div>
			<div className="block-form-wrapper">
				<form className="block-form" onSubmit={ handleSubmit }>
					<h1 >Вход в cистему</h1>
					<p >Введите E-mail и пароль</p>
					<div className="block-field">
						<Field name="email" type="email" label="Email" component={renderField}/>
					</div>
					<div className="block-field">
						<Field name="password" type="password" label="Password" component={renderField}/>
					</div>
					<div className="block-form-button">
						<button className="form-btn" disabled={pristine || submitting}>Войти</button>
					</div>
				</form>
				<div className="block-link">
					<Link to="signup" > Sign Up </Link>
				</div>
			</div>
		</div>
	)
}

export default reduxForm({
	form: 'signIn',
	validate: signInValidation,
})(SignIn)
