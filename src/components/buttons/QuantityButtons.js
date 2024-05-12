import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from "react-redux";
import {decreaseItemFromCart, 
    increaseItemFromCart, 
    selectListItems} from '../../data/CartSlice'

export const QuantityButtons = (productID) => {
    productID = productID.productID
    const ListItems = useSelector(selectListItems);
    const dispatch = useDispatch();
    const ind = ListItems.findIndex(x => x.id === productID)
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={()=> dispatch(decreaseItemFromCart(ind))}>
            <Icon name="minuscircle" size={25} color="white" />
            </TouchableOpacity>
            <View>
                <Text style = {styles.textStyle}>Quantity: {ListItems[ind].count}</Text>
            </View>
            <TouchableOpacity onPress={()=> dispatch(increaseItemFromCart(ind))}>
            <Icon name="pluscircle" size={25} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection:'row',
    gap:7
    },textStyle:{
        color:'white',
        fontSize:14
    }
});
