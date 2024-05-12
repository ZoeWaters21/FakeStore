import { StyleSheet, View, Text} from 'react-native';
import { useSelector } from "react-redux"
import { selectTotalItems, selectTotalCost } from "../../data/CartSlice"

export const TotalDisplay = () =>{
    const TotalItems = useSelector(selectTotalItems)
    const TotalCost = useSelector(selectTotalCost)

    return(
        <View style = {styles.container}>
            <View style = {{flex:3}}>
                <Text style = {styles.textStyle}>Items: {TotalItems}</Text>
            </View>
            <View style = {{flex:4}}>
                <Text style = {styles.textStyle}>Total Price: ${TotalCost}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'space-around',
        backgroundColor: '#720455',
        padding: 10,
        marginTop:5
    },textStyle:{
        textAlign:'center',
        color:'white',
        fontSize :20,
        fontWeight:'bold',

    }
});