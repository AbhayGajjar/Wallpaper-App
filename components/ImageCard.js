import { View, Text, Pressable, StyleSheet, } from 'react-native'
import React from 'react';
import { Image } from 'expo-image';
import { getImageSize, wp } from '../helpers/common';
import { theme } from '../constants/theme';

const ImageCard = ({ item, index, columns }) => {

    const isLastINRow = () => {
        return (index + 1) % columns === 0;
    }



    const getImageHeight = () => {
        let { imageHeight: height, imageWidth: width } = item;
        return { height: getImageSize(height, width) }
    }

    return (
        <Pressable style={[styles.imagewraper, !isLastINRow() && styles.spacing]}>
            <Image
                style={[styles.images, getImageHeight()]}
                source={item?.webformatURL}
                transition={100}

            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    images: {
        height: 300,
        width: '100%'
    },
    imagewraper: {
        backgroundColor: theme.color.grayBG,
        borderRadius: theme.radius.xl,
        borderCurve: 'continuous',
        overflow: 'hidden',
        marginBottom: wp(2),

    },
    spacing: {
        marginRight: wp(2),
    }
})

export default ImageCard