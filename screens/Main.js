import React from 'react'
import {StyleSheet, ActivityIndicator, View, Modal, FlatList, Text, TextInput, TouchableOpacity} from 'react-native'
import {Entypo, Ionicons} from '@expo/vector-icons'
import Icon from "react-native-vector-icons/Ionicons";
//components
import {ContactItem} from '../components/ContactItem'
import FloatButton from '../components/FloatButton'
import AddContactModal from '../components/AddContactModal'


export default class  Main extends React.Component{
    constructor(props){
        super()
        this.state = {
            authToken:'',
            searchContact:'',
            isLoading:false,
            addContactModalIsShow: false,

            baseData:[
                {first_name:'Hophoet', email:'hohoet@gmail.com', last_name:'Agbaku'},
                {first_name:'Robert', email:'hphoet@gmail.com', last_name:'Lucs'},
                {first_name:'Emanule', email:'phoet@gmail.com', last_name:'Aboh'},
                {first_name:'Alice', email:'hopet@gmail.com', last_name:'Bruce'},
                {first_name:'Gloria', email:'hhoet@gmail.com', last_name:'Agbeha'},
                {first_name:'Dalmeda', email:'hooet@gmail.com', last_name:'Joz'},
                {first_name:'cilvest', email:'1@gmail.com', last_name:'Bruce'},
                {first_name:'Miriel', email:'2@gmail.com', last_name:'Agbeha'},
                {first_name:'Celine', email:'3@gmail.com', last_name:'Joz'},
            ],
            data:[
                {first_name:'Hophoet', email:'hohoet@gmail.com', last_name:'Agbaku'},
                {first_name:'Robert', email:'hphoet@gmail.com', last_name:'Lucs'},
                {first_name:'Emanule', email:'phoet@gmail.com', last_name:'Aboh'},
                {first_name:'Alice', email:'hopet@gmail.com', last_name:'Bruce'},
                {first_name:'Gloria', email:'hhoet@gmail.com', last_name:'Agbeha'},
                {first_name:'Dalmeda', email:'5@gmail.com', last_name:'Joz'},
                {first_name:'cilvest', email:'1@gmail.com', last_name:'Bruce'},
                {first_name:'Miriel', email:'3@gmail.com', last_name:'Agbeha'},
                {first_name:'Celine', email:'4@gmail.com', last_name:'Joz'},
            ]
        }
    }

    _stateSearch = (query) => {
        let text = query.trim().toLowerCase()
        if(text){
            this.setState({
                data:[...this.state.baseData.filter(contact => (contact.first_name.toLowerCase().indexOf(text) >= 0 || contact.last_name.toLowerCase().indexOf(text) >= 0 || contact.email.toLowerCase().indexOf(text) >= 0 ))]
            })
        }
        else{
            this.setState({
                data:[...this.state.baseData]
            })
        }
       
    }
    //toggle add contact component modal
    toggleAddContactModal = () =>{
        this.setState({addContactModalIsShow:!this.state.addContactModalIsShow})
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
                //console.log(result)
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

    _getAuthTokenFromSplashScreen = ()=>{
        let params = this.props.navigation.state.params
        //params exists case
        if(params){
            this.setState({'authToken':params.token}, ()=>{
                console.log(this.state.authToken)
            })

        }
        //token not received case
        else{
            console.log('token not received')
        }
    }


    componentDidMount(){
       // this._getAllContact()
        this._getAuthTokenFromSplashScreen()

    }

    _showData = () => {
        if(!this.state.isLoading){
            if(this.state.data.length > 0){
                return (
                    <FlatList
                            data={this.state.data}
                            keyExtractor={item => item.email}
                            renderItem={({item})=><ContactItem item={item}/>}
                            refreshing={false}
                            onRefresh={this._getAllContact}
                    />
                )
            }
            else{
                return (
                    <View style={styles.notFoundContainer}>
                        <Icon name="ios-call" color='gray' size={25}/>   
                        <Text style={styles.notFoundText}>Contacts Not Found</Text>
                        
                        <Text style={styles.checkConnexionText}></Text>
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
                <Modal onRequestClose={this.toggleAddContactModal} visible={this.state.addContactModalIsShow}>
                    <AddContactModal toggleAddContactModal={this.toggleAddContactModal}/>
                </Modal>
                <View style={styles.headerContainer}>
                    <TouchableOpacity 
                        activeOpacity={.5}
                        style={styles.buttonContainer}
                        onPress={() => {
                            this._searchContact(this.state.searchContact)
                        }}
                        >
                        <Icon name="ios-search" color='gray' size={25}/>
                    </TouchableOpacity>
                    <TextInput 
                        ref='searchTextinput'
                        placeholder='Enter contact name'
                        style={styles.textinput}
                        onChangeText={text =>{
                            this._stateSearch(text)
                        }}
                        onSubmitEditing={()=> {
                            //this._searchContact(this.state.searchContact)
                        }}
                        />
                    
                  

                </View>
                
                <View style={styles.itemsContainer}>
                    {this._showData()}
                    
                </View>

                <FloatButton toggleAddContactModal={this.toggleAddContactModal}/>
               
            
         
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
        paddingHorizontal:20,
        marginVertical:10,
       
    },
    itemsContainer:{
        flex:6,
    },
    textinput:{
        flex:1,
        height:50,
        elevation:5,
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
      
        
    },
    buttonContainer:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        elevation:5,
        backgroundColor:'white',
        padding:10,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
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
        flex:1,
        alignItems:'center'
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