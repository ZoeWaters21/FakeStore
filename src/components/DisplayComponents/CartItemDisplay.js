import { StyleSheet, View, Text} from 'react-native';
import { ImageDisplay } from "../ProductImage"
import { QuantityButtons } from '../buttons/QuantityButtons';

export const CartItemDisplay = (productInfo) =>{
    productInfo = productInfo.productInfo

return(
    <View style = {styles.contentContainer}>
        <View style = {styles.pictureContainer}>
            <ImageDisplay productImage = {{imageURL: productInfo.image, pageTitles: "ProductList"}}/>
        </View>
        <View style = {styles.InformationContainer}>
            <View style = {styles.textContainer}>
                <Text style = {styles.titleTextStyle}>{productInfo.title}</Text>
                <Text style = {styles.priceTextStyle}>Price: ${productInfo.price}</Text>
            </View>
        
            <View style = {styles.ButtonContainer}>
                <QuantityButtons productID = {productInfo.id}/>
            </View>
        </View>
    </View>
);

}

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      flexDirection:'row',
      marginHorizontal:15,
      marginTop:15,
      borderColor: "#910A67",
      borderWidth:1,
      padding:5
    },
    pictureContainer:{
        flex:4
    },
    titleTextStyle:{
        color: 'white',
        fontSize: 16
    },
    priceTextStyle:{
        color: 'white',
        fontSize: 14,
        marginTop:25
    },InformationContainer:{
        flex:9
    },textContainer:{
        flex:1
    },ButtonContainer:{
        flex:1,
        position:"absolute",
        right:20,
        bottom:10
    }
});