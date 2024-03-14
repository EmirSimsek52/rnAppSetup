import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TabBarIconProps {
  name: string;
  focused: boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }) => {
  return (
    <Icon 
      name={name}
      size={28}
      color={focused ? "#01F2CF" : '#004137'}
    /> 
  );
}

export default TabBarIcon;
