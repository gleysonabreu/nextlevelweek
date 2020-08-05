import React, { InputHTMLAttributes } from 'react';
import { InputBlock } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}
const Input: React.FC<IInputProps> = ({ label, name, ...props }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...props}/>
    </InputBlock>
  )
}

export default Input;