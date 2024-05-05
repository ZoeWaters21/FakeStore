import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductImage } from "../Images/ProductListImage"

export const ProductButton = (productInfo) => {
  console.log("ProductButton received following parameters: ")
  console.log("ProductID: ", productInfo.productID)
  console.log("ProductTitle: ", productInfo.productTitle)
  console.log("ProductImage: ", productInfo.imageURL)
  console.log("ProductPrice: ", productInfo.productPrice)
  const navigation = useNavigation()
  const selectProduct = () =>{
    navigation.navigate("Product")
  }
return(
    <View style = {styles.container}>
        <TouchableOpacity style = {{flexDirection: 'row'}} onPress={selectProduct}>
        <ProductImage productImage = {productInfo.imageURL}/>
          <View style = {styles.textAlign}>
            <Text style = {styles.textStyle}>{productInfo.productTitle}</Text>
            <View style = {{flexDirection: 'row'}}>
              <Text style = {styles.priceText}>Price: </Text>
              <Text style = {styles.textStyle}>${productInfo.productPrice}</Text>
            </View>
        </View>
        </TouchableOpacity>
    </View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignContent: 'space-between',
      backgroundColor: '#030637',
      margin: 10,
      borderWidth: 1,
      borderColor: '#910A67',
      borderRadius: 10
    },
      textStyle: {
        flex: 1,
        color: 'white',
        fontSize: 14
      },
      priceText:{
        fontWeight: 'bold',
        alignItems:"flex-start",
        color: 'white',
        fontSize: 14
      },
      textAlign:{
        flex: 1,
        marginLeft: 10,
      }
});