import React from "react";
import { View, ActivityIndicator, StyleSheet,Text } from "react-native";

const SpinnerModal: React.FC = () => {
    return (
        <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFF" />
        <Text style={{color:'white', textAlign:'center', marginTop:4}}>Loading...</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
})

export default SpinnerModal;