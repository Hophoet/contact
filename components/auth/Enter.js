import React from 'react'
import {View, Text, TextInput, Dimensions, TouchableOpacity, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
//class
export default class Enter extends React.Component{
    //constructor
    constructor(props){
        super(props)

    }

    //navigate method
    _navigate = (screen) => {
        this.props.navigation.navigate(screen)
    }

    //render
    render(){
        return(
            <View style={styles.container} >
                <View style={styles.header}>
                    <Ionicons name='ios-contacts' size={30} color='#1FA9FF'/>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>Save all your contacts with one account.</Text>
                    <TouchableOpacity 
                        activeOpacity={.5} 
                        style={styles.bodyButton}
                        onPress={()=>this._navigate('SignUp')}
                        >
                        <Text style={styles.bodyButtonTitle}>Create account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text>Have an account already? </Text>
                        <TouchableOpacity 
                            activeOpacity={.5}
                            onPress={()=> this._navigate('SignIn')}
                            >
                            <Text style={styles.login} > Log in</Text>
                        </TouchableOpacity>
                        
                </View>
               
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:1,
        paddingLeft:Dimensions.get('window').width/8,
        justifyContent:'space-around',
        
     

    },
    body:{
        flex:3,
        justifyContent:'center',
     
    },
    footer:{
        flex:1,
        paddingLeft:Dimensions.get('window').width/8,
        flexDirection:'row',
        
    },
    bodyButton:{
        backgroundColor:'#1FA9FF',
        padding:10,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:Dimensions.get('window').width/8,
        marginTop:20
    },
    bodyButtonTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    bodyTitle:{
        color:'black',
        alignSelf:'center',
        textAlign:'center',
        fontSize:25
    },
    login:{
        color:'#1FA9FF',
    
    }
})