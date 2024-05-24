import { StyleSheet, View, Text, TextInput} from 'react-native';
import { useState } from 'react';

export const TotalDisplay = () =>{
    const [inputData, onChangeText] = React.useState({email: '', password: ''});

    return(
        <View style = {styles.contentContainer}>
            <View style = {styles.flexedContainer}>
                <Text style = {styles.headerStyle}>
                    Sign in with email and password
                </Text>  
            </View>
            <View style = {styles.flexedContainer}>
                <Text style = {styles.subheaderStyle}>Email</Text>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(emailInput) => onChangeText({...inputData, email: emailInput})}
                    value={inputData.email}
                    placeholder="Enter Your Email Address"
                />
            </View>
            <View style = {styles.flexedContainer}>
                <Text style = {styles.subheaderStyle}>Password</Text>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(passwordInput) => onChangeText({...inputData, password: passwordInput})}
                    value={inputData.email}
                    placeholder="Enter Your Email Address"
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#030637',
        padding: 10,
        marginHorizontal:15,
        marginTop:5
    }, flexedContainer: {
        flex: 1
    },headerStyle:{
        textAlign:'center',
        color:'white',
        fontSize :20,
        fontWeight:'bold',
    },subheaderStyle:{
        textAlign:'center',
        color:'white',
        fontSize :15
    },inputStyle: {

        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
});