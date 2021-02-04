import React, {useState} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { SVInputs, SVbutton } from '../components/SVprimitives';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements'


function Home(){ 
      return (  
          <View style={styles.container}>  
            <Text>Home Screen</Text>  
          </View>  
      );  
}

 
function ProfileScreen(){  
      return (  
          <View style={styles.container}>  
            <Text>Profile Screen</Text>  
          </View>  
      );  
}  
 
function ImageScreen(){ 
        return (  
            <View style={styles.container}>  
                <Text>Image Screen</Text>  
            </View>  
        );  
}

function CartScreen(){ 
        return (  
            <View style={styles.container}>  
                <Text>Cart Screen</Text>  
            </View>  
        );  
}


const Logged = createAppContainer(
createMaterialBottomTabNavigator(  
    {  
        Home: { screen: Home,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} type='material-community' name={'home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} type='material-community' name={'account-box'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Image: { screen: ImageScreen,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} type='material-community' name={'image'}/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
        Cart: {  
            screen: CartScreen,  
            navigationOptions:{  
                tabBarLabel:'Settings',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} type='font-awesome' name={'cog'}/>  
                    </View>),  
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
)
);

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});

function LoggedScreen() {
  
    return (
      <Logged />
    );
  }
  
export default LoggedScreen;
