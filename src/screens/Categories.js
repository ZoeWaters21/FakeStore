/* Home.js is the main view of the application, it populates the page with elements 
and functions called from scripts in the /src/ folder. */
import { View, Text } from 'react-native';
import { useEffect } from "react"
import PageHeader from '../components/DisplayComponents/PageHeader';
import { pageTitles } from '../data/Constants';
import {LoadingIndicator} from '../components/LoadingIndicator'
import {CategoryList} from '../components/lists/CategoryList'
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
import { loadCategories, selectProduct } from '../data/Products/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';



//This function calls functions located in other script files to display elements on the page.
export const Categories = () => {

  const dispatch = useDispatch();
  const isFocused = useIsFocused
  const { categories, loading, error } = useSelector(selectProduct);
  
  const checkIfDataExists = () => {
    if (categories.length === 0){
      dispatch(loadCategories())
    }
  }

  useEffect(() => {
    if(isFocused){
    checkIfDataExists()
    }
  }
  ,[isFocused])

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.HeaderContainer}>
      <PageHeader headerText = {pageTitles.Categories}/>
      </View>
      <View style ={ViewportLayoutStyles.ContentContainer}>
      {loading ? (<LoadingIndicator/> ):
        error ? ( <Text style ={ViewportLayoutStyles.ErrorStyle}>Error: {error}</Text> ) :
        <View style = {ViewportLayoutStyles.flexedContainer}>
          <CategoryList />
        </View>}
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'products', navID:'Categories', params:''}}/>
      </View>
    </View>
  );
};



