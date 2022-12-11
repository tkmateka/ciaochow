import { StyleSheet, Pressable, Text } from 'react-native';

export const GreenButton = ({ title, handleSubmit }) => {
    return <Pressable style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 54,
        backgroundColor: '#4CAD73',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});