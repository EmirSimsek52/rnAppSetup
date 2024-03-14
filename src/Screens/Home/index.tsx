import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSpinnerStore } from '../../components/spinnder-modal/spinnerStore';
import SpinnerModal from '../../components/spinnder-modal';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation()
  const { showSpinner, hideSpinner, show } = useSpinnerStore()
  const [userName, setUserName] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const handleShowButtonCliclk = () => {
    showSpinner(),
      setTimeout(() => {
        hideSpinner()
      }, 3000)
  }
  React.useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('password');
        const isAuthString = await AsyncStorage.getItem('isAuth');
        isAuthString == "true" ? setIsAuth(true) : setIsAuth(false);
        //@ts-ignore
        setUserName(username)
        console.log("Localdeki name: ", username)
        console.log("Auth HomePage-> ", isAuth)
        if (username && password) {
          console.log('Otomatik giriş yapıldı:', username); 
        }
      } catch (error) {
        console.error('AsyncStorage kontrol hatası: ', error);
      }
    };

    checkLoginStatus();
  }, [isAuth]);


  const LogOut = async () => {
    try {
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('password');
      await AsyncStorage.removeItem('isAuth');
      //@ts-ignore
      navigation.navigate('Login')
    } catch (error) {
      console.error('AsyncStorage kaydetme hatası: ', error);
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={handleShowButtonCliclk}>
        <Text style={{ color: 'white', marginBottom: 20 }}>Spinner Göster</Text>
      </TouchableOpacity>
      <Text style={{ color: 'white', fontSize: 24, textAlign: 'center' }}>{userName}</Text>
      {
        show && <SpinnerModal />
      }
      <TouchableOpacity onPress={() => LogOut()}>
        <Text style={{ color: 'red', fontSize: 24 }}>Log out</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Home