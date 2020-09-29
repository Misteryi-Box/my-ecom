import React, {ButtonHTMLAttributes } from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode,
  isGoogleSignIn?: boolean,
}
const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: CustomButtonProps) => (
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;