import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { ImageDisplay } from '../ProductImage';
import { PreviousPageButton } from '../buttons/PreviousScreen';
import { AddProductToCartButton } from '../buttons/AddToCartButton';
import { RatingDisplay } from './RatingDisplay';

export const ProductDisplay = (productInfo) =>{
    productInfo = productInfo.productInfo
    //console.log("ProductDisplay received parameter: ", productInfo)
    //console.log(productInfo.image)
return(
    <View style={styles.container}>
    <ScrollView style={styles.scrollViewContainer}>
        <ImageDisplay productImage = {{imageURL: productInfo.image, pageTitles: "ProductDetails"}}/>
        <Text style={styles.titleTextStyle}>{productInfo.title}</Text>
        <RatingDisplay ratingInfo = 
        {{rate: productInfo.rating.rate, count: productInfo.rating.count, price: productInfo.price}}/>
        <View style = {styles.buttonContainer}>
            <PreviousPageButton changeSize = {"changeSize"}/>
            <AddProductToCartButton productInfo = {productInfo}/>
        </View>
        <View style = {styles.descriptionContainer}>
            <Text style={styles.textStyle}>{productInfo.description}</Text>
        </View>
    </ScrollView> 
    </View>   
);

}

const styles = StyleSheet.create({
    container: {
      flex: 18,
    },
    scrollViewContainer:{
        margin: 15
    },
    titleTextStyle:{
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    textStyle:{
        color: 'white',
        fontSize: 17,
    },
    buttonContainer:{
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems:"space-around"

    },
    descriptionContainer:{
        flex: 1,
        backgroundColor: '#06071c',
        padding: 15,
        marginTop:20
    }
});