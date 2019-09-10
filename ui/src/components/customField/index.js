import React, { Fragment } from 'react';
import InputMask from 'react-input-mask';

export const renderField = ({ input, label,disabled, type = "text", meta: { touched, error } }) => {
	return (
		<Fragment>
			<label className='field_label'>{label}</label>
			<div>
				<input className='field_input' {...input} placeholder={label} type={type} disabled={disabled} />
				{touched && error && <span className="field_error">{error}</span>}
			</div>
		</Fragment>
	);
};

export const RenderPhoneNumber = ({ input, label, disabled, type = "text", meta: { touched, error } }) => {
	return (
		<Fragment>
			<label className='field_label'>{label}</label>
			<div>
				<InputMask className='field_input'
					   {...input}
						mask="+38(999)999-99-99"
						maskChar=" "
					   placeholder={label}
					   type={type}
					   disabled={disabled}

				/>
				{touched && error && <span className="field_error">{error}</span>}
			</div>
		</Fragment>
	);
};

export const renderTextarea = ({ input, label,disabled, meta: { touched, error } }) => {
	return (
		<Fragment>
			<label className='field_label'>{label}</label>
			<div>
				<textarea className='field_textarea'  {...input} placeholder={label}  disabled={disabled} rows={3}/>
				{touched && error && <span className="field_error">{error}</span>}
			</div>
		</Fragment>
	);
};


