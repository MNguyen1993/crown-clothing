import React from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import './SignIn.scss';

const initialState = {
	email: '',
	password: '',
};

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form action="" onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={email}
						handleChange={this.handleChange}
						label="email"
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={password}
						handleChange={this.handleChange}
						label="password"
						required
					/>

					<Button type="submit">Sign In</Button>
				</form>
			</div>
		);
	}
}

export default SignIn;
