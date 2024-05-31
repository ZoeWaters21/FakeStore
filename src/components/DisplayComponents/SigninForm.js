import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useState, useEffect } from 'react';
import { LoginCustomer, selectCustomer, createNewCustomer, SetInitialDataLoad} from '../../data/Users/CustomerSlice';
import { useDispatch, useSelector} from "react-redux"
import { useNavigation } from '@react-navigation/native';
import { EmailValidationRegex, PasswordValidationRegex } from '../../Functions/Regex';
import { LoadCartFromServer } from '../../data/Products/CartSlice';
import { LoadCustomersOrders } from '../../data/Users/CustomerOrdersSlice';

const image = require('../../../assets/logo.png');
export const SigninForm= () =>{
    const [inputData, onChangeText] = useState({email: '', password: '', name:''});
    const [SwitchToCreateNew, SetSwitchToCreateNew] = useState(false)
    const { customerData, loadedIntialUserData,  loading, error } = useSelector(selectCustomer);
    const dispatch = useDispatch();
    const navigation = useNavigation()

    const createAccount = () =>{
        if (PasswordValidationRegex && EmailValidationRegex){
            dispatch(createNewCustomer(inputData))
        }else if(!PasswordValidationRegex){
            Alert.alert("Error","Password must contain atleast 8 characters, a uppercase character, a lowercase character and one number")
            onChangeText({email: '', password: '', name:''})
        }else if(!EmailValidationRegex){
            Alert.alert("Error","Please enter a valid email address")
            onChangeText({email: '', password: '', name:''})
        }
    }
 
    useEffect(() => {
        if(Object.keys(customerData).length != 0){
            if(!loadedIntialUserData){
                dispatch(LoadCartFromServer(customerData.token))
                dispatch(LoadCustomersOrders(customerData.token))
                dispatch(SetInitialDataLoad())
            }
            navigation.navigate("CustomerProfile")
        }
        if(error != null){
            Alert.alert("Error", error)
        }
    }
    ,[loading])
    return(
        <View style = {styles.contentContainer}> 
            <View style ={styles.imageContainer}>
                <Image source={image} style={styles.image}>
                </Image>
            </View>
            <View style = {styles.formContainer}>
                <View style = {{flex:2, marginBottom:20, maxHeight:25}}>
                    {!SwitchToCreateNew ? <Text style = {styles.headerStyle}> Sign in with email and password</Text> :
                    <Text style = {styles.headerStyle}> Enter Your Details to Sign Up</Text>}
                </View>
                    {SwitchToCreateNew && <View style = {{flex:2}}> 
                        <View style = {styles.flexedContainer}>
                        <Text style = {styles.subheaderStyle}>Name</Text>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(nameInput) => onChangeText({...inputData, name: nameInput})}
                            value={inputData.name}
                            placeholder="Enter Your Name"
                        />
                        </View>
                    </View>}
                    <View style = {{flex:2}}>
                        <Text style = {styles.subheaderStyle}>Email</Text>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(emailInput) => onChangeText({...inputData, email: emailInput})}
                            value={inputData.email}
                            placeholder="Enter Your Email Address"
                        />
                    </View>
                    <View style = {{flex:2}}>
                        <Text style = {styles.subheaderStyle}>Password</Text>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(passwordInput) => onChangeText({...inputData, password: passwordInput})}
                            value={inputData.password}
                            placeholder="Enter Your Password"
                        />
                    </View>
                    <View style = {{flex:2}}>
                            <View style = {styles.buttonContainer}>
                            <TouchableOpacity style = {styles.buttonStyle} onPress={() => onChangeText({email: '', password: '', name:''})}>
                                <Icon name="eraser-variant" size={25} color="white" />
                                <Text style = {styles.headerStyle}>Clear</Text>
                            </TouchableOpacity>
                            {!SwitchToCreateNew ? <TouchableOpacity style = {styles.buttonStyle} onPress={() => dispatch(LoginCustomer({email:inputData.email,password:inputData.password}))}>
                                <Icon name="login-variant" size={25} color="white" />
                                <Text style = {styles.headerStyle}>Sign In</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity style = {styles.buttonStyle} onPress={() => createAccount()}>
                                <Icon name="account-plus" size={25} color="white" />
                                <Text style = {styles.headerStyle}>Sign Up</Text>
                            </TouchableOpacity> }
                            </View>
                            <View style = {{flex:2}}>
                                {!SwitchToCreateNew ? <TouchableOpacity style = {styles.switchContainer} onPress={() => SetSwitchToCreateNew(true)}>
                                    <Text style = {[styles.subheaderStyle, {textAlign:'center'}]}>Dont have an account? Click here to sign up!</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style = {styles.switchContainer} onPress={() => SetSwitchToCreateNew(false)}>
                                    <Text style = {[styles.subheaderStyle, {textAlign:'center'}]}>Already have an account? Click here is log in!</Text>
                                </TouchableOpacity>}
                            </View>
                </View>
            </View>
            <View style = {!SwitchToCreateNew ? {flex:3}: {flex:2}}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#662b9c'
    }, formContainer:{
        flex:1,
        backgroundColor: '#030637',
        padding:15,
        minHeight:350
    },flexedContainer: {
        flex: 1
    },headerStyle:{
        textAlign:'center',
        color:'white',
        fontSize :20,
        fontWeight:'bold',
    },subheaderStyle:{
        alignContent:"center",
        color:'white',
        fontSize :15,
        marginLeft: 15,
        marginBottom:5
    },inputStyle: {
        backgroundColor: 'white',
        height: 40,
        padding: 10,
    },buttonStyle:{
        flex:1,
        flexDirection: 'row',
        gap:10,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#3C0753',
        padding: 7,
        paddingHorizontal: 23,
        borderRadius: 15,
        marginHorizontal:20
    },buttonContainer:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },image: {
        width: 375,
        height: 200,
        alignItems:'center'
    },imageContainer:{
        justifyContent: 'center',
        backgroundColor: '#662b9c',
        flex:5,
    },switchContainer:{
        flex:1,
         marginTop:10, 
         justifyContent:'center'
        }
});