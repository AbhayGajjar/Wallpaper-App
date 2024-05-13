import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { data } from '../constants/data';
import { wp, hp } from '../helpers/common';
import { theme } from '../constants/theme';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const Categories = ({ activeCategory, handlechangecategory }) => {
    return (
        <FlatList
            horizontal
            contentContainerStyle={styles.flatlistcontainer}
            showsHorizontalScrollIndicator={false}
            data={data.categories}
            keyExtractor={item => item}
            renderItem={({ item, index }) => (
                <CategoryItem
                    isActive={activeCategory === item}
                    handlechangecategory={handlechangecategory}
                    title={item}
                    index={index}
                />
            )}



        />
    )
}

const CategoryItem = ({ title, index, isActive, handlechangecategory }) => {
    let textcolor = isActive ? theme.color.white : theme.color.neutral(0.8);
    let backgroundcolor = isActive ? theme.color.neutral(1.2) : theme.color.white;
    return (
        <Animated.View entering={FadeInRight.delay(index * 200).duration(1000).springify()}  >
            <Pressable onPress={() => handlechangecategory(isActive ? null : title)}
                style={[styles.categories, { backgroundcolor }]}>

                <Text style={[styles.title, { textcolor }]}>{title}</Text>

            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    flatlistcontainer: {
        paddingHorizontal: wp(4),
        gap: 8,

    },
    categories: {
        padding: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: theme.color.grayBG,
        borderRadius: theme.radius.sm,
        borderCurve: 'continuous',

    },
    title: {
        fontSize: hp(1.8),
        fontWeight: theme.fontWeights.medium,

    }


})

export default Categories