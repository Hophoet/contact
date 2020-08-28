import React from 'react'
import {View, Text, TextInput, Dimensions, StatusBar, TouchableOpacity, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
//class
export default class Splash extends React.Component{
    //constructor
    constructor(props){
        super(props)
        this.state = {
            token: ''
        }
    }

    componentDidMount() {
        if(this.props.navigation.state.params){
            if(this.props.navigation.state.params.token){
                console.log('token set')
            }
            else{
                console.log('token not set')
            }
        }
        setTimeout(()=>{
            if(this.token){

            }
            else{
                //this.props.navigation.navigate('Enter')
            }
        }, 3000)
    }
   
    //render
    render(){
        
        return(
            <View ref='view' style={styles.container} >
                <StatusBar backgroundColor='#1FA9FF'/>
                <Ionicons name='ios-contacts' size={70} color='#1FA9FF'/>
                <Text >Contact</Text>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})