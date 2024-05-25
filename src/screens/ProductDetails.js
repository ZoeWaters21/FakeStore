import {View} from 'react-native';
import PageHeader from '../components/DisplayComponents/PageHeader';
import { useEffect } from "react"
import { pageTitles } from '../data/Constants';
import {LoadingIndicator} from '../components/LoadingIndicator';
import  { ProductDisplay } from '../components/DisplayComponents/ProductDisplay';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
import { loadProductData, selectProduct, findProductByID } from "../data/Products/ProductSlice";
import { useDispatch, useSelector } from "react-redux"

export const ProductDetails = ({route}) => {
  const productID = route.params.productID
  const category = route.params.productCategory

  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectProduct);

  useEffect(() => {
    dispatch(loadProductData(category))
    dispatch(findProductByID(productID))
  }

,[])

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
      {loading ? (<LoadingIndicator/> ):
        error ? ( <Text style ={ViewportLayoutStyles.ErrorStyle}>Error: {error}</Text> ) :
          (<View style ={ViewportLayoutStyles.flexedContainer}>
            <PageHeader headerText = {pageTitles.Product}/>
            <ProductDisplay />
          </View>)}
        </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'products', navID:'ProductDetails', params:{productID:productID, productCategory:category}}} />
      </View>
    </View>
  );
};

