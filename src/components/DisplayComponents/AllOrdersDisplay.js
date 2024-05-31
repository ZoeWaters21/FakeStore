import { OrderDisplay } from './OrderDisplay';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../data/Users/CustomerOrdersSlice';
import { ScrollView, View, StyleSheet, Text} from 'react-native';
import { ViewportLayoutStyles } from '../../StyleSheets/ViewportLayout';

export const AllOrderDisplay = () =>{
const [loading, SetLoading] = useState(true)
const {unpaidOrders, undeliveredOrders, deliveredOrders} = useSelector(selectOrders)

const checkIfLoaded = () => {
    if (unpaidOrders.length != 0){
        SetLoading(false)
    }else if (undeliveredOrders.length != 0){
        SetLoading(false)
    }else if(deliveredOrders.length != 0){
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
<View style={ViewportLayoutStyles.flexedContainer}>
    {loading ? <View style={ViewportLayoutStyles.flexedContainer}>
        <Text style={styles.ErrorStyle}>No Orders Found!</Text>
    </View> : 
    <View style={ViewportLayoutStyles.flexedContainer}>
    <View style={ViewportLayoutStyles.flexedContainer}>
        <OrderDisplay info = {{orderType:"New Orders", orderCount:unpaidOrders.length}}/>
    </View>
    <View style={ViewportLayoutStyles.flexedContainer}>
        <OrderDisplay info = {{orderType:"Paid Orders", orderCount:undeliveredOrders.length}}/>
    </View>
    <View style={ViewportLayoutStyles.flexedContainer}>
         <OrderDisplay info = {{orderType:"Delivered Orders", orderCount:deliveredOrders.length}}/>
    </View>
    </View>} 
</View>
)

}
const styles = StyleSheet.create({

    ErrorStyle:{
        textAlign: 'center',
        color:'white',
        fontSize: 25,
        marginHorizontal:15,
        marginVertical: 300
      },
  });