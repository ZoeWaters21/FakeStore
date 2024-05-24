import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { AddItemToCart, selectListItems } from '../../data/Products/CartSlice';
import { useDispatch, useSelector } from "react-redux"


export const AddProductToCartButton = (productInfo) =>{
  productInfo = productInfo.productInfo
  const ListItems = useSelector(selectListItems);
  const dispatch = useDispatch();
  console.log(ListItems)
  const addProductToCart = () =>{
    const indexOfId = ListItems.findIndex(x => x.id === productInfo.id)
    if (indexOfId === -1) {
      console.log("Didn't find payload in ItemList")
      const PassingObjWithCount = {"id": productInfo.id, "title": productInfo.title, "image": productInfo.image, "price" : productInfo.price, "count": 1}
      dispatch(AddItemToCart(PassingObjWithCount))

    }else{
      console.log("Found payload in ItemList")
      const PassingObj = {"id": productInfo.id}
      dispatch(AddItemToCart(PassingObj))
    }
  }

  return(
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.buttonStyle} onPress={addProductToCart}>
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