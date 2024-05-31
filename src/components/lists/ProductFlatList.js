import { StyleSheet, FlatList, View, Text} from 'react-native';
import { ProductButton } from '../buttons/ProductButtons';


export const ProductFlatList = (currentProductList) => {
const productlist = currentProductList.productlistData
//console.log("ProductFlatList receiving params: ", productlist)
return (
    <View style={styles.container}>
            <FlatList
                data={productlist}
                renderItem={({item}) => <ProductButton productList = {item} />}
                keyExtractor={(item) => item.id}
            />
    </View>
    
);
};

/*Style sheet for this script, container controls the flex box, listItem controls the appearance
of the listed elements*/
const styles = StyleSheet.create({
    container: {
      flex: 18,
      backgroundColor: '#030637',
      borderBottomColor: '#910A67',
      borderBottomWidth: 2,
      marginVertical: 10
    }
});