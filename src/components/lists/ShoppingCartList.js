//This script fills a FlatList element with data from the database, then displays it on the screen. 
import { StyleSheet, FlatList, View, Text} from 'react-native';
import { selectListItems, selectTotalItems } from "../../data/Products/CartSlice"
import { useSelector } from "react-redux";
import { CartItemDisplay } from '../DisplayComponents/CartItemDisplay';

/* this function takes the data from the database, displays it on the screen, the keyExtractor is
in there in case it may be needed later, currently doesnt do anything */
export const ShoppingCartList = () => {
    const ListItems = useSelector(selectListItems);
    const totalItems = useSelector(selectTotalItems);

return (
    <View style={styles.container}>
        {totalItems != 0 ? <FlatList
            data={ListItems}
            renderItem={({item}) => <CartItemDisplay productInfo = {item}/>}
            keyExtractor={(item) => item.id}
        /> :
        <View style={{flex:1, marginTop:275}}>
            <Text style={styles.EmptyText}>Cart is empty!</Text>
        </View>}
    </View>
    
);
};

/*Style sheet for this script, container controls the flex box, listItem controls the appearance
of the listed elements*/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#030637',
      borderBottomColor: '#910A67',
      borderBottomWidth: 2,
    },
    EmptyText: {
        textAlign:'center',
        color:"white",
        fontSize:35
    }
});