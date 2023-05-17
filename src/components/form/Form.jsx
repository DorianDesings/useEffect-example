import { useForm } from '../../hooks/useForm';

const Form = () => {
	const {
		formData,
		changeFormData,
		isValidPassword,
		isValidEmail,
		allFieldsAreFilled
	} = useForm({
		name: '',
		password: '',
		email: ''
	});

	console.log(allFieldsAreFilled);

	return (
		<>
			<form onSubmit={e => e.preventDefault}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						value={formData.name}
						onChange={e => changeFormData('name', e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={formData.password}
						onChange={e => changeFormData('password', e.target.value)}
					/>
					{!isValidPassword && <span>Password inseguro</span>}
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						value={formData.email}
						onChange={e => changeFormData('email', e.target.value)}
					/>
					{!isValidEmail && <span>Email incorrecto</span>}
				</div>
			</form>
			<p>{formData.name}</p>
			<p>{formData.email}</p>
		</>
	);
};

export default Form;
