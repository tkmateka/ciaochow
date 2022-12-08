import { StyleSheet, View, Image } from 'react-native';

export const GroupedImages = () => {
    const female = require('../../../assets/images/female.png');
    const male = require('../../../assets/images/male.png');

    return <View style={styles.row}>
        <Image source={female} />
        <Image source={male} />
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    }
});