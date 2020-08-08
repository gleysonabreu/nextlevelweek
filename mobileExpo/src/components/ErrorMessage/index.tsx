import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textError}>{message}</Text>
    </View>
  );
}

export default ErrorMessage