import {View, Text} from 'react-native';
import PageHeader from '../components/DisplayComponents/PageHeader';
import { useEffect } from "react"
import { pageTitles } from '../data/Constants';
import {LoadingIndicator} from '../components/LoadingIndicator';
import  { ProductDisplay } from '../components/DisplayComponents/ProductDisplay';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
import { selectProduct, loadProductDetails , fetchCachedProductDetails} from "../data/Products/ProductSlice";
import { useDispatch, useSelector } from "react-redux"

export const ProductDetails = ({route}) => {
  const productID = route.params.productID
  

  const dispatch = useDispatch();
  const { currentProductDetails, cachedProductDetails,loading, error } = useSelector(selectProduct);

  useEffect(() => {
    
    if(cachedProductDetails.length != 0){
      let noCache = true
      cachedProductDetails.forEach(item=> {
        //console.log("checking each comparsion: ", "stored: ", item.ProductID, "Received: ", productID)
        if (item.ProductID === productID){
          dispatch(fetchCachedProductDetails(item.data))
          noCache = false       
      }})
      if(noCache){ dispatch(loadProductDetails(productID))}
    }else{      
      console.log("no cache found")
      dispatch(loadProductDetails(productID))
    }
  } 
  ,[])

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.HeaderContainer}>
      <PageHeader headerText = {pageTitles.Product}/>
      </View>
      <View style ={ViewportLayoutStyles.ContentContainer}>
      {loading ?
        <View style ={ViewportLayoutStyles.flexedContainer}>
          <LoadingIndicator/> 
        </View> :
        error ? ( <Text style ={ViewportLayoutStyles.ErrorStyle}>Error: {error}</Text> ) :
          (<View style ={ViewportLayoutStyles.flexedContainer}>
            <ProductDisplay ProductInfo = {currentProductDetails}/>
          </View>)}
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'products', navID:'ProductDetails', params:{productID:productID}}} />
      </View>
    </View>
  );
};

