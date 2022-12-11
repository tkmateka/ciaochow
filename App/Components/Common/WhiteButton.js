import { StyleSheet, Pressable, Text } from 'react-native';

export const WhiteButton = ({ title, buttonHandler }) => {
    return <Pressable style={styles.button} onPress={() => buttonHandler()}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 54,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    text: {
        color: '#4CAD73',
        fontSize: 18,
        fontWeight: 'bold'
    }
});