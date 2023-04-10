import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddToDo from './Components/addToDo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Buy Coffee', key: '1'},
    {text: 'Create App', key: '2'},
    {text: 'Visit Dentist', key: '3'},
    {text: 'Read a book', key: '4'},
    {text: 'Download AntMan 3', key: '5'},
    {text: 'Plan new Trip', key: '6'}
  ]);

  const pressHandler = (key) => { ////touch function
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => { /////button function
    setTodos((prevTodos) => {
      return [
        {text : text, key : Math.random().toString() },
        ... prevTodos 
      ];
      
    });
  }; 


  return (
    
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20,
    fontSize:50,
    
  },
  item:{
    fontSize:50,
    backgroundColor:'green'
  }
});
