
import React from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TextInput} from 'react-native'

//import {Ionicons} from '@expo/vector-icons'
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";

export default class ContactDetailModal extends React.Component {
    constructor(props){
        super(props)
      
    }

    render(){
        let item = this.props.contact
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={this.props.toggleContalDetailModal}
                        style={styles.modalLeft}>
                        <Icon name='ios-person' style={styles.contactIcon} color='white' size={25}/>
                        <View style={styles.modalTitleContainer}>
                            <Text style={styles.name}>{item.first_name}</Text>
                            <Text style={styles.name}>{item.last_name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{this.props.toggleContactDetailModal()}}
                        style={styles.closeButtonContainer}>
                        <Icon name='ios-close' color='white' size={25}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.body}>
                    <View>
                        <Text>{item.first_name}</Text>
                        <Text>{item.last_name}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.phone_number}</Text>
                    </View>
                  
                </ScrollView>
             
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:Dimensions.get('window').width/1.2,
        top:Dimensions.get('window').height - Dimensions.get('window').width/1.2,
        borderTopEndRadius:10,
        borderTopStartRadius:10
       
    },
    header:{
        backgroundColor:'gray',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:55,
    },
    closeButtonContainer:{
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
      
       
        
    },
    closeButtonText:{
        color:'black',
        fontSize:30,
        textAlign:'center',
    },
    body:{
        backgroundColor:'white',
      

    },
    modalLeft:{
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
      
    },
    modalTitleContainer:{
        flexDirection:'row',
    },
    contactIcon:{
        marginRight:15
    },
    name:{
        color:'white',
        marginRight:3
    }
})