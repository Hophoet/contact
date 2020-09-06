
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
                      { text: "OK", onPress: () => {} }
                    ],
                    { cancelable: true }
                  )
            })
           
            .catch(error => {
                Alert.alert(
                    '',
                    `Check your connexion`,
                    [
                      { text: "OK", onPress: () => {} }
                    ],
                    { cancelable: true }
                  )
                
            });
       
    }


//item
let ContactItem = (props) => {
    const item = props.item
    let firstLetter =  item.first_name.trim().charAt(0).toUpperCase()
    let lastLetter =  item.last_name.trim().charAt(0).toUpperCase()

    return(
        <TouchableOpacity 
            activeOpacity={.5} 
            style={styles.container}
            onPress={()=> {
                getContact(item.id)
            }
            }
            >
            <View style={styles.iconContainer}> 
                <Text style={styles.letterIcon} >{firstLetter}{lastLetter}</Text>
            </View>
            <Text>{props.item.first_name} {item.last_name}</Text>
    
        </TouchableOpacity>
    )
}

export {ContactItem}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        alignSelf:'flex-start'
    },
    icon:{
        margin:5
    },
    iconContainer:{
        borderColor:'gray',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        marginRight:5,
        width:60,
        height:60,
        
    },
    letterIcon:{
        fontSize:25,
        fontWeight:'bold',
    }
})