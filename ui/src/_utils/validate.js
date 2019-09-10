export const signInValidation = values => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Необходимо ввести эл. почту'
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Введите адрес электронной почты'
	}

	if (!values.password) {
		errors.password = 'Введите пароль'
	}
	return errors
};

export const signUpValidation = values => {
	const errors = {};

	if (!values.first_name) {
		errors.first_name = 'Необходимо ввести имя'
	}
	if (!values.last_name) {
		errors.last_name = 'Необходимо ввести фамилию'
	}
	if (!values.nick_name) {
		errors.nick_name = 'Необходимо ввести ник'
	}

	if (!values.email) {
		errors.email = 'Необходимо ввести эл. почту'
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Введите имейл'
	}

	if (!values.password) {
		errors.password = 'Необходимо ввести пароль'
	} else if (values.password.length < 6) {
		errors.password = 'Пароль должен быть не меньше 6 символов'
	}

	if (!values.phone_number) {
		errors.phone_number = 'Необходимо ввести номер телефона'
	} else if (
		!/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/i.test(values.phone_number)
	) {
		errors.phone_number = "Введите номер телефона +38(xxx)xxx-xx-xx"
	}

	if (!values.position) {
		errors.position = 'Необходимо ввести позицию'
	}

	if (!values.description) {
		errors.description = 'Необходимо ввести описание'
	}
	return errors
};


export const updateUserInfoValidation = values => {
	const errors = {};
	if (!values.first_name) {
		errors.first_name = 'Необходимо ввести имя'
	}
	if (!values.last_name) {
		errors.last_name = 'Необходимо ввести фамилию'
	}
	if (!values.nick_name) {
		errors.nick_name = 'Необходимо ввести ник'
	}
	if (!/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/i.test(values.phone_number)) {
		errors.phone_number = "Номер телефона +38(xxx)xxx-xx-xx"
	}
	return errors
};


export const newCompanyValidation = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Необходимо ввести название компании'
	}
	if (!values.address) {
		errors.address = 'Необходимо ввести адрес'
	}
	if (!values.service_of_activity) {
		errors.service_of_activity = 'Необходимо ввести область сервиса'
	}
	if (!values.number_of_employees) {
		errors.number_of_employees = 'Необходимо ввести количество сотрудников'
	} else if ( /\D/i.test(values.number_of_employees)) {
		errors.number_of_employees = 'Не может сожержать буквы'
	}
	if (!values.type) {
		errors.type = 'Необходимо ввести тип компании'
	}
	if (!values.description) {
		errors.description = 'Необходимо ввести описание'
	}
	return errors
};

export const updateCompanyValidation = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Необходимо ввести название компании'
	}
	if (!values.address) {
		errors.address = 'Необходимо ввести адрес'
	}
	if (!values.service_of_activity) {
		errors.service_of_activity = 'Необходимо ввести область сервиса'
	}
	if ( /\D/i.test(values.number_of_employees)) {
		errors.number_of_employees = 'Не может сожержать буквы'
	}
	return errors;
};
