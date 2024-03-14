import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import { loginValidationSchema } from './validation';
import { styles } from './style';
import CustomIcon from '../../components/Icon/CustomIcon';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
type FormValues = {
    username: string;
    password: string;
}


const LoginScreen: React.FC = () => {
    const [passwordSecure, setPasswordSecure] = useState(true)
    const [loginSucces, setLoginSucces] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values: any) => handleLogin(values),
    });
    const navigation = useNavigation()

    const handleLogin = async ({ username, password }: FormValues) => {
  
        try {
            await AsyncStorage.setItem('username', formik.values.username);
            await AsyncStorage.setItem('password', formik.values.password);
            await AsyncStorage.setItem('isAuth', 'true');
            //@ts-ignore
            navigation.navigate('TabNav')
        } catch (error) {
            console.error('AsyncStorage kaydetme hatası: ', error);
        }
        console.log('Username:', formik.values.username);
        console.log('Password:', formik.values.password);
        setLoginSucces(true)
        formik.resetForm()

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Giriş Yap</Text>
            <TextInput
                placeholderTextColor={'white'}
                style={styles.input}
                placeholder="Username"
                value={formik.values.username}
                onChangeText={formik.handleChange('username')}
                onBlur={formik.handleBlur('username')}
            />
            {formik.touched.username && formik.errors.username && (
                <Text style={styles.error}>{formik.errors.username as string}</Text>
            )}
            <View style={styles.inputView}>
                <TextInput
                    placeholderTextColor={'white'}
                    style={styles.inputPassword}
                    placeholder="Password"
                    secureTextEntry={passwordSecure}
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                />
                <TouchableOpacity onPress={() => setPasswordSecure(!passwordSecure)} style={styles.icon}>
                    <CustomIcon
                        name={passwordSecure ? 'eye' : 'eye-slash'}
                        color={'white'}
                        size={24}
                    />
                </TouchableOpacity>

            </View>
            {formik.touched.password && formik.errors.password && (
                <Text style={styles.error}>{formik.errors.password as string}</Text>
            )}
            {/*@ts-ignore */}
            <Button title="Giriş Yap" onPress={formik.handleSubmit} />
            {loginSucces &&
                <View style={styles.animationContainer}>
                    <Text style={{ color: 'green', fontSize: 16 }}>You has been sign in succesfuly </Text>
                </View>
            }
        </View>
    );
};


export default LoginScreen;
