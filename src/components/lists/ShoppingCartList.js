//This script fills a FlatList element with data from the database, then displays it on the screen. 
import { StyleSheet, FlatList, View, Text} from 'react-native';
import { selectListItems, selectTotalItems } from "../../data/Products/CartSlice"
import { useSelector } from "react-redux";
import { CartItemDisplay } from '../DisplayComponents/CartItemDisplay';

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