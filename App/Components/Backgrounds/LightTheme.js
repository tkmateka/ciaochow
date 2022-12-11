import { Text, StyleSheet, View, Image, Button, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const LightTheme = ({ page }) => {
    const ellipse = require('../../../assets/images/light-green-ellipse.png');

    return <View style={styles.container}>
        <Image
            source={ellipse}
            style={styles.image}
        />
        {page}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    image: {
        width: deviceWidth,
        height: deviceHeight / 1.8,
        position: 'absolute',
        top: -100
    }
});