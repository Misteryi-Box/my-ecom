import React from 'react';

import SignInForm from '../../components/signin-form/signin-form.component';
import './signin.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const LoginPage = () => (
  <div className='login'>
    <SignInForm />
  </div>
);

export default LoginPage;