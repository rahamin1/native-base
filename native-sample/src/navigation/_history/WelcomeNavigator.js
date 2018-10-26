import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from 'mypet/components/TabBarIcon';
import WelcomeScreen from 'mypet/screens/Welcome/WelcomeScreen';
import LoginScreen from 'mypet/screens/Auth/LoginScreen';
import SettingsScreen from 'mypet/screens/SettingsScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

const WelcomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthStack
}, {
  navigationOptions: ({ navigation }) => ({
    /*
   initialRouteName: 'Welcome',
   headerMode: 'none',
   headerStyle: { backgroundColor: '#297a06' },
   headerLeft: <Text onPress={() =>
     navigation.navigate('DrawerOpen')}>Menu</Text>,
   title: 'Root Stack',
   headerTintColor: 'black'
   */
  })
});

WelcomeNavigator.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ?
          `ios-information-circle${focused ? '' : '-outline'}` :
          'md-information-circle'
      }
    />
  )
};

AuthStack.navigationOptions = {
  headerMode: 'float',
  tabBarLabel: 'AuthStack',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  )
};

export default WelcomeNavigator;

/*
const LoginStack = StackNavigator({
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
