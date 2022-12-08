import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingScreen } from './App/Screens/Landing/LandingScreen.js';
import { RegisterScreen } from './App/Screens/Register/RegisterScreen.js';
import { LoginScreen } from './App/Screens/Login/LoginScreen.js';
import { HomeScreen } from './App/Screens/home/HomeScreen.js';
import { StyleSheet, StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  StatusBar.setBarStyle('light-content', true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Landing'
          component={LandingScreen}
          options={{
            title: "",
            ...styles.header
          }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{
            title: "",
            ...styles.header
          }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            title: "",
            ...styles.header
          }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: "",
            ...styles.header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    headerStyle: {
      backgroundColor: '#53B97C'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    headerShadowVisible: false,
  },
});