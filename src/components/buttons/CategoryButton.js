import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export const CategoryButton = (categoryName) => {
  
return(
    <View style = {styles.container}>
        <TouchableOpacity>
            <View style={styles.ButtonStyle}>
                <Text style= {styles.textStyle}>{categoryName.categoryName}</Text>
            </View>
        </TouchableOpacity>
    </View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#030637',
    },
      textStyle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
      },

      ButtonStyle: {
        justifyContent: 'center',
        backgroundColor: '#3C0753',
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 10,
        padding: 5,
        paddingHorizontal:50,
        borderColor: '#910A67',
        borderWidth: 2
      }
});