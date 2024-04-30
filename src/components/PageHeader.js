/*This script displays a header on the screen, such as a page title, made this function as 
generic as possible due to many possible use cases */
import { StyleSheet, View, Text} from 'react-native';

/*Displays a pageheader on the page, takes a string as a parameter and displays it*/
export default function PageHeader ({headerText}) {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>{headerText}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
      flex: 2,
      marginTop: 50,
      backgroundColor: '#030637',
      borderBottomColor: '#910A67',
      borderBottomWidth: 2
    },
    font: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 30
    }
});