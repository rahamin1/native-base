import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from 'mypet/screens/welcome/WelcomeScreen';
import WelcomeWithSlides from 'mypet/screens/welcome/WelcomeWithSlides';
import LoginScreen from 'mypet/screens/auth/LoginScreen';
import SignupScreen from 'mypet/screens/auth/SignupScreen';
import ForgottenPasswordScreen from 'mypet/screens/auth/ForgottenPasswordScreen';

const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  ForgottenPassword: {
    screen: ForgottenPasswordScreen,
    navigationOptions: { title: 'Forgot Password' } }
},  {
  // navigationOptions: ({ navigation }) => ({
    headerMode: 'none',
    initialRouteName: 'Login'
  // })
});

const WelcomeAuthNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  WelcomeSlides: WelcomeWithSlides,
  Auth: AuthStack
}, {
   headerMode: 'none',
   initialRouteName: 'Welcome',
   contentComponent: props => <Drawer {...props} />
 });

 export default WelcomeAuthNavigator;

/*
const AuthStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
})
*/
