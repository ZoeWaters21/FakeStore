/* Home.js is the main view of the application, it populates the page with elements 
and functions called from scripts in the /src/ folder. */
import { StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from "react"
import PageHeader from '../components/PageHeader';
import { pageTitles } from '../data/Constants';
import returnCategories from '../data/CategoryFetch';
import {LoadingIndicator} from '../components/LoadingIndicator'
import {CategoryList} from '../components/lists/CategoryList'


//This function calls functions located in other script files to display elements on the page.
export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true) 
  useEffect(() => {
    async function getData(){
      try{
        setLoading(true)
        x = await returnCategories()
        setData(await x)
      }catch(error){
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false)
       }, 2000)
      }
    }

      getData()}
  ,[])

  return (
    loading ? <LoadingIndicator/> :
    <View style ={styles.container}>
      <PageHeader headerText = {pageTitles.Categories}/>
      <CategoryList data = {data}/>
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
