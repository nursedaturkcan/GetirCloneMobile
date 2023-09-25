import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'

const { width, height } = Dimensions.get("window")

const ProductImageCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0);
        }
    });
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <View style={{
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
            height: height * 0.25,
            paddingTop: 25
        }}>
            <FlatList
                style={{ width: width * 0.5, height: height * 0.21 }}
                horizontal
                data={images}
                showsHorizontalScrollIndicator={false}
                snapToInterval={width*0.5}
                snapToAlignment='center'
                decelerationRate="fast"
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={{ width: width * 0.5, height: height * 0.21, resizeMode: "stretch" }}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.dots}>
                {images.map((img, index) => (
                    <View key={index} style={[styles.dot, { backgroundColor: index === activeIndex ? 'blue' : 'gray' }]}></View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5
    },
})

export default ProductImageCarousel
