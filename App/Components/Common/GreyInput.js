import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export const GreyInput = ({ formSubmitted, errorMessage, placeholder }) => {
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState(formSubmitted);

    let hasError;

    if (submitted && !text) {
        hasError = <Text style={{ padding: 10, fontSize: 42 }}>
            {errorMessage}
        </Text>
    }

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder={placeholder}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            {hasError}
        </View>
    );
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