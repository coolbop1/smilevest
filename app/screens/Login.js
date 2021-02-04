import React, {useState} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SVInputs, SVbutton } from '../components/SVprimitives';


function Login({navigation}) {
    const [showPassword, setShowPassword] =  React.useState(false)
  return (
    <View style={styles.containerDark}>
        <Image width={200} style={{marginBottom: 20}} source={require("../../blacklogo.png")}/>
        <SVInputs 
            ligthTheme={false} 
            placeholder="Email" 
            iconName="envelope"
            autoCompleteType="email"
        />
        <SVInputs 
            ligthTheme={false} 
            placeholder="Password" 
            iconName={!showPassword ? "eye-slash" : "eye"}
            onpressIcon={()=>setShowPassword(!showPassword)}
            secureTextEntry={!showPassword}
            autoCompleteType="password"
        />
        <SVbutton title="SIGN IN" onPress={() => navigation.navigate('LoggedScreen', { screen: 'Home' })} submitButton />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#010101',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Login;