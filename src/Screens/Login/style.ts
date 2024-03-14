import { StyleSheet } from "react-native";
import { Colors } from "../../Colors";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        color:'white'
      },
      input: {
        width: '80%',
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 12,
        color:'white',
        borderRadius:20,
        backgroundColor: Colors.tabBarBg
      },
      error: {
        color: 'red',
        marginBottom: 8,
      },
      inputView: {
        width: '80%',
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius:20,
        backgroundColor: Colors.tabBarBg,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:0,
        alignItems:'center'
      },
      inputPassword:{
        width: '85%',
        height: 40,
        padding: 12,
        color:'white',
        borderRadius:20,
        backgroundColor: Colors.tabBarBg
      },
      icon:{
        marginRight:'6%'
      },
      animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
      },
  });