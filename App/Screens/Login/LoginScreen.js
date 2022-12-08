import { Text, StyleSheet, View, Image } from 'react-native';

export const LoginScreen = () => {
    return <View style={styles.container}>
        <Image
            source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
        />
        <Text>Login Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CAD73',
        alignItems: 'center',
        justifyContent: 'center',
    },
});