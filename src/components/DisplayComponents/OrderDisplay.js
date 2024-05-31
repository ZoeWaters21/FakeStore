import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/AntDesign"
import { OrderList } from '../lists/OrderList';


export const OrderDisplay = (info) =>{
  console.log("info: ", info)
  info = info.info
  console.log("info.info: ", info)
  const [expanded, SetExpanded] = useState(false)

    
return(
  <View style={{flex:1}}>
    <View style={styles.displayStyle}>
        <View style={styles.contentContainer}>
            <View style={styles.TextContainer}>
              <Text style={styles.textStyle}>{info.orderType}: </Text>
              <Text style={[styles.textStyle, {fontWeight:'normal'}]}>{info.orderCount}</Text>
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
      </View>
      <View style={styles.listStyle}>
        <View style={{flex:1}}>
        <OrderList orderType = {info.orderType}/>
        </View>
      </View>
  </View>   
);

}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  displayStyle: {
    justifyContent: 'center',
    backgroundColor: '#3C0753',
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 5,
    borderColor: '#910A67',
    borderWidth: 2
  },
ErrorStyle:{
    textAlign: 'center',
    color:'white',
    fontSize: 25,
    marginHorizontal:15,
    marginVertical: 300
  },
  TextContainer:{
    paddingLeft:40,
    flex:8,
    justifyContent:'center',
    flexDirection: 'row'
  },
  contentContainer:{
    flexDirection: 'row'
  },
  iconContainer:{
    flex:1
  },
  listStyle:{
    flex:2,
    backgroundColor: 'rgba(60, 7, 83, 0.5)',
    marginHorizontal: 15,
    height: 40
  }
});