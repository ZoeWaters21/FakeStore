import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageDisplay } from "../ProductImage"

export const ProductButton = (productInfo) => {
  productInfo = productInfo.productList
  //console.log("Product button recieving params: ", productInfo)
  const navigation = useNavigation()
  const selectProduct = () =>{
    navigation.navigate("ProductDetails", {productID: productInfo.id, productCategory: productInfo.category})
  }
return(
    <View style = {styles.container}>
        <TouchableOpacity style = {{flexDirection: 'row'}} onPress={()=>selectProduct()}>
        <ImageDisplay productImage = {{imageURL: productInfo.image, pageTitles: "ProductList"}}/>
          <View style = {styles.textAlign}>
            <Text style = {styles.textStyle}>{productInfo.title}</Text>
            <View style = {{flexDirection: 'row'}}>
              <Text style = {styles.priceText}>Price: </Text>
              <Text style = {styles.textStyle}>${productInfo.price}</Text>
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