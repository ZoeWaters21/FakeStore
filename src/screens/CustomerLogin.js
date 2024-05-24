import {View, StyleSheet, ImageBackground} from 'react-native';

import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
const image = require('../../assets/logo.png');

export const CustomerLogin = () => {

  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={styles.ImageContainer}>
        <ImageBackground source={image} style={styles.image}>
        </ImageBackground>
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = 'profile'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ImageContainer:{
      backgroundColor: '#662b9c',
      flex:30
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    }
});
