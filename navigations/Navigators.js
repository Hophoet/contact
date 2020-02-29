import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
import Main from '../screens/Main'
import Splash from '../screens/Splash'


const AuthNav = createSwitchNavigator({
    SignIn:{
      screen: SignIn,
      
     
    },
    SignUp:{
        screen:SignUp
    }
  }, {initialRouteName:'SignIn'})


  
const MainNav = createSwitchNavigator({
  Main:{
    screen:Main
  }
},{
  initialRouteName:'Main'
})

const AppNav = createSwitchNavigator({
  Main:{
    screen:Main
  },
  Auth:{
    screen:AuthNav
  },
  Splash:{
    screen:Splash
  }
}, {initialRouteName:'Splash'})
  

  export default createAppContainer(AppNav)