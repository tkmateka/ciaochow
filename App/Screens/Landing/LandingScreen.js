import { Text, StyleSheet, View, Image } from 'react-native';
import { DarkTheme } from '../../Components/Backgrounds/DarkTheme';
import { GroupedImages } from '../../Components/Common/GroupedImages';
import { WhiteButton } from '../../Components/Common/WhiteButton';

export const LandingScreen = ({ navigation }) => {
  const carot = require('../../../assets/icons/carot.png');

  const buttonHandler = () => navigation.navigate('Register', {
    data: 'Some data from the Landing Page'
  })

  const LandingPage = (
    <>
      <View style={styles.container}>
        <View style={[styles.row, styles.marginBottom50]}>
          <Text style={styles.companyName}>CiaoChow</Text>
          <Image source={carot} />
        </View>
        <View style={styles.marginBottom30}>
          <GroupedImages />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Hungry? <Text style={{ fontWeight: 'bold' }}>CiaoChow</Text>  helps you find something to eat.</Text>
        </View>
        <View style={styles.row}>
          <WhiteButton title="Get Started" buttonHandler={buttonHandler} />
        </View>
        <View style={styles.wrapDot}>
          <Text style={styles.dot} >  ●  </Text>
          <Text style={styles.dot} >  ●  </Text>
          <Text style={styles.dotActive} >  ●  </Text>
        </View>
      </View>
    </>
  )

  return <DarkTheme page={LandingPage} />
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  companyName: {
    color: 'white',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: 'bold',
    marginRight: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    width: '60%',
    marginTop: 20,
    marginBottom: 40
  },
  marginBottom30: {
    marginBottom: 30
  },
  marginBottom50: {
    marginBottom: 50
  },
  wrapDot: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 1,
    fontSize: 25,
    color: 'white'
  },
  dot: {
    margin: 1,
    fontSize: 25,
    color: '#828282'
  },
});