import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import {AsyncStorage} from '@react-native-community/async-storage'
import Icon from "react-native-vector-icons/Ionicons";

export default class  Enter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            token:''
        }
    }
    
    //getter
    get token(){
        return this.state.data
    }
    //setter
    set token(data){
        this.setState({ data })
    }

    //store data
    _storeToken = (token)=>{
        AsyncStorage
        .setItem('token', token)
    }

    //get from storage
    _getTokenFormStorage = async () =>{
        const keys = await AsyncStorage.getAllKeys()
        const values = await AsyncStorage.multiGet(keys)
        // console.log(keys)
        // console.log(values)
        this.setState({toDisplay:values[0][1]})
    }

    tokenExists = () => {
        if(this.state.token.trim().length === 0){
            return false
        }
        return true
    }

    //get token by from the login
    _navigateTo = () => {
        //token exists case
        if(this.tokenExists()){
           // this.props.navigation.navigate('Main')
           console.log('TOKEN EXIST')
        }
        //first login case
        else {
            let params = this.props.navigation.state.params
            if(params){
                console.log(params)
                if(params.token){
                    console.log('TOKEN '+params.token)
                    // this.props.navigation.navigate('Main')
                }
                else{
                    console.log('TOKEN NOT SET')
                    // this.props.navigation.navigate('Auth')
                }
            }
            else{
                console.log('TOKEN NOT SET')
                // this.props.navigation.navigate('Auth')
            }
        }
        
    }
  

    //save token
    _saveToken = (token) => {
        AsyncStorage.setItem('token', token)
    }

    componentDidMount(){
        setTimeout(() => {
            // this._navigateTo()
            this._getTokenFormStorage()
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