import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(){

    return(
        <View style={styles.header}>
            <Text style={styles.title}>MyTodos</Text>
        </View>
    )
}

const styles  = StyleSheet.create ({
    header:{
        backgroundColor:'black',
        height:80,
        paddingTop:38,
        alignItems:'center',
    },
    title:{
        color:'white',
        textAlign:'center',
        paddingTop:1,
        fontSize:20,
        fontWeight:'bold'
        // fontFamily:'Sans'
    }
}); 