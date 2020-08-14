import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login'
import Main from '../screens/Main'


const AuthNavigator = createSwitchNavigator({
    Login:{
      screen: Login,
      
     
    },
    App:{
        screen:Main
    }
  }, {initialRouteName:'Login'})
  

  export default createAppContainer(AuthNavigator)