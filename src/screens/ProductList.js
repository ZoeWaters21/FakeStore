import { StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from "react"
import PageHeader from '../components/PageHeader';
import returnProductList from '../data/ProductFetch';
import {LoadingIndicator} from '../components/LoadingIndicator'
import {ProductFlatList} from '../components/lists/ProductFlatList'
import { PreviousPageButton } from "../components/buttons/PreviousScreen"


//This function calls functions located in other script files to display elements on the page.
export const ProductList = ({route}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true) 
  const category = route.params.categoryName
  //console.log("the route value is: ", route.params.categoryName, category)
  useEffect(() => {
    async function getData(){
      try{
        setLoading(true)
        x = await returnProductList(category)
        setData(await x)
      }catch(error){
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false)
       }, 500)
      }
    }

      getData()}
  ,[])

  return (
    loading ? <LoadingIndicator/> :
    <View style ={styles.container}>
      <PageHeader headerText = {category}/>
      <ProductFlatList data = {data}/>
      <PreviousPageButton/>
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
