import React from 'react';

import {
  ContainerErrorMessage,
} from './styles';

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
  return(
    <ContainerErrorMessage>
      <h1>{message}</h1>
    </ContainerErrorMessage>
  );
}

export default ErrorMessage;