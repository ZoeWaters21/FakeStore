import { StyleSheet } from 'react-native';

export const largeButtonStyle = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#030637',
    },
    buttonStyle:{
        flexDirection: 'row',
        gap: 20,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#3C0753',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 20
    },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
      }
});

export const smallButtonStyle = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#030637',
    },
    buttonStyle:{
        flexDirection: 'row',
        gap: 10,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#3C0753',
        padding: 7,
        paddingHorizontal: 23,
        borderRadius: 15
    },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
      }
});