/* Home.js is the main view of the application, it populates the page with elements 
and functions called from scripts in the /src/ folder. */
import { View} from 'react-native';
import React, {useState, useEffect} from "react"
import PageHeader from '../components/PageHeader';
import { pageTitles } from '../data/Constants';
import returnCategories, {ClearData} from '../data/CategoryFetch';
import {LoadingIndicator} from '../components/LoadingIndicator'
import {CategoryList} from '../components/lists/CategoryList'
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'

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
          ClearData()
       }, 500)
      }
    }
      getData()}
  ,[])

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
        {loading ? <LoadingIndicator/> :
        <View style ={ViewportLayoutStyles.flexedContainer}>
          <PageHeader headerText = {pageTitles.Categories}/>
          <CategoryList data = {data}/>
        </View>}
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar onCart = {false}/>
      </View>
    </View>
  );
};

//initialises the first flex box, so the rest will be displayed correctly.

