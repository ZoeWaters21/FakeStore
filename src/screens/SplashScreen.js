import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import { useNavigation } from "@react-navigation/native"

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export const SplashScreen = () => {
    const navigation = useNavigation()

        setTimeout(() => {
            navigation.navigate("Home")
         }, 2000)
    

    return(
    < View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});