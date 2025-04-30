import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import TodoList from './TodoList';
import TabBar from './TabBar';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('ALL');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        title: inputValue,
        complete: false,
        id: Date.now().toString()
      };
      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      setInputValue('');
      console.log('Added Todo:', newTodo);
    }
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
    console.log('Toggled complete:', id);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    console.log('Deleted Todo:', id);
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'COMPLETE':
        return todos.filter(todo => todo.complete);
      case 'INCOMPLETE':
        return todos.filter(todo => !todo.complete);
      default:
        return todos;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="What do you need to do?"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <TabBar filter={filter} setFilter={setFilter} />
      <TodoList
        todos={getFilteredTodos()}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    flex: 1
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5
  }
});
