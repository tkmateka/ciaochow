import { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, Dimensions } from 'react-native';
import { GreenButton } from '../Common/GreenButton';

const content = [
    {
        name: 'Fresh Carrot',
        description: 'The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. \n\n A medium-size carrot has 25 calories, 6 grams of carbs, and 2 grams of fiber. The veggie is an excellent source of vitamin A, providing more than 200% of your daily requirement in just one carrot. Carrots are loaded with beta-carotene, a natural chemical that the body changes into vitamin A.',
        nutritionFacts: 'The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia.'
    },
    {
        name: 'Hamburger',
        description: 'A hamburger (or burger for short) is a food, which in American English is considered a sandwich consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun. \n\n The patty may be pan fried, grilled, smoked or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a "special sauce", often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns.',
        nutritionFacts: 'A hamburger (or burger for short) is a food, which in American English is considered a sandwich consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun.'
    }
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CarouselContent = ({ index }) => {
    const [activeTab, setActiveTab] = useState(0);
    let reaction = require('../../../assets/images/grey-heart.png');

    return (
        <View style={styles.column}>
            <View style={[styles.row, styles.marginBottom30, styles.padding20]}>
                <Text style={styles.header}>{content[index].name}</Text>
                <Image source={reaction} />
            </View>
            <View style={styles.column}>
                {/* Tab Header */}
                <View style={[styles.row, styles.spaceEvenly, styles.tabHeader]}>
                    <TouchableHighlight style={[styles.column, styles.tabItem]} onPress={() => setActiveTab(0)}>
                        <>
                            <Text style={(activeTab == 0) && styles.activeTabText}>Description</Text>
                            <View style={(activeTab == 0) && styles.activeTabBorder}></View>
                        </>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.column, styles.tabItem]} onPress={() => setActiveTab(1)}>
                        <>
                            <Text style={(activeTab == 1) && styles.activeTabText}>Neutrition Fascts</Text>
                            <View style={(activeTab == 1) && styles.activeTabBorder}></View>
                        </>
                    </TouchableHighlight>
                </View>
                {/* Content Body */}
                <View style={[styles.padding20, styles.fulheight]}>
                    <Text>{(activeTab == 0) ? content[index].description : content[index].nutritionFacts}</Text>
                    {/* More Button */}
                    <View style={styles.buttonContainer}>
                        <GreenButton title="Nah! Find something else." handleSubmit={() => { }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    padding20: {
        padding: 20
    },
    marginBottom30: {
        marginBottom: 30
    },
    tabHeader: {
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 0.5
    },
    spaceEvenly: {
        justifyContent: 'space-evenly'
    },
    tabItem: {
        width: 'auto',
        paddingBottom: 10,
        alignItems: 'center'
    },
    activeTabText: {
        color: '#4CAD73',
    },
    activeTabBorder: {
        backgroundColor: '#0EB177',
        width: 120,
        height: 4,
        top: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    buttonContainer: {
        width: WIDTH,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: HEIGHT - 477,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: 100,
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        elevation: 9,
    }
});
