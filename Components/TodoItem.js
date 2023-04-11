import React  from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}){

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
                <MaterialIcons name='delete' size={18} color='red' style={styles.icon}/>
            

            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        margin:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
   icon:{
        justifyContent:'flex-end',
    }
})