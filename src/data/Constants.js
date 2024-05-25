import { Platform } from "react-native"

export const pageTitles = {Categories: "Categories", Product: "Product Details", ShoppingCart: "Shopping Cart", AccountDetails: "My Account", Orders: "My Orders"}

export const imageDimensions = {
    productList: {height:100, width:100},
    productDetails:{width: '100%', height:300, borderWidth: 2, borderColor: '#910A67'}
}
const systemOS = Platform.OS === "android" ? "10.0.2.2" : "localhost"
const serverPort = ":3000"
export const ServerDomain = 'http://'+ systemOS + serverPort
