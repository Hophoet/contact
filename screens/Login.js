import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, TextInput, TouchableOpacity} from 'react-native'
import {Entypo, Ionicons} from '@expo/vector-icons'
import Toast from '../components/toasts'

export default class  Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
       
        }
        this.username = ''
        this.password = ''
    }

    _login = (username, password) => {
        this.setState({isLoading:true})
        var myHeaders = new Headers();
        //myHeaders.append("Authorization", "Token 64bab5ff0ac2b13a84fe9580dea2acee13748c15");

        var formdata = new FormData();
        formdata.append("username", username.trim());
        formdata.append("password ", password);

        var requestOptions = {
        method: 'POST',
        //headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://hophoetmovies.herokuapp.com/api/token/", requestOptions)
        .then(response => response)
        .then(result => {
            console.log(result.status)
            if(result.status >= 400 && result.status < 500){
                console.log('error')
            }
            else if (result.status === 200){
                this.props.navigation.navigate('App')
            }

            this.setState({isLoading:false})
            
        })
        .catch(error => {
            this.setState({isLoading:false})
            Toast._show_bottom_toast('This is a toast.')
            console.log('error '+ error)
        });
    }
    
    _loader = () => {
        if(this.state.isLoading){
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size='large' color='gray'/>
                </View>
            )
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text>Contact</Text>
                    <Text>Login to continue</Text>
                    {this._loader()}
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder='Enter your username'
                        style={styles.textinput}
                        onChangeText={text=>{this.username = text}}
                        onSubmitEditing={()=>{
                            
                
                        }}
                    />
                     <TextInput
                        placeholder='Enter your password'
                        ref='password'
                        style={styles.textinput}
                        secureTextEntry={true}
                        onChangeText={text=>{this.password = text}}
                        onSubmitEditing={()=>{
                            this._login(this.username, this.password)
                        }}

                    />
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => {
                        this._login(this.username, this.password)
                    }}
                    
                    >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
     
    },
    buttonContainer:{
        backgroundColor:'gray',
        padding:10,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',

    },
    buttonText:{
        color:'white',
    }
    ,
    title:{
        alignSelf:'center',
        margin:10
    },
    formContainer:{

    },
    textinput:{
     
        backgroundColor:'#ffff',
        marginHorizontal:10,
        padding:10,
        marginBottom:10,
        elevation:2
    },
    headerContainer:{
        alignItems:'center',
        marginBottom:20
    }
})