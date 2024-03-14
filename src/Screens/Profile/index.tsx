import { View, Text, Button } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { styles } from './style';
import LottieView from 'lottie-react-native';

const Profile = () => {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          //ref={animation}
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../../../assets/AnimateLottie/Check.json')}
        />
      </View>
    </View>
  );
}

export default Profile;
