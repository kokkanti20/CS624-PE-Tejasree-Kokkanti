import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ inputValue, inputChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="What do you need to do?"
      value={inputValue}
      onChangeText={inputChange}
      autoCapitalize="sentences" // Optional: Automatically capitalize the first letter of each sentence
      returnKeyType="done" // Optional: Change the return key to "done"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 6,
  },
});

export default Input;
