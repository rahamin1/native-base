import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import WelcomeAuthNavigator from 'mypet/navigation/WelcomeAuthNavigator';
import MainTabNavigator from 'mypet/navigation/MainTabNavigator';
import MainDrawerNavigator from 'mypet/navigation/MainDrawerNavigator';
import Drawer from 'mypet/screens/drawers/Drawer';

export default createDrawerNavigator({
    WelcomeAuth: WelcomeAuthNavigator,
    Drawer: MainDrawerNavigator,
    Main: MainTabNavigator
}, {
  initialRouteName: 'WelcomeAuth',
  contentComponent: props => <Drawer {...props} />,
  drawerWidth: 180
});
