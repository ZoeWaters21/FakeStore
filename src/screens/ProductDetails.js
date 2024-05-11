import {View} from 'react-native';
import {useState, useEffect} from "react"
import PageHeader from '../components/PageHeader';
import { FetchProductDetails } from '../data/ProductFetch';
import {LoadingIndicator} from '../components/LoadingIndicator';
import { pageTitles } from '../data/Constants';
import  { ProductDisplay } from '../components/ProductDisplay';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'

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
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
        {loading ? <LoadingIndicator/> :
        <View style ={ViewportLayoutStyles.flexedContainer}>
          <PageHeader headerText = {pageTitles.Product}/>
          <ProductDisplay productInfo = {productInfo}/>
        </View>}
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar onCart = {false}/>
      </View>
    </View>
  );
};
