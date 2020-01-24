import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import './SignInAndSignUpPage.scss';

const SignInAndSignUpPage = () => (
	<div className="signin-and-signup">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignUpPage;
