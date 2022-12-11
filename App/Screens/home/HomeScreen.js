import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Carousel } from '../../Components/Carousel/Carousel';
import { LightTheme } from '../../Components/Backgrounds/LightTheme';

export const HomeScreen = () => {
    const HomePage = (
        <SafeAreaView>
            <Carousel />
        </SafeAreaView>
    )

    return <LightTheme page={HomePage} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CAD73',
        alignItems: 'center',
        justifyContent: 'center',
    },
});