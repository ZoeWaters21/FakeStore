import { StyleSheet, View, Image} from 'react-native';
import { imageDimensions } from '../data/Constants';
import Icon  from "react-native-vector-icons/MaterialCommunityIcons"
import {useState, useEffect} from 'react';

export const ImageDisplay = (productImage) => {
  const [URLValid, SetURLValid] = useState(true)
  const [loading, SetLoading] = useState(true)

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
  useEffect(() => {
    if (loading){
      async function CheckImageURL() {
        try{
          const response = await fetch(productImage.productImage.imageURL)
          if(!response.ok){
            SetURLValid(false)
          }
          SetURLValid(true)
        } catch (error){
          SetURLValid(false)
        }
      }
      CheckImageURL()
      SetLoading(false)
    }
  }
  ,[productImage])
    return (
      <View>
        {!loading && <View>
          {URLValid && <View>
            <Image
              style={[dimensions, styles.imageStyle]}
              source={{
                uri: productImage.productImage.imageURL
              }}
              />
            </View>}
            {!URLValid && <View style={[dimensions, styles.iconContainerSize]}>
              <Icon name="image-broken-variant" size={dimensions.width/2} />
            </View>}
          </View>}
      </View>
    );
  };


const styles = StyleSheet.create({
    imageStyle: {
      resizeMode: 'contain',
      backgroundColor: 'white'
    },
    iconContainerSize:{
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: 'white'
    }
  });