/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

//screens
import Main from './screens/Main'
//navigators
import Nav from './navigations/Navigators'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'


export default class App extends React.Component{
  render(){
    return(
      <Nav/>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

