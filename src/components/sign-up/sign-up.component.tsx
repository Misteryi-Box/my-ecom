import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

interface SignUpProps {

}
interface SubmissionInputs {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp = () => {
  const { register, handleSubmit, /*errors,*/ reset } = useForm<SubmissionInputs>();

  const onSubmit = async (data: SubmissionInputs) => {
    console.log(data)
    const {displayName, email, password, confirmPassword} = data;
    if(password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword( 
        email, 
        password 
      );
      
      await createUserProfileDocument(user, {displayName})
      reset();
    } catch (err){
      console.error(err);
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit(onSubmit)}> 
        <FormInput 
          type='text'
          name='displayName'
          label='Display Name'
          refPass={
            register({
              required: "Required",
            })
          }
        />
        <FormInput 
          type='email'
          name='email'
          label='Email'
          refPass={
            register({ 
              required: "Required", //or boolean
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                message: "invalid email address"
              } 
            })
          }
        />
        <FormInput 
          type='password'
          name='password'
          label='Password'
          refPass={
            register({
              required: "Required",
            })
          }
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          refPass={
            register({
              required: "Required",
            })
          }
        />
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  )
}

export default SignUp;