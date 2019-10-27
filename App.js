import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/tabs/Home';
import Settings from './src/tabs/Settings';
import Profile from './src/screens/Profile';
import Modal from './src/screens/Modal';
import Drawer from './src/components/common/Drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

// Stack navigation for Settings and Profile screens
const SettingsTab = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
      title: `${navigation.state.params.user}'s Profile`,
    }),
  },
}, {
  headerMode: 'screen',
});

const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor, focused}) => <Icon
        name={focused ? 'md-home' : 'md-home'}
        size={26}
        style={{color: tintColor}}
      />
    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor, focused}) => <Icon
        name={focused ? 'md-settings' : 'md-settings'}
        size={26}
        style={{color: tintColor}}
      />
    },
  },
});

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = createDrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />,
  drawerType: "slide"
});

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
const AppNavigator = createStackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});


export default createAppContainer(AppNavigator);
