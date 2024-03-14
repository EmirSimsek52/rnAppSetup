import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

type CustomIconProps = {
    name:string, 
    color:string,
    size: number
}

const CustomIcon:React.FC<CustomIconProps> = ({name,color,size}) => {
  return (
   <Icon 
    name={name}
    size={size}
    color={color}
   /> 
  )
}

export default CustomIcon