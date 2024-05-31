//This script fills a FlatList element with data from the database, then displays it on the screen. 
import { StyleSheet, FlatList, View,} from 'react-native';
import { CategoryButton } from '../buttons/CategoryButton';
import { useEffect, useState } from 'react';
import { selectProduct } from '../../data/Products/ProductSlice';
import { useSelector } from 'react-redux';


/* this function takes the data from the database, displays it on the screen, the keyExtractor is
in there in case it may be needed later, currently doesnt do anything */
export const CategoryList = () => {
    const [loading, SetLoading] = useState(true)

    const {categories} = useSelector(selectProduct)

    const checkIfLoaded = () => {
        if (categories.length != 0){
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

return (
    <View style={styles.container}>
        {!loading && <View>
        <FlatList
            data={categories}
            renderItem={({item}) => <CategoryButton categoryName = {item}/>}
            keyExtractor={(item) => item}
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
      marginTop: 10
    }
});