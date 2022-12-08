import { StyleSheet, Pressable, Text } from 'react-native';

export const Button = ({ navigation }) => {
    const buttonHandler = () => navigation.navigate('Register', {
        data: 'Some data from the Landing Page'
    })

    return <Pressable style={styles.button} onPress={buttonHandler}>
        <Text style={styles.text}>Get Started</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 54,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#4CAD73',
        fontSize: 18,
        fontWeight: 'bold'
    }
});