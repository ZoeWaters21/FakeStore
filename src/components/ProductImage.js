import { StyleSheet, View, Image} from 'react-native';
import { imageDimensions } from '../data/Constants';

export const ImageDisplay = (productImage) => {
    let dimensions = {}
    switch(productImage.productImage.pageTitles) {
        case "ProductList":
          dimensions = imageDimensions.productList
          break;
        case "ProductDetails":
          dimensions = imageDimensions.productDetails
          break;
        default:
            dimensions = {height:100, width:100}
            console.log("ImageDisplay failed to receive specified page, defaulting dimensions to 100x100") 
    }

    return (
      <View>
        <Image
          style={[dimensions, styles.imageStyle]}
          source={{
            uri: productImage.productImage.imageURL
          }}
          />
      </View>
    );
  };


const styles = StyleSheet.create({
    imageStyle: {
      resizeMode: 'contain',
      backgroundColor: 'white'
    }
  });