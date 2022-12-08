import { Text, StyleSheet, View, Image } from 'react-native';
import { LandingBackground } from '../../Components/Backgrounds/LandingBackground';
import { GroupedImages } from '../../Components/Common/GroupedImages';
import { Button } from '../../Components/Common/Button';

export const LandingScreen = ({ navigation }) => {
  const carot = require('../../../assets/icons/carot.png');

  const LandingPage = (
    <>
      <View style={styles.container}>
        <View style={[styles.row, styles.marginBottom]}>
          <Text style={styles.companyName}>CiaoChow</Text>
          <Image source={carot} />
        </View>
        <View style={styles.marginBottom}>
          <GroupedImages />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Hungry? <Text style={{ fontWeight: 'bold' }}>CiaoChow</Text>  helps you find something to eat.</Text>
        </View>
        <View style={styles.row}>
          <Button navigation={navigation} />
        </View>
      </View>
    </>
  )

  return <LandingBackground page={LandingPage} />
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
  marginBottom: {
    marginBottom: 30
  }
});