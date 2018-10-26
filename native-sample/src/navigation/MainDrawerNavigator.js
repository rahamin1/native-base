import { createStackNavigator } from 'react-navigation';

import DrawerScreen1 from 'mypet/screens/drawers/DrawerScreen1';
import DrawerScreen2 from 'mypet/screens/drawers/DrawerScreen2';
import DrawerScreen3 from 'mypet/screens/drawers/DrawerScreen3';

const MainDrawerNavigator = createStackNavigator({
  Drawer1: { screen: DrawerScreen1 },
  Drawer2: { screen: DrawerScreen2 },
  Drawer3: { screen: DrawerScreen3 }
});

export default MainDrawerNavigator;
