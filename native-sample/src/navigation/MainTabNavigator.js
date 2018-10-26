import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from 'mypet/screens/tabs/TabBarIcon';
import Tab1 from 'mypet/screens/tabs/Tab1';
import Tab1EditItem from 'mypet/screens/tabs/Tab1EditItem';
import Tab2 from 'mypet/screens/tabs/Tab2';
import Tab2EditItem from 'mypet/screens/tabs/Tab2EditItem';
import Tab3 from 'mypet/screens/tabs/Tab3';
import Tab3EditItem from 'mypet/screens/tabs/Tab3EditItem';

const Tab1Stack = createStackNavigator({
  Tab1: {
    screen: Tab1,
    navigationOptions: () => ({
        title: 'Tab1'
    }),
    params: {
      name: 'Tab1 from Tab1Stack'
    }
  },
  Tab1EditItem: Tab1EditItem
});

const Tab2Stack = createStackNavigator({
  Tab1: {
    screen: Tab2,
    navigationOptions: () => ({
        title: 'Tab2'
    })
  },
  Tab2EditItem: Tab2EditItem
});

const Tab3Stack = createStackNavigator({
  Tab1: {
    screen: Tab3,
    navigationOptions: () => ({
        title: 'Tab3'
    })
  },
  Tab3EditItem: Tab3EditItem
});

Tab1Stack.navigationOptions = {
  headerMode: 'none',
  tabBarLabel: 'Tab1',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ?
          `ios-photos${focused ? '' : '-outline'}` :
          'md-photos'
      }
    />
  )
};

Tab2Stack.navigationOptions = {
  tabBarLabel: 'Tab2',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  )
};

Tab3Stack.navigationOptions = {
  tabBarLabel: 'Tab3',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  )
};

const MainTabNavigator = createBottomTabNavigator({
  Tab1Stack,
  Tab2Stack,
  Tab3Stack
}, {
    headerMode: 'none',
    headerStyle: { backgroundColor: '#4C3E54' },
    headerLeft: <Text onPress={() =>
      this.props.navigation.navigate('DrawerOpen')}>Menu</Text>,
    title: 'Welcome!',
    headerTintColor: 'white'
});

export default MainTabNavigator;
