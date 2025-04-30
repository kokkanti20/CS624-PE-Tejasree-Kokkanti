import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ setFilter, filter }) => {
  const renderTab = (label, value) => (
    <TouchableOpacity onPress={() => setFilter(value)}>
      <Text style={filter === value ? styles.active : styles.inactive}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderTab('All', 'ALL')}
      {renderTab('Completed', 'COMPLETE')}
      {renderTab('Incomplete', 'INCOMPLETE')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  active: {
    fontWeight: 'bold',
    color: 'blue',
  },
  inactive: {
    color: 'gray',
  },
});

export default TabBar;