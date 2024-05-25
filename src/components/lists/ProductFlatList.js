//This script fills a FlatList element with data from the database, then displays it on the screen. 
import { StyleSheet, FlatList, View,} from 'react-native';
import { ProductButton } from '../buttons/ProductButtons';
import { selectProduct} from "../../data/Products/ProductSlice";
import { useSelector } from "react-redux"
import {useState, useEffect} from 'react';

/* this function takes the data from the database, displays it on the screen, the keyExtractor is
in there in case it may be needed later, currently doesnt do anything */
export const ProductFlatList = () => {
    const [loading, SetLoading] = useState(true)

    const {productData} = useSelector(selectProduct)

    const checkIfLoaded = () => {
        if (Object.keys(productData).length != 0){
            SetLoading(false)
        }
    }
useEffect(() => {
    if (loading){
        checkIfLoaded()
    }
  }
,[])
    
return (
    <View style={styles.container}>
        {!loading && <View>
            <FlatList
                data={productData}
                renderItem={({item}) => <ProductButton productData = {item} />}
                keyExtractor={(item) => item.id}
            />
        </View>}
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