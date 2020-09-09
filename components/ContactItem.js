
import React from 'react'
import {View, Text, StyleSheet, Modal, TouchableOpacity, Alert} from 'react-native'

//import {Ionicons} from '@expo/vector-icons'
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
//colors
import {colors} from '../assets/colors/colors'
//
import ContactDetailModal from './ContactDetailModal'

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
export default class ContactItem extends React.Component{
    constructor(props){
        super(props)
        this.state =  {
            contactDetailModalIsShow:false
        }
    }

    //show contact detail
    _showContactDetail = (contact) => {
        Alert.alert(
            contact.first_name+' '+contact.last_name, 
            '+09 89 87 67 33', 
            [
                {text:'Call', onPress:() => console.log('call')},
            ], 
            {cancelable:true}
            )
    }

    //toggle add contact component modal
    toggleContactDetailModal = () =>{
        this.setState({contactDetailModalIsShow:!this.state.contactDetailModalIsShow})
    }

    render(){
        const item = this.props.item
        let firstLetter =  item.first_name.trim().charAt(0).toUpperCase()
        let lastLetter =  item.last_name.trim().charAt(0).toUpperCase()
        const coreColor = colors.core
        return (
        <View>
            <Modal transparent={true} animationType="slide"   animated={true} onRequestClose={this.toggleContactDetailModal} visible={this.state.contactDetailModalIsShow}>
                <ContactDetailModal contact={item} toggleContactDetailModal={this.toggleContactDetailModal}/>
            </Modal>
            <TouchableOpacity 
                activeOpacity={.5} 
                style={styles.container}
                onPress={() =>  {
                    this._showContactDetail(item)
                }}
                >
                <View style={styles.iconContainer}> 
                    <Text style={styles.letterIcon} >{firstLetter}{lastLetter}</Text>
                </View>
                <Text>{item.first_name} {item.last_name}</Text>
        
            </TouchableOpacity>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        alignSelf:'flex-start',
        flex:1,
    },
    icon:{
        margin:5
    },
    iconContainer:{
        
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:StyleSheet.hairlineWidth,
        marginRight:5,
        width:60,
        height:60,
        
        
    },
    letterIcon:{
        fontSize:25,
        fontWeight:'bold',
        color:colors.core,
    }
})