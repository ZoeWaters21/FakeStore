import {View} from 'react-native';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
import { SigninForm } from '../components/DisplayComponents/SigninForm';

export const CustomerLogin = () => {

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
        <SigninForm />
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'login', navID:'CustomerLogin', params:''}}/>
      </View>
    </View>
  );
};