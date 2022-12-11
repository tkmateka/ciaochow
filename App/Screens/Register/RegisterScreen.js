import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { LightTheme } from '../../Components/Backgrounds/LightTheme';
import { GreyInput } from '../../Components/Common/GreyInput';

export const RegisterScreen = ({ navigation }) => {
    const [submitted, setSubmitted] = useState(false);

    const female = require('../../../assets/images/female.png');

    const RegisterPage = (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={(Platform.OS === 'ios') ? 'padding' : null}
            enabled
            keyboardVerticalOffset={Platform.select({ ios: 80, android: 500 })}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.register}>Register</Text>
                        <Image source={female} style={styles.marginTop} />
                    </View>
                    <View style={styles.row}>
                        <GreyInput
                            formSubmitted={submitted}
                            errorMessage="This Field is required"
                            placeholder="My placeholder"
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )

    return <LightTheme page={RegisterPage} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'flex-end'
    },
    register: {
        color: 'white',
        fontSize: 34,
        lineHeight: 34,
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 70,
    },
    marginTop: {
        marginTop: 50
    }
});