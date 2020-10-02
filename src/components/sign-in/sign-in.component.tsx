import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

interface SubmissionInputs {
  email: string
  password: string
}
const SignInForm = () => {
  const { register, handleSubmit, errors, reset } = useForm<SubmissionInputs>();

  const onSubmit = async (data: SubmissionInputs) => {
    const { email, password } = data;
    console.log(data)
    try {
      await auth.signInWithEmailAndPassword(email,password);
      reset();
    } catch (err){
      console.error(err);
    }
  };

  return (
    <div className='signin-form'>
      <h2 className='title'>I already have an account</h2>
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
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
        
      </form>
    </div>
  )
};

export default SignInForm;