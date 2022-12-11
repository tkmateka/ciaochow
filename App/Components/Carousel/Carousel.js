import { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import { CarouselContent } from './CarouselContent';

const images = [
    require('../../../assets/images/carrots.png'),
    require('../../../assets/images/hamburger.png')
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const Carousel = () => {
    const [imgActive, setImgActive] = useState(0);

    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}>
                    {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={e}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == index ? styles.dotActive : styles.dot}
                            >
                                ●
                            </Text>
                        )
                    }
                </View>
                <View style={styles.content}>
                    <CarouselContent index={imgActive} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrap: {
        width: WIDTH,
        height: 341
    },
    wrapDot: {
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        fontSize: 25,
        color: 'white'
    },
    dot: {
        margin: 3,
        fontSize: 25,
        color: '#828282'
    },
    content: {
        position: 'absolute',
        width: WIDTH,
        height: HEIGHT,
        left: 0,
        top: 304,
        backgroundColor: 'white',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    }
});