import React, {InputHTMLAttributes} from 'react';

import './form-input.styles.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
  refPass?: any;
  errors?: any;
  length?: number;
  label?: string;
}
const FormInput = ({
  refPass,
  errors,
  label,
  length,
  ...otherProps
}: FormInputProps) => (
  <div className="group">
    <input className='form-input' ref={refPass} {...otherProps}/>
    {
      label 
        ? (
          <label className={`${ length ? 'shrink': ''} form-input-label`}>
            {label}
          </label>
        )        
        : null
    }
    { errors && errors[`${otherProps.name}`] && errors[`${otherProps.name}`].message }
  </div>
);

export default FormInput;