import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const AddProductToCartButton = () =>{
    const navigation = useNavigation()

    const addProductToCart = () =>{
        console.log("placeholder for adding product to cart")
        
      }

      return(
        <View style = {styles.container}>
                <TouchableOpacity style = {styles.buttonStyle} onPress={addProductToCart}>
                <Icon name="shoppingcart" size={25} color="white" />
                <Text style = {styles.textStyle}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    )}
    const styles = StyleSheet.create({
        container: {
          flex: 3,
          backgroundColor: '#030637',
        },
        buttonStyle:{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            alignSelf:'center',
            backgroundColor: '#3C0753',
            padding: 7,
            paddingHorizontal: 23,
            borderRadius: 15,
        },
          textStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 23,
          }
    });