import { View, ActivityIndicator, StyleSheet} from 'react-native';

export const LoadingIndicator = () => {
return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffffff" /> 
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#030637',
    justifyContent: "center",
    alignItems: "center",
    },
});