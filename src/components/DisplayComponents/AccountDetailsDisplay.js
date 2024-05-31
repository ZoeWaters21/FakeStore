import { StyleSheet, View, Text, Alert, TouchableOpacity, TextInput} from 'react-native';
import { selectCustomer, LogOutCustomer, UpdateCustomerDetails } from '../../data/Users/CustomerSlice';
import { useSelector, useDispatch } from "react-redux"
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { PasswordValidationRegex } from '../../Functions/Regex';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


export const AccountDetailsDisplay = () =>{
    const [loading, SetLoading] = useState(true)
    const [switchToEdit, SetswitchToEdit] = useState(false)
    const [inputData, onChangeText] = useState({name: '', password: ''});

    const {customerData, error} = useSelector(selectCustomer)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const checkIfLoaded = () => {
        if(Object.keys(customerData).length != 0){
            SetLoading(false)
        }
    }

    const LogOutButtonClick = () =>{
        dispatch(LogOutCustomer())
        navigation.replace("CustomerLogin")
    }

    const ConfirmChanges = () =>{
        if(PasswordValidationRegex(inputData.password)){
            const newDetails = {name:inputData.name, password:inputData.password, token:customerData.token}
            dispatch(UpdateCustomerDetails(newDetails))
            SetswitchToEdit(false)
            if(error)Alert.alert("Error", error)
            
        }else{
            Alert.alert("Error","Password must contain atleast 8 characters, a uppercase character, a lowercase character and one number")
        }
        
    }
    useEffect(() => {
        if (loading){
            checkIfLoaded()
        }
    }
    ,[])

return(
    <View style={styles.componentContainer}>
        {!loading && <View style={styles.contentContainer}>
           {!switchToEdit && <View style = {styles.flexContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Name:</Text>
                    <Text style={styles.textStyle}>{customerData.name}</Text> 
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Email: </Text> 
                    <Text style={styles.textStyle}>{customerData.email}</Text> 
                </View>
                <View style = {styles.buttonContainer}>
                    <View style = {styles.flexContainer}>
                        <TouchableOpacity style = {styles.buttonStyle} onPress={() => SetswitchToEdit(true)}>
                            <Icon name="account-edit" size={25} color="white" />
                            <Text style = {styles.buttonTextStyle}>Update</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.flexContainer}>
                        <TouchableOpacity style = {styles.buttonStyle} onPress={() => LogOutButtonClick()}>
                            <Icon name="logout-variant" size={25} color="white" />
                            <Text style = {styles.buttonTextStyle}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>}

            {switchToEdit && <View style = {styles.flexContainer}>
                <View style = {styles.editContainer}>
                <Text style = {styles.headingStyle}>Edit Account Details</Text>
                    <View style = {styles.contentContainer}>
                        <Text style = {styles.textStyle}>New Name</Text>
                        <TextInput
                            placeholder="Enter New Name"
                            style={styles.inputStyle}
                            onChangeText={(nameInput) => onChangeText({...inputData, name: nameInput})}
                            defaultValue={customerData.name}
                            
                        />
                    </View>
                    <View style = {styles.contentContainer}>
                        <Text style = {styles.textStyle}>New Password</Text>
                        <TextInput
                            placeholder="Enter Your Password"
                            style={styles.inputStyle}
                            onChangeText={(passwordInput) => onChangeText({...inputData, password: passwordInput})}
                            alue={customerData.password}                            
                        />
                    </View>
                    <View style = {styles.buttonContainer}>
                        <View style = {styles.contentContainer}>
                            <TouchableOpacity style = {styles.buttonStyle} onPress={() => ConfirmChanges()}>
                                <Icon name="check-circle" size={25} color="white" />
                                <Text style = {styles.buttonTextStyle}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.contentContainer}>
                            <TouchableOpacity style = {styles.buttonStyle} onPress={() => SetswitchToEdit(false)}>
                                <Icon name="close-circle" size={25} color="white" />
                                <Text style = {styles.buttonTextStyle}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>}
            <View style={styles.blankSpace}>
             </View>
        </View>}
    </View>
)
}

const styles = StyleSheet.create({
    componentContainer:{
        flex: 18
    },
    contentContainer:{
        flex:1,
        padding: 10,
        marginTop:15
    },
    textStyle:{
        color: 'white',
        fontSize: 20,
    },
    buttonTextStyle:{
        color: 'white',
        fontSize: 20,
        fontWeight:'bold'
    },
    textContainer:{
        flex: 1,
        gap: 25,
        flexDirection: 'row',
    },flexContainer:{
        flex:1,
    },blankSpace:{
        flex:1
    },buttonStyle:{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#3C0753',
        padding: 7,
        paddingHorizontal: 23,
        borderRadius: 15,
      },editContainer:{
            flex:1,
            alignContent: 'space-around',
            backgroundColor: '#720455',
            borderRadius: 10,
            minHeight:350
      },buttonContainer:{
            flex: 1,
            flexDirection:'row'
      },inputStyle:{
        flex:1,
        backgroundColor: 'white',
        minHeight:45,
        maxHeight:45,
        paddingLeft:15,
        fontSize:20,
        marginTop:5
      },headingStyle:{
        textAlign:'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
      }
    });