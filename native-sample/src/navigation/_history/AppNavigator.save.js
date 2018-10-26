import { createSwitchNavigator } from 'react-navigation';

import WelcomeNavigator from 'mypet/navigation/WelcomeNavigator';
import MainTabNavigator from 'mypet/navigation/MainTabNavigator';
import MainDrawerNavigator from 'mypet/navigation/MainDrawerNavigator';

export default createSwitchNavigator({
  Welcome: WelcomeNavigator,
  Drawer: MainDrawerNavigator,
  Main: MainTabNavigator
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
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default PrimaryNav
*/
