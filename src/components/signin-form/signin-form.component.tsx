import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './signin-form.styles.scss';

interface SubmissionInputs {
  email: string
  password: string
}
const SignInForm = () => {
  const { register, handleSubmit, errors, reset } = useForm<SubmissionInputs>();

  const onSubmit = (data: SubmissionInputs) => {
    console.log(data)
    reset();
  };

  return (
    <div className='signin-form'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput 
          name='email' /*value={email}*/
          type='email'
          label='Email'
          errors={errors}
          refPass={
            register({ 
              required: "Required", //or boolean
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                message: "invalid email address"
              } 
            })
          } 
          // required
        />
        {/* <label>Email</label> */}
        <FormInput 
          name='password' 
          type='password' /*value={password}*/ 
          refPass={register({ required: true})} 
          label="Password"
          // required
        />
        {/* <label>Password</label> */}
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
        
      </form>
    </div>
  )
};

export default SignInForm;