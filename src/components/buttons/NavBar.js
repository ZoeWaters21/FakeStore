import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';


export const NavBar = (onCart) =>{
    onCart = onCart.onCart
    const navigation = useNavigation()
    const navigateToProduct = () => onCart ? navigation.pop() : console.log("Already on product page")
    const navigateToShoppingCart = () => onCart ? console.log("Already on cart page") : console.log("placeholder")
    console.log(onCart)
      return(
        <View style = {styles.container}>
                <TouchableOpacity style = {styles.buttonStyle} onPress={navigateToProduct}>
                    <Icon name="shop" size={30} color= {onCart ? "lightgrey" : "blue" } />
                    <Text style = {[styles.textStyle, onCart ? {color:"lightgrey"} : {color: "blue"}]}>Products</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonStyle} onPress={navigateToShoppingCart}>
                    <Icon name="shopping-cart" size={30} color= {onCart ? "blue": "lightgrey"} />
                    <Text style = {[styles.textStyle, onCart ? {color: "blue"} : {color: "lightgrey"}]}>My Cart </Text>
                </TouchableOpacity>
        </View>
    )}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'white',
          alignContent: 'space-around',
          flexDirection: 'row',
          
        },
        buttonStyle:{
            flex:1,
            alignItems: 'center',
            alignSelf:'center',
            padding: 7,
            paddingHorizontal: 23,
            borderRadius: 15,
        },
          textStyle: {
            fontWeight: 'bold',
            fontSize: 23,
          }
    });