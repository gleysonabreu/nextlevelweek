import React, { TextareaHTMLAttributes } from 'react';
import { TextAreaBlock } from './styles';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const TextArea: React.FC<ITextAreaProps> = ({ label, name, ...props }) => {
  return (
    <TextAreaBlock>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...props}/>
    </TextAreaBlock>
  )
}

export default TextArea;