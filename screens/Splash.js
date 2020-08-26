import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

export default class  Enter extends React.Component{

    state = {
        authToken:'jkjk'
    }

    //navigate
    _navigate = () => {
        if(this.state.authToken){
            this.props.navigation.navigate('Main')
        }
        else{
            this.props.navigation.navigate('Auth')
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this._navigate()
        }, 3000)
    }
  
    render(){
        return(
            <View style={styles.container}>
                <Icon name="ios-call" color='gray' size={25}/>   
                <Text style={styles.title}>Contacts</Text>
                <ActivityIndicator size='small' color='gray'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
     
    }
})