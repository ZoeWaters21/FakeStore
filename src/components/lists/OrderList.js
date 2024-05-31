import { StyleSheet, FlatList, View} from 'react-native';
import { useSelector } from "react-redux";
import { selectOrders } from '../../data/Users/CustomerOrdersSlice';
import { useEffect, useState } from 'react';
import { OrderProductShortDisplay } from '../DisplayComponents/OrderProductShortDisplay';

export const OrderList = (orderType) => {
    orderType = orderType.orderType
    console.log("ordertype: ", orderType)
    const {unpaidOrders, undeliveredOrders, deliveredOrders} = useSelector(selectOrders)
    const [loading, SetLoading] = useState(true)

    
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

return (
    <View style={styles.container}>

        {orderType === "New Orders"  ? <View style={styles.flexedContainer}>        
        <FlatList
            data={unpaidOrders}
            renderItem={({item}) => <OrderProductShortDisplay productInfo ={item} />}
            keyExtractor={(item) => item.id}/>
        </View>
        :
        orderType === "Paid Orders" ? <View style={styles.flexedContainer}>
        <FlatList
            data={undeliveredOrders}
            renderItem={({item}) => <OrderProductShortDisplay productInfo ={item} />}
            keyExtractor={(item) => item.id}
        />
        </View>:
        orderType === "Delivered Orders" ? <View style={styles.flexedContainer}>
        <FlatList
            data={deliveredOrders}
            renderItem={({item}) => <OrderProductShortDisplay productInfo ={item} />}
            keyExtractor={(item) => item.id}
        /> 
        </View>
        :
        <View style={styles.flexedContainer}>
            <Text style={styles.EmptyText}>No Orders to Show</Text>
        </View>}
    </View>
    
);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    EmptyText: {
        textAlign:'center',
        color:"white",
        fontSize:35
    },
    flexedContainer:{
        flex:1
    }
});