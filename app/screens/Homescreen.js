import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SVInputs, SVbutton } from '../components/SVprimitives';

function HomeScreen({navigation}) {
  
  return (
    <View style={styles.containerDark}>
        <Image width={200} style={{marginBottom: 50}} source={require("../../blacklogo.png")}/>
          
          <SVbutton title="LOGIN" onPress={() => navigation.navigate('Login')}/>
          <SVbutton title="REGISTER" onPress={() => navigation.navigate('Register')} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cca002',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#010101',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 200,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  buttonTextDark: {
    color: "#010101",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  }

});

export default HomeScreen;