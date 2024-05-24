import { View } from 'react-native';
import PageHeader from '../components/DisplayComponents/PageHeader';
import { NavBar } from '../components/buttons/NavBar';
import { ViewportLayoutStyles } from '../StyleSheets/ViewportLayout'
import { pageTitles } from '../data/Constants';
import { ShoppingCartList } from '../components/lists/ShoppingCartList';
import { TotalDisplay } from '../components/DisplayComponents/TotalDisplay';


export const ShoppingCart = () => {


  return (
    <View style ={ViewportLayoutStyles.PageContainer}>
      <View style ={ViewportLayoutStyles.ContentContainer}>
          <View style ={{flex:4}}>
            <PageHeader headerText = {pageTitles.ShoppingCart}/>
          </View>
          <View style ={{flex:20}}>
            <ShoppingCartList  />
          </View>
          <View style ={{flex:2}}>
            <TotalDisplay />
          </View>
      </View>
      <View style ={ViewportLayoutStyles.NavContainer}>
        <NavBar currentPage = 'cart'/>
      </View>
    </View>
  );
};
