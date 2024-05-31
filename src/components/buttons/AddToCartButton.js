import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { AddItemToCart, UploadCartToServer, selectCart } from '../../data/Products/CartSlice';
import { useDispatch, useSelector } from "react-redux"
import { selectCustomer} from '../../data/Users/CustomerSlice';
import { ReduceDataForCart } from '../../Functions/ProductFunctions';



export const AddProductToCartButton = (productInfo) =>{
  productInfo = productInfo.productInfo
  //console.log("AddProductToCartButton recieving: ", productInfo)
  const {CartItems} = useSelector(selectCart);
  const {customerData} = useSelector(selectCustomer);
  const dispatch = useDispatch();

  const addProductToCart = () =>{
    if (CartItems){
      console.log("cartItem is returning truthy, its current state is: ", CartItems)
      const indexOfId = CartItems.findIndex(x => x.id === productInfo.id)
      if (indexOfId === -1) {
        console.log("Didn't find payload in ItemList")
        const PassingObjWithCount = {"id": productInfo.id, "title": productInfo.title, "image": productInfo.image, "price" : productInfo.price, "count": 1}
        dispatch(AddItemToCart(PassingObjWithCount))
        dispatch(UploadCartToServer({token:customerData.token, items:ReduceDataForCart(CartItems)}))

      }else{
        console.log("Found payload in ItemList")
        const PassingObj = {"id": productInfo.id}
        dispatch(AddItemToCart(PassingObj))
        dispatch(UploadCartToServer({token:customerData.token, items:ReduceDataForCart(CartItems)}))
  }
  }else{
    const PassingObjWithCount = {"id": productInfo.id, "title": productInfo.title, "image": productInfo.image, "price" : productInfo.price, "count": 1}
          console.log("PassingObjWithCount: ",PassingObjWithCount)
          dispatch(AddItemToCart(PassingObjWithCount))
          dispatch(UploadCartToServer({token:customerData.token, items:ReduceDataForCart(CartItems)}))
  }
  }

  return(
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.buttonStyle} onPress={()=>{addProductToCart()}}>
        <Icon name="shoppingcart" size={25} color="white" />
        <Text style = {styles.textStyle}>Add To Cart</Text>
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