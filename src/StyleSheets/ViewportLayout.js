import { StyleSheet } from 'react-native';

export const ViewportLayoutStyles = StyleSheet.create({
    PageContainer: {
      flex: 1,
      backgroundColor: '#030637',
    },
    ContentContainer:{
      flex:30
    },
    NavContainer:{
      flex:3
    },
    flexedContainer:{
      flex: 1
    },
    ErrorStyle:{
        textAlign: 'center',
        color:'white',
        marginHorizontal:15,
        marginVertical: 300
      }
});