/*Initialisation file for expo, loads navigational dependencies then redirects 
to Home.js on start up */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "./src/screens/SplashScreen";
import { Home } from "./src/screens/Home";
import { ProductList } from "./src/screens/ProductList";


const Stack = createStackNavigator();
export default function App() { 
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" 
        component={SplashScreen} 
        options={{headerShown: false}}/>
      <Stack.Screen name="Home"
        component={Home}
        options={{headerShown: false}} />
        <Stack.Screen name="ProductList"
        component={ProductList}
        options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}