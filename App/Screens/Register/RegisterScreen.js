import { Text, StyleSheet, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { LightTheme } from '../../Components/Backgrounds/LightTheme';
import { RegisterForm } from '../../Components/Common/RegisterForm';

export const RegisterScreen = ({ navigation }) => {
    const female = require('../../../assets/images/female.png');
    const goToLogin = () => navigation.navigate('Login', {
        data: ''
    });

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
                        <Image source={female} style={styles.marginTop50} />
                    </View>
                    <RegisterForm />
                    <View style={styles.row}>
                        <Text style={styles.haveAccount}>Have an account? <Text style={{ fontWeight: 'bold' }} onPress={() => goToLogin()}>Login</Text></Text>
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
    marginTop50: {
        marginTop: 50
    },
    haveAccount: {
        color: '#4CAD73',
        padding: 10,
        textAlign: 'center'
    }
});