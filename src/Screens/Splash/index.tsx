import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash: React.FC = () => {
  const navigation = useNavigation();
  const [isAuth, setAuthState] = useState(false)
  useEffect(() => {
    const getLocalAuth = async () => {
      try {
        const isAuthString = await AsyncStorage.getItem('isAuth');
        isAuthString == "true" ? setAuthState(true) : setAuthState(false);

        console.log("Splash screen auth-> ", isAuthString)
      } catch (e) {
        console.log(e)
      }
    }
    getLocalAuth()
    const timer = setTimeout(() => {
      const routeName = isAuth ? 'TabNav' : 'Login'
      //@ts-ignore
      navigation.navigate(routeName);
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigation, isAuth]);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          style={{ width: 400, height: 400, }}
          source={require('../../../assets/AnimateLottie/Robot.json')}
        />
      </View>
    </View>
  );
}

export default Splash;
