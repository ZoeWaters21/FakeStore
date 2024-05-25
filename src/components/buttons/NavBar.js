import { StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux"
import { selectTotalItems } from '../../data//Products/CartSlice';

let lastProductScreen = []

export const NavBar = (currentPage) =>{
  pageInfo = currentPage.currentPage
  if (pageInfo.currentPage === 'products') lastProductScreen = [pageInfo.navID, pageInfo.params]
  const pageID = pageInfo.currentPage

  const navigation = useNavigation()
  const totalItems = useSelector(selectTotalItems) 

  NavBarNavigation = (buttonPressed) =>{
    //console.log("buttonpressed : ", buttonPressed )
    if (pageID === 'login') {
      console.log("current page is the login screen")
      Alert.alert("Not Logged In","You must log in to view this tab")
    }
    if (pageID === buttonPressed){
      console.log("Already on page")
    }
  
    if(buttonPressed === 'products'){
      if(lastProductScreen[0] === "ProductList"){
        navigation.navigate("ProductList", lastProductScreen[1])
      }else if (lastProductScreen[0] === "ProductDetails"){
        navigation.navigate("ProductDetails", lastProductScreen[1])
      }else{
        navigation.navigate("Categories")
      }
    }

    if (buttonPressed === 'cart') navigation.navigate("ShoppingCart")
    if (buttonPressed === 'orders') navigation.navigate("CustomerOrders")
    if (buttonPressed === 'profile') navigation.navigate("CustomerProfile")
  }

  return(
    <View style = {styles.container}>
            <TouchableOpacity style = {styles.buttonStyle} onPress={() => NavBarNavigation('products')}>
                <Icon name="shop" size={30} color= {pageID === 'products' ? "blue" : "lightgrey" } />
                <Text style = {[styles.textStyle, pageID === 'products' ? {color: "blue"} : {color:"lightgrey"}]}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle} onPress={() => NavBarNavigation('cart')}>
                <Icon name="shopping-cart" size={30} color= {pageID === 'cart' ? "blue" : "lightgrey"} />
                <Text style = {[styles.textStyle, pageID === 'cart' ? {color: "blue"} : {color: "lightgrey"}]}>My Cart </Text>
                {totalItems != 0 && <View style = {styles.Redcircle}>
                  <Text style = {styles.counterNumberStyle}>{totalItems}</Text>
                </View >}
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle} onPress={() => NavBarNavigation('orders')}>
                <Icon name="box" size={30} color= {pageID === 'orders' ? "blue": "lightgrey"} />
                <Text style = {[styles.textStyle, pageID === 'orders' ? {color: "blue"}: {color:"lightgrey"}]}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle} onPress={() => NavBarNavigation('profile')}>
                <Icon2 name="user" size={30} color= {pageID ==='profile' || pageID === 'login' ? "blue" : "lightgrey"} />
                <Text style = {[styles.textStyle, pageID ==='profile' || pageID === 'login' ? {color: "blue"}: {color:"lightgrey"}]}>My Account</Text>
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