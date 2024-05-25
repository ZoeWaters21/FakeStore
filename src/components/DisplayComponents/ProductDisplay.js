import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { ImageDisplay } from '../ProductImage';
import { PreviousPageButton } from '../buttons/PreviousScreen';
import { AddProductToCartButton } from '../buttons/AddToCartButton';
import { RatingDisplay } from './RatingDisplay';
import { selectProduct} from "../../data/Products/ProductSlice";
import { useSelector } from "react-redux"

export const ProductDisplay = () =>{
    const {slicedData} = useSelector(selectProduct)
    
return(
    <View style={styles.container}>
    <ScrollView style={styles.scrollViewContainer}>
        <ImageDisplay productImage = {{imageURL: slicedData.image, pageTitles: "ProductDetails"}}/>
        <Text style={styles.titleTextStyle}>{slicedData.title}</Text>
        <RatingDisplay />
        <View style = {styles.buttonContainer}>
            <PreviousPageButton pageInfo = {{PageName:"ProductDetails", params:{categoryName:slicedData.category}}}/>
            <AddProductToCartButton productInfo = {slicedData}/>
        </View>
        <View style = {styles.descriptionContainer}>
            <Text style={styles.textStyle}>{slicedData.description}</Text>
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