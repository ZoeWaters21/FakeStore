import { Platform } from "react-native"

//Fill out your Server Details Below
const serverIP = '';
const serverPort = ":3000";
const systemOS = Platform.OS === "android" ? "10.0.2.2" : "localhost";
const domain = serverIP ? serverIP : systemOS;
export const ServerDomain = 'http://'+ domain + serverPort;

export const URLExtensions = {products:'/products/category/', categories:'/products/categories', productID:'/products/'};

export const myDetails = {
    id:1000928, 
    title: "Zoe Waters, 5131193, Zoe.Waters@griffithuni.edu", 
    price: 0.01, description:"Proof I Exist and this work is mine, Hi Larry ;).", 
    category:"Zoe Waters", image:"https://i.postimg.cc/52Q4YcLm/Quantum.png", 
    rating:{rate:5, count:0}};

export const pageTitles = {
    Categories: "Product Categories", 
    Product: "Product Details", 
    ShoppingCart: "Shopping Cart", 
    AccountDetails: "My Account", 
    Orders: "My Orders"};

export const imageDimensions = {
    productList: {height:100, width:100},
    productDetails:{width: '100%', height:300, borderWidth: 2, borderColor: '#910A67'}
}

export const ReductionKeys = {
    productList:["id", "title", "image", "price"],
    productDetails:["id", "title", "price"]}

