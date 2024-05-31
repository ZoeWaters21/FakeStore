import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import { OrderListDetails } from '../lists/OrderlistDetails';



export const OrderProductShortDisplay = (productInfo) =>{
    productInfo = productInfo.productInfo
    //console.log(productInfo)
    const [expanded, SetExpanded] = useState(false)


return(
    <View style = {styles.contentContainer}>
            <View style = {styles.SummaryContainer}>
                <View style = {styles.TextContainer}>
                    <Text style = {styles.textStyle}>Order ID: </Text>
                    <Text style={[styles.textStyle, {fontWeight:'normal'}]}>{productInfo.id}</Text>
                </View>
                <View style = {styles.TextContainer}>
                    <Text style = {styles.textStyle}>Items: </Text>
                    <Text style={[styles.textStyle, {fontWeight:'normal'}]}>{productInfo.totalOrderItems}</Text>
                </View>
                <View style = {styles.TextContainer}>
                    <Text style = {styles.textStyle}>Total: </Text>
                    <Text style={[styles.textStyle, {fontWeight:'normal'}]}>{productInfo.totalPrice}</Text>
                </View>
                {!expanded ? <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=> SetExpanded(true)}>
                    <Icon name="caretdown" size={30} color='white' />
                </TouchableOpacity>
                </View>:
                <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=> SetExpanded(false)}>
                <Icon name="caretup" size={30} color= 'white' />
                </TouchableOpacity>
                </View>}
            </View>
        {expanded && 
        <View style = {styles.listContainer}>
         <OrderListDetails productInfo = {productInfo}/>
        </View>}

    </View>
);

}

const styles = StyleSheet.create({
    SummaryContainer:{
        flex:1,
        flexDirection:'row',
        marginTop:5
    },
    TextContainer:{
        flex:3,
        flexDirection: 'row',
        justifyContent:'center'
    },
    contentContainer:{
        flex:1
    },
    iconContainer:{
        flex:1
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },listContainer:{
        flex:1,
    }
});