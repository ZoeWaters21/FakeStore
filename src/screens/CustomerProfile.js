import {View, Text} from 'react-native';
import PageHeader from '../components/DisplayComponents/PageHeader';
import { pageTitles } from '../data/Constants';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'

export const CustomerProfile = () => {
  
  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
        <View style ={ViewportLayoutStyles.flexedContainer}>
          <PageHeader headerText = {pageTitles.AccountDetails}/>
        </View>
        <View style={{flex:5}}>
          <Text style={ViewportLayoutStyles.ErrorStyle}>Placeholder For Content</Text>
        </View>
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'profile', navID:'CustomerProfile', params:''}}/>
      </View>
    </View>
  );
};

