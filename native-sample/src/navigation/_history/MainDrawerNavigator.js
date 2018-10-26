import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import DrawerScreen1 from 'mypet/screens/drawer/DrawerScreen1';
import DrawerScreen2 from 'mypet/screens/drawer/DrawerScreen2';
import DrawerScreen3 from 'mypet/screens/drawer/DrawerScreen3';

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
    headerTintColor: 'white'
});

export default MainDrawerNavigator;
