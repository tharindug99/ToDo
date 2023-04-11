import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox(){

    return(
        <View style={styles.container}>
            <Text style={styles.box1}>One</Text>
            <Text style={styles.box2}>Two</Text>
            <Text style={styles.box3}>Three</Text>
            <Text style={styles.box4}>Four</Text>
            {/* <Text style={styles.box5}>Five</Text>
            <Text style={styles.box6}>Six</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop:45,
        backgroundColor:'violet',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    }, 
    box1:{
        padding:20,
        backgroundColor:'coral'
    },
    box2:{
        padding:20,
        backgroundColor:'yellow'
    },
    box3:{
        padding:20,
        backgroundColor:'blue'
    },
    box4:{
        padding:20,
        backgroundColor:'green'
    },
    box5:{
        padding:20,
        backgroundColor:'white'
    },
    box6:{
        padding:20,
        backgroundColor:'gold'
    }

});