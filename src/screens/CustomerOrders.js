import {View, Text} from 'react-native';
import PageHeader from '../components/DisplayComponents/PageHeader';
import { pageTitles } from '../data/Constants';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'

export const CustomerOrders = () => {
  
  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
      <View style ={ViewportLayoutStyles.flexedContainer}>
          <PageHeader headerText = {pageTitles.Orders}/>
        </View>
        <View style={{flex:5}}>
          <Text style={ViewportLayoutStyles.ErrorStyle}>Placeholder For Content</Text>
        </View>
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'orders', navID:'CustomerOrders', params:''}}/>
      </View>
    </View>
  );
};

