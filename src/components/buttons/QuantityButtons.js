import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from "react-redux";
import {decreaseItemFromCart, 
    increaseItemFromCart, 
    selectCart, 
    UploadCartToServer} from '../../data/Products/CartSlice'
import { selectCustomer } from '../../data/Users/CustomerSlice';
import { ReduceDataForCart } from '../../Functions/ProductFunctions';

export const QuantityButtons = (productID) => {
    productID = productID.productID
    const {CartItems} = useSelector(selectCart);
    const {customerData} = useSelector(selectCustomer)

    const dispatch = useDispatch();
    const index = CartItems.findIndex(x => x.id === productID)

    const decreaseQuantity = (index) =>{
        dispatch(decreaseItemFromCart(index))
        dispatch(UploadCartToServer({token:customerData.token, items:ReduceDataForCart(CartItems)}))
    }
    const increaseQuantity = (index) =>{
        dispatch(increaseItemFromCart(index))
        dispatch(UploadCartToServer({token:customerData.token, items:ReduceDataForCart(CartItems)}))
    }

    
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={()=> decreaseQuantity(index)}>
            <Icon name="minuscircle" size={25} color="white" />
            </TouchableOpacity>
            <View>
                {CartItems && <Text style = {styles.textStyle}>Quantity: {CartItems[index].count}</Text>}
            </View>
            <TouchableOpacity onPress={()=> increaseQuantity(index)}>
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
