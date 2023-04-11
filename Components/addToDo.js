import React, { useState }  from 'react';
import { StyleSheet, Text, TextInput, Button ,View } from 'react-native';


export default function AddToDo({submitHandler}){

    const [text, setText] = useState('');
    const changeHandler = (val) =>{
        setText(val);
    }

    return(
        <View>
            <TextInput
            style={styles.input} 
            placeholder='Add new Todo'
            onChangeText = {(val) => changeHandler(val)}
            />
            <Button onPress={() => submitHandler(text) } color='black' title='Add' />
        </View>
        
    )
}

const styles = StyleSheet.create({

    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }

    });
