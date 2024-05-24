import { StyleSheet, View, Text} from 'react-native';
import {useEffect} from "react"
import PageHeader from '../components/DisplayComponents/PageHeader';
import {LoadingIndicator} from '../components/LoadingIndicator'
import {ProductFlatList} from '../components/lists/ProductFlatList'
import { PreviousPageButton } from "../components/buttons/PreviousScreen"
import { useDispatch, useSelector } from "react-redux"
import { loadProductData, selectProduct } from "../data/Products/ProductSlice";
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'

//This function calls functions located in other script files to display elements on the page.
export const ProductList = ({route}) => {
  const category = route.params.categoryName
  const dispatch = useDispatch();
  const { productData, loading, error } = useSelector(selectProduct);
  //console.log("the route value is: ", route.params.categoryName, category)
  
  useEffect(() => {
      dispatch(loadProductData(category))}
  ,[])

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
        {loading ? (<LoadingIndicator/> ):
        error ? ( <Text style ={ViewportLayoutStyles.ErrorStyle}>Error: {error}</Text> ) :
          (<View style ={ViewportLayoutStyles.flexedContainer}>
            <PageHeader headerText = {category}/>
            <ProductFlatList data = {productData}/>
            <PreviousPageButton/>
          </View>)}
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = 'products'/>
      </View>
    </View>
  );
};

