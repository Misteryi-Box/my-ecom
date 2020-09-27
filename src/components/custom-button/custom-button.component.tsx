import React, {ButtonHTMLAttributes } from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode,
}
const CustomButton = ({
  children,
  ...otherProps
}: CustomButtonProps) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;