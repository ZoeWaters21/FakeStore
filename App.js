/*Initialisation file for expo, loads navigational dependencies then redirects 
to Home.js on start up */
import React from "react";
import { Provider } from "react-redux";
import store from "./src/data/ReduxStore";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SplashScreen } from "./src/screens/SplashScreen";
import { Categories } from "./src/screens/Categories";
import { ProductList } from "./src/screens/ProductList";
import { ProductDetails } from "./src/screens/ProductDetails";
import { ShoppingCart } from "./src/screens/Cart";
import { CustomerProfile } from "./src/screens/CustomerProfile";
import { CustomerLogin } from "./src/screens/CustomerLogin";
import { CustomerOrders } from "./src/screens/CustomerOrders";


const Stack = createStackNavigator();
export default function App() { 
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" 
          component={SplashScreen} 
          options={{headerShown: false}}/>
        <Stack.Screen name="Categories"
          component={Categories}
          options={{headerShown: false}} />
        <Stack.Screen name="ProductList"
          component={ProductList}
          options={{headerShown: false}} />
        <Stack.Screen name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}} />
        <Stack.Screen name="ShoppingCart"
          component={ShoppingCart}
          options={{headerShown: false}} /> 
          <Stack.Screen name="CustomerProfile"
          component={CustomerProfile}
          options={{headerShown: false}} />
        <Stack.Screen name="CustomerLogin"
          component={CustomerLogin}
          options={{headerShown: false}} /> 
        <Stack.Screen name="CustomerOrders"
        component={CustomerOrders}
        options={{headerShown: false}} /> 
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}