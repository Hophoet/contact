import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';import Icon from "react-native-vector-icons/Ionicons";

export default class  Enter extends React.Component{
    constructor(props){
        super(props)
      
    }
 

    //get from storage
    _getTokenFormStorage = async () =>{
        const keys = await AsyncStorage.getAllKeys()
        const values = await AsyncStorage.multiGet(keys)
        console.log(keys)
        console.log(values)
        // this.setState({toDisplay:values[0][1]})
    }



    //get token by from the login
    _navigateTo = () => {
       
       
        //first login case
        let params = this.props.navigation.state.params
        if(params){
            //if token exists in the params   
            if(params.token){
                //save the token 
                this._saveToken(params.token)
                    
                this.props.navigation.navigate('Main', {'token':params.token})
            }
            else{
                //token exists case
                this._navigateIfTokenSave()
            }
        }
        else{
             //token exists case
            this._navigateIfTokenSave()
        }
       
    }
        
    
  
    //
    _navigateIfTokenSave =  async () => {
        const keys = await AsyncStorage.getAllKeys()
        const values = await AsyncStorage.multiGet(keys)
        let tokenExists = false
        values.forEach( item => {
            if(item){
                if(item[0] === 'token'){
                    //navigate if token alrdy store
                    this.props.navigation.navigate('Main', {'token':item[1]})
                    tokenExists =  true
                }
            }
        })
        if(!tokenExists){
            this.props.navigation.navigate('Auth')

        }
    }
    //save token
    _saveToken = (token) => {
        AsyncStorage.setItem('token', token)
        .then(()=>console.log('save'))
    }


    componentDidMount(){
        setTimeout(() => {
            this._navigateTo()  
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