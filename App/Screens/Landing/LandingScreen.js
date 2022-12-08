import { Text, StyleSheet, View, Image, Button, Dimensions } from 'react-native';
import { LandingBackground } from '../../Components/Backgrounds/LandingBackground';

const deviceWidth = Dimensions.get('window').width;

export const LandingScreen = ({ navigation }) => {
  const carot = require('../../../assets/icons/carot.png');

  const LandingPage = (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>CiaoChow</Text>
        <Image source={carot} />
      </View>
      <Button
        title='Register'
        onPress={() => navigation.navigate('Register', { data: 'Some data from the Landing Page' })} />
    </View>
  )

  return <LandingBackground page={LandingPage} />
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    // fontFamily: 
  }
});