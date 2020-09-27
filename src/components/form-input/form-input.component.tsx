import React from 'react';

import './form-input.styles.scss';

interface FormInputProps {
  register: any,
  length: number,
  label: boolean,
}
const FormInput = ({
  register,
  label,
  length,
}: FormInputProps) => (
  <div className="group">
    <input className='form-input' />
    {
      label 
        ? (
          <label className={`${ length ? 'shrink': ''} form-input-label`}>
            {label}
          </label>
        )        
        : null
    }
  </div>
);

export default FormInput;