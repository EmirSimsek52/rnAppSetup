import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpinnerModal from './src/components/spinnder-modal';
import { useSpinnerStore } from './src/components/spinnder-modal/spinnerStore';
import { Colors } from './src/Colors';
import Home from './src/Screens/Home';
import Stack from './src/Navigators/Stack';
export default function App() {
  const {showSpinner, hideSpinner, show } = useSpinnerStore()
  const handleShowButtonCliclk = () => {
    showSpinner(),
    setTimeout(() => {
      hideSpinner()
    },3000 )
  }

  return (
    <Stack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
