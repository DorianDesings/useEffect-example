import { useState } from 'react';

const regexEmail =
	/^(?=[a-zA-Z0-9@._%+-]{6,254}$)([a-zA-Z0-9%+-]+|[a-zA-Z0-9][a-zA-Z0-9-]{0,62}[a-zA-Z0-9])@([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}$/;

// Contraseña con longitud mínima de 8 caracteres y al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
const regexPassword =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

export const useForm = initialValues => {
	const [formData, setFormData] = useState(initialValues);
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [isValidPassword, setIsValidPassword] = useState(false);
	const [allFieldsAreFilled, setAllFieldsAreFilled] = useState(false);

	const changeFormData = (key, value) => {
		setFormData({ ...formData, [key]: value });
		setIsValidEmail(validateEmail());
		setIsValidPassword(validatePassword());
		validateAllFieldsAreFilled();
	};

	const validateEmail = () => {
		if (!formData.email) return;
		return regexEmail.test(formData.email);
	};

	const validatePassword = () => {
		if (!formData.password) return;
		return regexPassword.test(formData.password);
	};

	const validateAllFieldsAreFilled = () => {
		const allFields = Object.values(formData);
		setAllFieldsAreFilled(allFields.every(field => field));
	};

	return {
		formData,
		changeFormData,
		isValidPassword,
		isValidEmail,
		allFieldsAreFilled
	};
};
