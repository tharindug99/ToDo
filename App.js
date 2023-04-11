import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddToDo from './Components/addToDo';
import SandBox from './Components/sandbox';

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
    
    if (text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text : text, key : Math.random().toString() },
          ... prevTodos 
        ];
      });
    }else{
      Alert.alert('Woaahh!!!', 'Please note that ToDos must be longer than 3 characters',
      [
        {text:'Yep, I understood'}
      ]);
    }
    
    
    
  }; 


  return (

    // <SandBox/>



    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding:40
  },
  list:{
    backgroundColor:'beige',
    borderRadius:20,
    flex:1,
    marginTop:20,
    fontSize:50,
    
  },
  item:{
    fontSize:50,
    backgroundColor:'green'
  }
});
