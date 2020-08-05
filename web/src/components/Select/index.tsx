import React, { SelectHTMLAttributes } from 'react';
import { SelectBlock } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
const Select: React.FC<ISelectProps> = ({ label, name, options, ...props }) => {
  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...props}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </SelectBlock>
  )
}

export default Select;