import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { largeButtonStyle, smallButtonStyle } from '../../StyleSheets/PreviousScreenButton'
import React, {useState, useEffect} from "react"

export const PreviousPageButton = (changeSize) =>{
    //console.log(changeSize)
    const [size, setSize] = useState(true);
    const navigation = useNavigation()
    const navigateToPreviousScreen = () =>{
        navigation.pop()
      }
      useEffect(() => {
        if (changeSize.changeSize == "changeSize"){
            setSize(false)
          }}   
      ,[])
    
      

      return(
        <View style = {size ? largeButtonStyle.container: smallButtonStyle.container}>
                <TouchableOpacity style = {size ? largeButtonStyle.buttonStyle: smallButtonStyle.buttonStyle} onPress={navigateToPreviousScreen}>
                <Icon name="leftcircle" size={size ? 30:20} color="white" />
                <Text style = {size ? largeButtonStyle.textStyle: smallButtonStyle.textStyle}>Back</Text>
            </TouchableOpacity>
        </View>
    )}
