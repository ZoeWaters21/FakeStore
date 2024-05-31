import {View} from 'react-native';
import PageHeader from '../components/DisplayComponents/PageHeader';
import { pageTitles } from '../data/Constants';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
import { AllOrderDisplay } from '../components/DisplayComponents/AllOrdersDisplay';


export const CustomerOrders = () => {
      
return(
  <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.HeaderContainer}>
        <PageHeader headerText = {pageTitles.Orders}/>
      </View>
      <View style={ViewportLayoutStyles.ContentContainer}>
        <AllOrderDisplay/>
          </View> 
        <View style ={ViewportLayoutStyles.NavContainer}>
          <NavBar currentPage = {{currentPage:'orders', navID:'CustomerOrders', params:''}}/>
        </View>
    </View>  
  );
}

