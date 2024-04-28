/* Home.js is the main view of the application, it populates the page with elements 
and functions called from scripts in the /src/ folder. */

import { StyleSheet, View, Text} from 'react-native';


//This function calls functions located in other script files to display elements on the page.
export const Home = () => {
   
  return (
    <View style ={styles.container}>
        <Text>Homepage</Text>
    </View>
  );
};

//initialises the first flex box, so the rest will be displayed correctly.
const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#030637',
        }
});
