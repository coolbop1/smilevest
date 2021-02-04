import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen from './app/screens/Homescreen';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import LoggedScreen from './app/screens/Loggedscreen'

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator
      initialRouteName="Home"
      //screenOptions={{ gestureEnabled: false }}
      >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        //initialParams={{ user: 'me' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="LoggedScreen"
        component={LoggedScreen}
        options={{headerLeft: false, headerTitle: "Dashboard"}}
      />
      </Stack.Navigator>
      <StatusBar 
      //barStyle="light-content" 
      //backgroundColor="#53400c" 
      style="auto" />
    </NavigationContainer>
  );
}
