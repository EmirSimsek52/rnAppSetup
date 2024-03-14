import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CustomIcon from '../../components/Icon/CustomIcon';
import TabBarIcon from '../../components/Icon/TabBarIcon';
import Home from '../../Screens/Home';
import { Colors } from '../../Colors';
import Profile from '../../Screens/Profile';
import SignIn from '../../Screens/Login';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: '#0DA54B',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor:Colors.tabBarBg  , borderTopColor:Colors.tabBarBg,  },
          }}    
          initialRouteName='Home'
          >
          <Tab.Screen 
              name='Home' 
              component={Home} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon name={'home'} focused={focused} />
                ),
              }}
            />
            <Tab.Screen 
              name='Porfile' 
              component={Profile} 
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon name={'user'} focused={focused} />
                ),
              }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator