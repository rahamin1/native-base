import React, { Component } from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from 'mypet/navigation/MainTabNavigator';
import DrawerScreen1 from 'mypet/screens/drawers/DrawerScreen1';
import DrawerScreen2 from 'mypet/screens/drawers/DrawerScreen2';
import DrawerScreen3 from 'mypet/screens/drawers/DrawerScreen3';

const MainDrawerNavigator = createStackNavigator({
  Drawer1: { screen: DrawerScreen1 },
  Drawer2: { screen: DrawerScreen2 },
  Drawer3: { screen: DrawerScreen3 }
}, {
    headerMode: 'float',
    headerStyle: { backgroundColor: '#4C3E54' },
    headerLeft: <Text onPress={() =>
      this.props.navigation.navigate('DrawerOpen')}>Menu</Text>,
    title: 'Welcome!',
    headerTintColor: 'white',
    style: {
      leftDrawerWidth: 10
    }
});

export default MainDrawerNavigator;

/*


class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('mypet/images/chats-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('mypet/images/notif-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open Drawer" />
        <Button
          onPress={() => this.props.navigation.closeDrawer()}
          title="Close Drawer" />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home" />
      </View>
    );
  }
}


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
  })
})
*/

/*
const MainDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
});
*/

// drawer stack
/*
const DrawerStack = createDrawerNavigator({
  Drawer1: { screen: DrawerScreen1 },
  Drawer2: { screen: DrawerScreen2 },
  Drawer3: { screen: DrawerScreen3 },
  Tab: MainTabNavigator
}, {
  style: {
    leftDrawerWidth: 30
  }
});
*/
