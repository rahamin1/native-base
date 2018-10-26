import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import SideMenu from 'priceinsight/src/navigation/SideMenu/SideMenu'
import TagsSubscription from 'priceinsight/src/scenes/TagsSubscription/TagsSubscription'
import BrokersSubscription from 'priceinsight/src/scenes/BrokersSubscription/BrokersSubscription'
import Feed from 'priceinsight/src/scenes/Feed/Feed'

const HomeStack = StackNavigator({
  Home: {
    screen: Feed,
    navigationOptions: ({ navigation }) => ({
      title: 'Home', // Title to appear in status bar
      headerLeft: <Icon style={{ marginLeft: 20 }} name="md-menu" size={35}
        onPress={() => navigation.navigate('DrawerOpen')}/>
    })
  },
  TagsSubscription: {
    screen: TagsSubscription,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title // Title to appear in status bar
    })
  },
  BrokersSubscription: {
    screen: BrokersSubscription,
    navigationOptions: ({ navigation }) => ({
      title: 'Preferred Broker' // Title to appear in status bar
    })
  }
})

const AppNavigation = DrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'Home' // Text shown in left menu
    }
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
})

export default AppNavigation
