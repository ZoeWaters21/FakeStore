import { StyleSheet, View, Text,} from 'react-native';
import {useState, useEffect} from 'react';

export const RatingDisplay = (productInfo) =>{
    productInfo = productInfo.productInfo
    //console.log("rating display receiving: ", productInfo)
    const [loading, SetLoading] = useState(true)

    const checkIfLoaded = () => {
        if (productInfo.length != 0){
            SetLoading(false)
            //console.log("categoryList returning: ",categories)
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
                <Text style={styles.textStyle}>{productInfo.rating.rate}</Text> 
            </View>
            <View style={styles.middleContainerAlignment}>
                <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Sales: </Text> 
                <Text style={styles.textStyle}>{productInfo.rating.count}</Text> 
            </View>
            <View style={styles.middleContainerAlignment}>
                <Text style={[styles.textStyle, {fontWeight:'bold'}]}>Price: </Text>
                <Text style={styles.textStyle}>${productInfo.price} </Text> 
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