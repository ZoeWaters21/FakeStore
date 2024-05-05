//This script fills a FlatList element with data from the database, then displays it on the screen. 
import { StyleSheet, FlatList, View,} from 'react-native';
import { CategoryButton } from '../buttons/CategoryButton';


/* this function takes the data from the database, displays it on the screen, the keyExtractor is
in there in case it may be needed later, currently doesnt do anything */
export const CategoryList = (data) => {
    //console.log("CategoryList(data): ", data)
return (
    <View style={styles.container}>
        <FlatList
            data={data.data}
            renderItem={({item}) => <CategoryButton categoryName = {item}/>}
            keyExtractor={(item) => item}
        />
    </View>
    
);
};

/*Style sheet for this script, container controls the flex box, listItem controls the appearance
of the listed elements*/
const styles = StyleSheet.create({
    container: {
      flex: 18,
      backgroundColor: '#030637',
      borderBottomColor: '#910A67',
      borderBottomWidth: 2,
      marginVertical: 10
    }
});