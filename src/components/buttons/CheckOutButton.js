import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { UploadCartToServer, clearCart, selectCart } from '../../data/Products/CartSlice';
import { useDispatch, useSelector } from "react-redux"
import { selectCustomer} from '../../data/Users/CustomerSlice';
import { LoadCustomersOrders, NewOrder, clearOrders } from '../../data/Users/CustomerOrdersSlice';
import { useEffect, useState } from 'react';
import { ReduceDataForNewOrder } from '../../Functions/ProductFunctions';




export const CheckOutButton = () =>{
    const [loading, SetLoading] = useState(true)
  const {CartItems} = useSelector(selectCart);
  const {customerData} = useSelector(selectCustomer);
  const dispatch = useDispatch();

  const CheckoutCart = () =>{
    console.log({token:customerData.token, items:ReduceDataForNewOrder(CartItems)})
    dispatch(NewOrder({token:customerData.token, items:ReduceDataForNewOrder(CartItems)}))
    dispatch(clearCart())
    dispatch(UploadCartToServer({token:customerData.token, items:[]}))
    dispatch(clearOrders())
    dispatch(LoadCustomersOrders(customerData.token))

  }
  const checkIfLoaded = () => {
    if (CartItems.length != 0 && customerData.length != 0){
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


  return(
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.buttonStyle} onPress={()=>{CheckoutCart()}}>
        <Icon name="wallet" size={25} color="white" />
        <Text style = {styles.textStyle}>Checkout</Text>
      </TouchableOpacity>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#030637',
  },
  buttonStyle:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#3C0753',
    padding: 7,
    paddingHorizontal: 23,
    borderRadius: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  }
  });