import React from 'react';

import SignInForm from '../../components/signin-form/signin-form.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin.styles.scss';

// import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignInForm />
    <SignUp />
  </div>
);

export default SignInAndSignUp;