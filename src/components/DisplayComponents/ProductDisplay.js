import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { ImageDisplay } from '../ProductImage';
import { PreviousPageButton } from '../buttons/PreviousScreen';
import { AddProductToCartButton } from '../buttons/AddToCartButton';
import { RatingDisplay } from './RatingDisplay';
import { useEffect, useState } from 'react';
import { CapitalizeFirstLetterEveryWord } from '../../Functions/StringManipulation';

export const ProductDisplay = (productInfo) =>{
    productInfo = productInfo.ProductInfo
    //console.log("product display receiving: ", productInfo)
    const [loading, SetLoading] = useState(true)

    const checkIfLoaded = () => {
        if (productInfo.length != 0){
            SetLoading(false)
            //console.log("categoryList returning: ",categories)
        }
    }
useEffect(() => {
    if (loading){
        checkIfLoaded()
    }
  }
,[])
    
return(
    <View style={styles.container}>
    {!loading && <ScrollView style={styles.scrollViewContainer}>
        <ImageDisplay productImage = {{imageURL: productInfo.image, pageTitles: "ProductDetails"}}/>
        <Text style={styles.titleTextStyle}>{productInfo.title}</Text>
        <RatingDisplay productInfo = {productInfo}/>
        <View style = {styles.buttonContainer}>
            <PreviousPageButton pageInfo = {{PageName:"ProductDetails", params:{categoryName:productInfo.category}}}/>
            <AddProductToCartButton productInfo = {productInfo}/>
        </View>
        <View style = {styles.descriptionContainer}>
            <Text style={styles.textStyle}>{productInfo.description}</Text>
        </View>
    </ScrollView>}
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