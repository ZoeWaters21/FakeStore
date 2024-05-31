import { StyleSheet, FlatList, View} from 'react-native';
import { ProductButton } from '../buttons/ProductButtons';
import { OrderProductDetailDisplay } from '../DisplayComponents/OrderProductDetailDisplay';


export const OrderListDetails = (productInfo) => {
productInfo = productInfo.productInfo
console.log("productInfo: ", productInfo.orderItems)
return (
    <View style={styles.container}>
            <FlatList
                data={productInfo.orderItems}
                renderItem={({item}) => <OrderProductDetailDisplay productInfo = {item} />}
                keyExtractor={(item) => item.id}
            />
    </View>
    
);
};

/*Style sheet for this script, container controls the flex box, listItem controls the appearance
of the listed elements*/
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});