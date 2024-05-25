import {View, StyleSheet, Image, Dimensions} from 'react-native';

import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
import { SigninForm } from '../components/DisplayComponents/SigninForm';
const image = require('../../assets/logo.png');
export const CustomerLogin = () => {

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
        <View style ={styles.imageContainer}>
          <Image source={image} style={styles.image}>
          </Image>
        </View>
        <View style ={styles.formContainer}>
          <SigninForm />
        </View>
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = {{currentPage:'login', navID:'CustomerLogin', params:''}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    imageContainer:{
      justifyContent: 'center',
      backgroundColor: '#662b9c',
      flex:1
    },
    image: {
      flex:1,
      maxWidth: "100%",
      maxHeight: "60%"
    },formContainer:{
      justifyContent: 'center',
      flex:1,
      backgroundColor: '#662b9c'
    }
});
