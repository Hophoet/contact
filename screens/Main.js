import React from 'react'
import {StyleSheet, ActivityIndicator, View, FlatList, Text, TextInput, TouchableOpacity} from 'react-native'
import {Entypo, Ionicons} from '@expo/vector-icons'
import Icon from "react-native-vector-icons/Ionicons";
//item
import {ContactItem} from '../components/ContactItem'

export default class  Main extends React.Component{
    constructor(props){
        super()
        this.state = {
            searchContact:'',
            isLoading:false,
            data:[{"email": "hophoet@gmail.com", "first_name": "hophoet", "id": 1, "last_name": "Agbaku", "phone_number": "99797640"}, {"email": "celine@gmail.com", "first_name": "celine", "id": 2, "last_name": "Sanchez", "phone_number": "01876745"}, {"email": "hirs@gmail.com", "first_name": "Hirs", "id": 3, "last_name": "Rolerts", "phone_number": "89876545"}]
        }
    }
 
    //get api contact method
    _getAllContact = () => {
        this.setState({isLoading:true})
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };          
          fetch("https://hophoetmovies.herokuapp.com/api/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({data:[...result]})
                this.setState({isLoading:false})
            })
            .catch(error => {
                console.log('error', error)
                this.setState({isLoading:false})
            });
       
    }

     
    //get api contact method
    _getContact = (id) => {
        this.setState({isLoading:true})
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };          
          fetch(`https://hophoetmovies.herokuapp.com/api/contact/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({data:[...result]})
                this.setState({isLoading:false})
            })
            .catch(error => {
                console.log('error', error)
                this.setState({isLoading:false})
            });
       
    }


    componentDidMount(){
        //this._getAllContact()

    }

    _showData = () => {
        if(!this.state.isLoading){
            if(this.state.data.length > 0){
                return (
                    <FlatList
                            data={this.state.data}
                            keyExtractor={item => item.email}
                            renderItem={({item})=><ContactItem item={item}/>}
                    />
                )
            }
            else{
                return (
                    <View style={styles.notFoundContainer}>
                        <Text style={styles.notFoundText}>Contacts Not Found</Text>
                        <Text style={styles.checkConnexionText}>Check your connexion</Text>
                    </View>
                )
                
            }
          
        }
        else{
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator  color='gray' style={styles.activityIndicator} size='large'/>
                </View>
            )
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TextInput 
                        placeholder='Enter contact name'
                        style={styles.textinput}
                        onChangeText={searchContact =>this.setState({searchContact})}
                        />
                    
                    <TouchableOpacity 
                        activeOpacity={.5}
                        style={styles.buttonContainer}
                        
                        >
                        <Icon name="ios-search" color='white' size={25}/>
                    </TouchableOpacity>

                </View>
                
                <View style={styles.itemsContainer}>
                    {this._showData()}
                    
                </View>
            
         
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
        justifyContent:'center',
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
       
    },
    itemsContainer:{
        flex:6,
        backgroundColor:'white',
    },
    textinput:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:20,
        height:50,
        elevation:20
    },
    buttonContainer:{
        backgroundColor:'gray',
        height:50,
        width:90,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontSize:20,

    },
    activityIndicator:{
        elevation:20,
        alignSelf:'center',
        backgroundColor:'white',
        borderColor:'black',
        borderRadius:20
        
    },
    activityIndicatorContainer:{
        marginTop:50,
        flex:1
    },
    notFoundContainer:{
        marginTop:50,
        flex:1
    },
    notFoundText:{
        color:'gray',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
    checkConnexionText:{
        color:'gray',
        textAlign:'center',

    }
})