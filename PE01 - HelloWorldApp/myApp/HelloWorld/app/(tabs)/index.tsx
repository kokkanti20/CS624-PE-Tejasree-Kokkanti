import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tejasree Kokkanti</Text>
      <Text style={styles.text}>Masters Of Computer Science</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey', // Changed to yellow as per requirements
  },
  text: {
    fontSize: 30,
    margin: 10,
    color: 'black', // Optional: Set text color for better visibility
  },
});

export default App;