import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const CategoryButton = (categoryName) => {
  const navigation = useNavigation()
  categoryName = categoryName.categoryName
  //console.log("category button returning", categoryName)
  const selectCategory = () =>{
    navigation.navigate("ProductList", {categoryName: categoryName})
  }
return(
    <View style = {styles.container}>
        <TouchableOpacity onPress={selectCategory}>
            <View style={styles.ButtonStyle}>
                <Text style= {styles.textStyle}>{categoryName}</Text>
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