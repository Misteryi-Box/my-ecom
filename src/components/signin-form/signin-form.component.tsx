import React from 'react';
import { useForm } from 'react-hook-form';

import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './signin-form.styles.scss';

interface SignInFormInputs {
  email: string,
  password: string
}
const SignInForm = () => {
  const { register, handleSubmit, errors, reset } = useForm<SignInFormInputs>();

  const onSubmit = (data: SignInFormInputs) => {
    console.log(data)
    reset();
  };

  return (
    <div className='signin-form'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          name='email' /*value={email}*/
          type='email'
          ref={
            register({ 
              required: "Required", //or boolean
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                message: "invalid email address"
              } 
            })
          } 
          required/>
        <label>Email</label>
        <input name='password' type='password' /*value={password}*/ ref={register({ required: true})} required/>
        <label>Password</label>
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
        
      </form>
    </div>
  )
};

export default SignInForm;