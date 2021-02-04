import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements'

export const SVInputs =  ({ligthTheme, ...props}) => {
    return (
        <View style={[ligthTheme ? styles.svInputStyleLight : styles.svInputStyle, props.style]}>
            <TouchableOpacity onPress={()=>props.onpressIcon && props.onpressIcon()}>
                <Icon 
                    name={props.iconName}
                    type='font-awesome'
                    //onPress={()=>props.onpressIcon && props.onpressIcon()}
                    style={styles.svInputIconStyle}
                    color={ligthTheme ? "#010101" : "#fff"}
                />
            </TouchableOpacity>
            <TextInput 
                placeholder={props.placeholder} 
                placeholderTextColor={ligthTheme ? "#666" : "#dfe2db"}
                style={[ligthTheme ? styles.textInputStyleLight : styles.textInputStyle]}
                {...props}
            />
        </View>
    )
}

export const SVbutton=  ({title, colors, onPressed, ...props}) => {
    return (
        <TouchableOpacity  {...props} style={{width: "70%"}} >
            <LinearGradient
              //#e65c00colors={['#cca002', '#bc9724', '#cca002' ]}
              colors={props.submitButton ? ['#e65c00', '#cca002' ] : ['#cca002', '#cca002' ] }
              style={styles.buttonStyle}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              <Text style={styles.buttonTextDark}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    svInputStyleLight: {
        width: "90%", 
        paddingVertical: 10, 
        paddingHorizontal: 3, 
        borderBottomWidth: 1, 
        borderBottomColor: "#010101",
        flexDirection: "row",
        marginBottom: 20
    },
    svInputStyle: {
        width: "90%", 
        paddingVertical: 10, 
        paddingHorizontal: 3, 
        borderBottomWidth: 1, 
        borderBottomColor: "#fff",
        flexDirection: "row",
        marginBottom: 20
    },
    svInputIconStyle: {
        marginTop: 10,
        marginRight: 10,
    },
    textInputStyleLight: {
        color: "#010101",
        fontSize: 15,
    },
    textInputStyle: {
        color: "#fff",
        fontSize: 15,
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

