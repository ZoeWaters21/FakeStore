import {View, Text} from 'react-native';
import PageHeader from '../components/DisplayComponents/PageHeader';
import { pageTitles } from '../data/Constants';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
import { AccountDetailsDisplay } from '../components/DisplayComponents/AccountDetailsDisplay';

export const CustomerProfile = () => {
  
  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.HeaderContainer}>
        <PageHeader headerText = {pageTitles.AccountDetails}/>
      </View>
      <View style ={ViewportLayoutStyles.ContentContainer}>
          <AccountDetailsDisplay />
        </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'profile', navID:'CustomerProfile', params:''}}/>
      </View>
    </View>
  );
};

