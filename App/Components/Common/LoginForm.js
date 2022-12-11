import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GreenButton } from '../../Components/Common/GreenButton';

export const LoginForm = ({ navigation }) => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        // Take us home if form is valid
        if (loginForm.email && emailRegex.test(loginForm.email) && loginForm.password) {
            goHome();
        }
    };

    const goHome = () => navigation.navigate('Home', {
        data: ''
    });

    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>email</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="youremail@mail.com"
                        onChangeText={newEmail => setLoginForm({ ...loginForm, email: newEmail })}
                        defaultValue={loginForm.email}
                    />
                    <>
                        {
                            (submitted && !loginForm.email) && <Text style={styles.errorMessage}> Email field is required </Text>
                        }
                        {
                            (submitted && loginForm.email && !emailRegex.test(loginForm.email)) && <Text style={styles.errorMessage}> Enter a valid Email </Text>
                        }
                    </>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>password</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="your password"
                        onChangeText={newPassword => setLoginForm({ ...loginForm, password: newPassword })}
                        defaultValue={loginForm.password}
                        secureTextEntry={true}
                    />
                    <>
                        {
                            (submitted && !loginForm.password) && <Text style={styles.errorMessage}>Password field is required </Text>
                        }
                    </>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <GreenButton title="Login" handleSubmit={handleSubmit} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
        alignItems: 'center'
    },
    button: {
        width: '90%',
        height: 54,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    inputContainer: {
        width: '90%',
        marginBottom: 10
    },
    textInput: {
        width: '100%',
        height: 46,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        paddingLeft: 20
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        marginTop: 3
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 5
    }
});