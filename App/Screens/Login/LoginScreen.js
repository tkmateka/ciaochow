import { Text, StyleSheet, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { LightTheme } from '../../Components/Backgrounds/LightTheme';
import { LoginForm } from '../../Components/Common/LoginForm';

export const LoginScreen = ({ navigation }) => {
    const female = require('../../../assets/images/male.png');
    const goToRegister = () => navigation.navigate('Register', {
        data: ''
    });

    const LoginPage = (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={(Platform.OS === 'ios') ? 'padding' : null}
            enabled
            keyboardVerticalOffset={Platform.select({ ios: 80, android: 500 })}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.login}>Login</Text>
                        <Image source={female} style={styles.marginTop50} />
                    </View>
                    <LoginForm navigation={navigation} />
                    <View style={styles.row}>
                        <Text style={styles.haveAccount}>Don't have an account? <Text style={{ fontWeight: 'bold' }} onPress={() => goToRegister()}>Register</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )

    return <LightTheme page={LoginPage} />
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
    login: {
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