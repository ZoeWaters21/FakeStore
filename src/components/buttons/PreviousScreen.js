import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const PreviousPageButton = () =>{
    const navigation = useNavigation()
    const navigateToPreviousScreen = () =>{
        navigation.pop()
      }

      return(
        <View style = {styles.container}>
                <TouchableOpacity style = {styles.buttonStyle} onPress={navigateToPreviousScreen}>
                <Icon name="leftcircle" size={30} color="white" />
                <Text style = {styles.textStyle}>Back</Text>
            </TouchableOpacity>
        </View>
    )}
    const styles = StyleSheet.create({
        container: {
          flex: 2,
          backgroundColor: '#030637',
        },
        buttonStyle:{
            flexDirection: 'row',
            gap: 20,
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: '#3C0753',
            padding: 10,
            paddingHorizontal: 30,
            borderRadius: 20
        },
          textStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
          }
    });