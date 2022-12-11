import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GreenButton } from '../../Components/Common/GreenButton';

export const RegisterForm = () => {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        console.log(registerForm)
    };

    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>username</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="tukiso"
                        onChangeText={newUsername => setRegisterForm({ ...registerForm, username: newUsername })}
                        defaultValue={registerForm.username}
                    />
                    <>
                        {
                            (submitted && !registerForm.username) && <Text style={styles.errorMessage}> Username field is required </Text>
                        }
                    </>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>email</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="youremail@mail.com"
                        onChangeText={newEmail => setRegisterForm({ ...registerForm, email: newEmail })}
                        defaultValue={registerForm.email}
                    />
                    <>
                        {
                            (submitted && !registerForm.email) && <Text style={styles.errorMessage}> Email field is required </Text>
                        }
                        {
                            (submitted && registerForm.email && !emailRegex.test(registerForm.email)) && <Text style={styles.errorMessage}> Enter a valid Email </Text>
                        }
                    </>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>password</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="your password"
                        onChangeText={newPassword => setRegisterForm({ ...registerForm, password: newPassword })}
                        defaultValue={registerForm.password}
                        secureTextEntry={true}
                    />
                    <>
                        {
                            (submitted && !registerForm.password) && <Text style={styles.errorMessage}>Password field is required </Text>
                        }
                    </>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <GreenButton title="Register" handleSubmit={handleSubmit} />
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