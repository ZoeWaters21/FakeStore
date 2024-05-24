import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux"
import { selectTotalItems } from '../../data//Products/CartSlice';

let productsVisited = false
let pagesSinceProducts = 1;

export const NavBar = (currentPage) =>{
  currentPage = currentPage.currentPage

  if (currentPage === 'products') pagesSinceProducts = 1;

  const totalItems = useSelector(selectTotalItems) 
  const navigation = useNavigation()

  const navigateToProduct = () => {
    if (currentPage === 'products'){
      console.log("Already on product page")
    } else if (!productsVisited){
      productsVisited = true
      navigation.navigate("Categories")
    }else{
      navigation.goBack(pagesSinceProducts)
      pagesSinceProducts = 1
    }
  } 
  const navigateToShoppingCart = () => {
    if (currentPage === 'cart'){
      console.log("Already on cart page")
    }else{
    pagesSinceProducts += 1
    navigation.navigate("ShoppingCart") 
    }
  }
  const navigateToOrders = () => {
    if (currentPage === 'orders'){
      console.log("Already on customer orders page")
    }else{
    pagesSinceProducts += 1
    navigation.navigate("CustomerOrders")
    }
  }
  const navigateToAccount = () =>{
  if (currentPage === 'profile'){
    console.log("Already on customer profile page")
  }else{
    pagesSinceProducts += 1
    navigation.navigate("CustomerProfile")
    }
  }

  return(
    <View style = {styles.container}>
            <TouchableOpacity style = {styles.buttonStyle} onPress={navigateToProduct}>
                <Icon name="shop" size={30} color= {currentPage === 'products' ? "blue" : "lightgrey" } />
                <Text style = {[styles.textStyle, currentPage === 'products' ? {color: "blue"} : {color:"lightgrey"}]}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle} onPress={navigateToShoppingCart}>
                <Icon name="shopping-cart" size={30} color= {currentPage === 'cart' ? "blue" : "lightgrey"} />
                <Text style = {[styles.textStyle, currentPage === 'cart' ? {color: "blue"} : {color: "lightgrey"}]}>My Cart </Text>
                {totalItems != 0 && <View style = {styles.Redcircle}>
                  <Text style = {styles.counterNumberStyle}>{totalItems}</Text>
                </View >}
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle} onPress={navigateToOrders}>
                <Icon name="box" size={30} color= {currentPage === 'orders' ? "blue": "lightgrey"} />
                <Text style = {[styles.textStyle, currentPage === 'orders' ? {color: "blue"}: {color:"lightgrey"}]}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle} onPress={navigateToAccount}>
                <Icon2 name="user" size={30} color= {currentPage ==='profile' ? "blue" : "lightgrey"} />
                <Text style = {[styles.textStyle, currentPage ==='profile' ? {color: "blue"}: {color:"lightgrey"}]}>My Account</Text>
            </TouchableOpacity>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'space-around',
    flexDirection: 'row',
          
  },
  buttonStyle:{
    flex:1,
    alignItems: 'center',
    alignSelf:'center',
    padding: 7,
    borderRadius: 15,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign:'center'
  },    
  Redcircle:{
    width: 20,
    height: 20,
    borderRadius: 20/2,
    backgroundColor:'red',
    position: 'absolute',
    right: "50%"
  },
  counterNumberStyle:{
    textAlign: 'center',
    color: 'white'
  }
});