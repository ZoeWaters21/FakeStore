import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

export const ProductImage = (productImage) => {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={{
          uri: productImage.productImage,
        }}
        />
    </View>
  );
};


const styles = StyleSheet.create({
    imageStyle: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      backgroundColor: 'white'
    }
  });