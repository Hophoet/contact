
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'

//import {Ionicons} from '@expo/vector-icons'
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";

//get api contact method
function getContact(id){
       
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };          
          fetch("https://hophoetmovies.herokuapp.com/api/contact/"+id, requestOptions)
            .then(response => response.json())
            .then(result => {
                Alert.alert(
                    `${result[0].first_name} ${result[0].last_name}
                    `,
                    `Phone Number: ${result[0].phone_number}\nCompany: ${result[1].name}
                   ` ,
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: true }
                  )
            })
           
            .catch(error => {
                console.log('error', error)
                
            });
       
    }


//item
let ContactItem = (props) => {
    const item = props.item
    return(
        <TouchableOpacity 
            activeOpacity={.5} 
            style={styles.container}
            onPress={()=> {
                getContact(item.id)
            }
            }
            >
            <Icon style={styles.icon} name='person' size={40} color='gray'/>
            <Text>{props.item.first_name} {item.last_name}</Text>
    
        </TouchableOpacity>
    )
}

export {ContactItem}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        margin:10
    },
    icon:{
        margin:5
    }
})