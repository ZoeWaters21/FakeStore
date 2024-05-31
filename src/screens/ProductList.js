import { StyleSheet, View, Text} from 'react-native';
import {useEffect} from "react"
import PageHeader from '../components/DisplayComponents/PageHeader';
import {LoadingIndicator} from '../components/LoadingIndicator'
import {ProductFlatList} from '../components/lists/ProductFlatList'
import { PreviousPageButton } from "../components/buttons/PreviousScreen"
import { useDispatch, useSelector } from "react-redux"
import { fetchCachedProductlist, selectProduct, loadProductList } from "../data/Products/ProductSlice";
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'


//This function calls functions located in other script files to display elements on the page.
export const ProductList = ({route}) => {
  const category = route.params.categoryName
  const dispatch = useDispatch();
  const { currentProductList, cachedProductList, loading, error } = useSelector(selectProduct);
  //console.log("the route value is: ", route.params.categoryName, category)
  
  useEffect(() => {
    
    if(cachedProductList.length != 0){
      let noCache = true
      cachedProductList.forEach(item=> {
        if (item.category === category){
          dispatch(fetchCachedProductlist(item.data))
          noCache = false       
      }})
      if(noCache){ dispatch(loadProductList(category))}
    }else{      
      dispatch(loadProductList(category))
    }
  } 
  ,[])

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.HeaderContainer}>
      <PageHeader headerText = {category}/>
      </View>
      <View style ={ViewportLayoutStyles.ContentContainer}>
      {loading ?
        <View style ={ViewportLayoutStyles.flexedContainer}>
          <LoadingIndicator/> 
        </View> :
        error ? ( <Text style ={ViewportLayoutStyles.ErrorStyle}>Error: {error}</Text> ) :
          (<View style ={ViewportLayoutStyles.flexedContainer}>
            <ProductFlatList productlistData = {currentProductList}/>
            <PreviousPageButton pageInfo = {{PageName:"ProductList"}}/>
          </View>)}
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'products', navID:'ProductList', params:category}} />
      </View>
    </View>
  );
};

