import React from 'react'
import {StyleSheet, View, Animated, StatusBar, Text, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';import Icon from "react-native-vector-icons/Ionicons";
//colors
import {colors} from '../assets/colors/colors'

export default class  Enter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            springValue: new Animated.Value(.5),
        }
      
    }

    _animate = () => {
        Animated.spring(this.state.springValue,{
            toValue:1,
            friction:5,
            useNativeDriver:true,

        }).start( () => {
            // this._navigateTo()
            this.props.navigation.navigate('Main')
        })
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
        .then(()=>{
            //save case
        })
    }


    componentDidMount(){
        this._animate()
            // this._navigateTo()  
        // this.props.navigation.navigate('Main')
      
    }
  
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.core}/>
                <Animated.View style={[styles.logoContainer,
                    { transform:[{scale:this.state.springValue}]}
                ]}>
                    <Text style={styles.logoText}>CONTA</Text>
                    
                </Animated.View>
                <Text style={styles.title}>Save your contacts</Text>
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
     
    },
    logoContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        borderColor:colors.core,
        borderWidth:StyleSheet.hairlineWidth,
    },
    logoText:{
        fontWeight:'bold',
        color:colors.core,
        fontSize:27,
    }
})