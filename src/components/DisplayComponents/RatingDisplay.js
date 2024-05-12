import { StyleSheet, View, Text,} from 'react-native';

export const RatingDisplay = (ratingInfo) =>{
    ratingInfo = ratingInfo.ratingInfo

return(
<View style={styles.middleContainer}>
    <View style={styles.middleContainerAlignment}>
        <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Rate: </Text>
        <Text style={styles.textStyle}>{ratingInfo.rate}</Text> 
    </View>
    <View style={styles.middleContainerAlignment}>
        <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Sales: </Text> 
        <Text style={styles.textStyle}>{ratingInfo.count}</Text> 
    </View>
    <View style={styles.middleContainerAlignment}>
        <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Price: </Text>
        <Text style={styles.textStyle}>${ratingInfo.price} </Text> 
    </View>  
</View>
)
}

const styles = StyleSheet.create({
middleContainer:{
    flexDirection: 'row',
    alignContent: 'space-around',
    backgroundColor: '#720455',
    borderRadius: 10,
    padding: 10,
    marginTop:15
},
textStyle:{
    color: 'white',
    fontSize: 17,
    //textAlign:'center'
},
middleContainerAlignment:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center'
}
});