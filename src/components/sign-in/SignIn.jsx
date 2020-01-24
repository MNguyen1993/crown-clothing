import React from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>

					<div className="buttons">
						<Button type="submit">Sign In</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
