import { StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from "react"
import PageHeader from '../components/PageHeader';
import { FetchProductDetails } from '../data/ProductFetch';
import {LoadingIndicator} from '../components/LoadingIndicator';
import { pageTitles } from '../data/Constants';
import  { ProductDisplay } from '../components/ProductDisplay';
//This function calls functions located in other script files to display elements on the page.

export const ProductDetails = ({route}) => {
  const [loading, setLoading] = useState(true) 
  const productID = route.params.productID
  const productInfo = FetchProductDetails(productID)

  useEffect(() => {
    setTimeout(() => {
    setLoading(false)
    }, 1000)}      
  ,[])

  return (
    loading ? <LoadingIndicator/> :
    <View style ={styles.container}>
      <PageHeader headerText = {pageTitles.Product}/>
      <ProductDisplay productInfo = {productInfo}/>
    </View>
  );
};

//initialises the first flex box, so the rest will be displayed correctly.
const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#030637',
        }
});
