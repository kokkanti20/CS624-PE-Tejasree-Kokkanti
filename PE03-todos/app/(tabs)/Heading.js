import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Heading = () => {
  return (
    <Text style={styles.heading}>My Todos</Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Heading;