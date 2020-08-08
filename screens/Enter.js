import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Entypo, Ionicons} from '@expo/vector-icons'

export default class  Enter extends React.Component{
  
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>ContactApi</Text>
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Open</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
     
    },
    buttonContainer:{
        backgroundColor:'gray',
        padding:10,
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',

    },
    buttonText:{
        color:'white',
    }
    ,
    title:{
        alignSelf:'center',
        margin:10
    }
})