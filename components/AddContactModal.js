
import React from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TextInput} from 'react-native'

//import {Ionicons} from '@expo/vector-icons'
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";

export default class AddContactModal extends React.Component {
    constructor(props){
        super(props)
        this.name = ''
        this.phoneNumber = ''
    }

    _saveContact = () => {
        console.log(this.name + '\n'+this.phoneNumber)
    }
 
    render(){
     
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={this.props.toggleAddContactModal}
                        style={styles.closeButtonContainer}>
                        <Icon name='md-close' color='white' size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._saveContact}
                        style={styles.closeButtonContainer}>
                        <Icon name='ios-checkmark-sharp' color='white' size={25}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.body}>
                    <View style={styles.form}>
                        <View style={styles.textInputContainer}>
                            <Icon style={styles.textInputIcon} name='ios-person' color='white' size={25}/>
                            <TextInput 
                                autoFocus={true}
                                onChangeText={text=>this.name = text}
                                style={styles.textInput} 
                                placeholder='Name' 
                                onSubmitEditing={() =>this.refs.phoneNumber.focus()}
                                />
                        </View>
                        <View style={styles.textInputContainer}>
                            <Icon style={styles.textInputIcon} name='ios-call' color='white' size={25}/>
                            <TextInput 
                                ref='phoneNumber'
                                onChangeText={text=>this.phoneNumber = text}
                                style={styles.textInput} 
                                placeholder='Phone Number' 
                                keyboardType='number-pad'
                                onSubmitEditing={this._saveContact}
                                />
                        </View>
                     
                    </View>
                </ScrollView>
             
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
       
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
        // backgroundColor:'#78FE',
        flex:1,

    },
    form:{
        // backgroundColor:'#8888',
        marginHorizontal:50,
        
    },
    textInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        // borderBottomColor:'black',
        // borderBottomWidth:1,
    },
    textInputIcon:{
        backgroundColor:'gray',
        padding:5,
        borderRadius:60,
        marginHorizontal:5
    },
    textInput:{
        borderBottomColor:'gray',
        borderBottomWidth:1,
        flex:1,
    }
})