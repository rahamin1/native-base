import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from 'mypet/components/TabBarIcon';
import WelcomeScreen from 'mypet/screens/WelcomeScreen';
import LoginScreen from 'mypet/screens/LoginScreen';
import SettingsScreen from 'mypet/screens/SettingsScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

export default createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen
}, {
  navigationOptions: ({ navigation }) => ({
    initialRouteName: 'Welcome',
    headerMode: 'screen',
    headerStyle: { backgroundColor: '#297a06' },
    headerLeft: <Text onPress={() =>
      navigation.navigate('DrawerOpen')}>Menu</Text>,
    title: 'Root Stack',
    headerTintColor: 'black'
  })
});

/*
export default createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen
}, {
  initialRouteName: 'Welcome',
  headerMode: 'screen',
  headerStyle: { backgroundColor: '#4C3E54' },
  headerLeft: <Text onPress={() =>
    this.props.navigation.navigate('DrawerOpen')}>Menu</Text>,
  title: 'Root Stack',
  headerTintColor: 'black'
});
*/

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
