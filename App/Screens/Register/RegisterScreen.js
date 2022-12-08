import { Text, StyleSheet, View, Image } from 'react-native';

export const RegisterScreen = () => {
    return <View style={styles.container}>
        <Image
            source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
        />
        <Text>Register Screen</Text>
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