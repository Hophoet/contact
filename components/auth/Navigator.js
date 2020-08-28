import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
//import the screens
import SignIn from './SignIn'
import SignUp from './SignUp'
import Enter from './Enter'
import Splash from './Splash'

//app stack navigator
const AppStack = createStackNavigator({
  SignUp:{
    screen:SignUp
  },
  SignIn:{
      screen:SignIn
  },

})


export default createAppContainer(
  createSwitchNavigator({
    App: AppStack,
    Enter:Enter,
    Splash:Splash

  },{
    initialRouteName:'Splash'
  })
)

