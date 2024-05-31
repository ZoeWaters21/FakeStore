import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { largeButtonStyle, smallButtonStyle } from '../../StyleSheets/PreviousScreenButton'



export const PreviousPageButton = (pageInfo) =>{
  pageInfo = pageInfo.pageInfo
  const navigation = useNavigation()
  const navigateToPreviousScreen = () =>{
    if (pageInfo.PageName === "ProductList"){ 
    navigation.navigate("Categories") 
  }else{ 
    navigation.navigate("ProductList", pageInfo.params)
  } 
    }
    

    return(
      <View style = {pageInfo.PageName === "ProductList" ? largeButtonStyle.container: smallButtonStyle.container}>
              <TouchableOpacity style = {pageInfo.PageName === "ProductList" ? largeButtonStyle.buttonStyle: smallButtonStyle.buttonStyle} onPress={()=> navigateToPreviousScreen()}>
              <Icon name="leftcircle" size={pageInfo.PageName === "ProductList" ? 30:20} color="white" />
              <Text style = {pageInfo.PageName === "ProductList" ? largeButtonStyle.textStyle: smallButtonStyle.textStyle}>Back</Text>
          </TouchableOpacity>
      </View>
  )}
