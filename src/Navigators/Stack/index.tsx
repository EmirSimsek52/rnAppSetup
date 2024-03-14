import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import TabNavigator from '../Tab';
import Splash from '../../Screens/Splash';
import LoginScreen from '../../Screens/Login';

const Stack = () => {
    const Stack = createNativeStackNavigator()
  return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}} >
              <Stack.Screen options={{gestureEnabled:false}}  name="TabNav" component={TabNavigator} />
              <Stack.Screen name='Splash' component={Splash} />
              <Stack.Screen name='Login' options={{gestureEnabled:false}}  component={LoginScreen} />
        </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Stack