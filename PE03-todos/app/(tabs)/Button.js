import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Submit" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 20,
  },
});

export default AddButton;