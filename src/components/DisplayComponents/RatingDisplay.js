import { StyleSheet, View, Text,} from 'react-native';
import { selectProduct} from "../../data/Products/ProductSlice";
import { useSelector } from "react-redux"
import {useState, useEffect} from 'react';

export const RatingDisplay = () =>{
    const [loading, SetLoading] = useState(true)

    const {slicedData} = useSelector(selectProduct)

    const checkIfLoaded = () => {
        if (Object.keys(slicedData).length != 0){
            SetLoading(false)
        }
    }

    useEffect(() => {
        if (loading){
            checkIfLoaded()
        }
    }
    ,[])

return(
    <View>
        {!loading && <View style={styles.middleContainer}>
            <View style={styles.middleContainerAlignment}>
                <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Rate: </Text>
                <Text style={styles.textStyle}>{slicedData.rating.rate}</Text> 
            </View>
            <View style={styles.middleContainerAlignment}>
                <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Sales: </Text> 
                <Text style={styles.textStyle}>{slicedData.rating.count}</Text> 
            </View>
            <View style={styles.middleContainerAlignment}>
                <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Price: </Text>
                <Text style={styles.textStyle}>${slicedData.price} </Text> 
            </View>  
        </View>}
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