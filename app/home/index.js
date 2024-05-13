import { View, Text, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';
import { wp, hp } from '../../helpers/common';
import Categories from '../../components/categories';
import { apicall } from '../../api';
import ImageGrid from '../../components/imagegrid';

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 10 : 30;

    const [search, setsearch] = useState('');
    const [images, setimages] = useState([])
    const [activeCategory, setActiveCategory] = useState(null);
    const searchInputRef = useRef(null);


    useEffect(() => {
        fetchimages();
    }, [])

    const fetchimages = async (params = { page: 1 }, append = false) => {
        let res = await apicall(params);
        if (res.success && res?.data?.hits) {
            if (append)
                setimages([...images, ...res.data.hits])
            else
                setimages([...res.data.hits])

        }


    }





    const handlechangecategory = (cat) => {
        setActiveCategory(cat);

    }
    console.log('active category', activeCategory)
    return (
        <View style={[styles.container, { paddingTop }]}>
            {/* header */}

            <View style={styles.header}>
                <Pressable>
                    <Text style={styles.title}>
                        Pixels
                    </Text>
                </Pressable>
                <Pressable>
                    <FontAwesome6 name='bars-staggered' size={22} color={theme.color.neutral(0.7)} />
                </Pressable>
            </View>

            <ScrollView
                contentContainerStyle={{ gap: 15 }}

            >

                {/* search bar */}
                <View style={styles.searchbar}>
                    <View style={styles.searchicon}>
                        <Feather name='search' size={24} color={theme.color.neutral(0.4)} />
                    </View>
                    <TextInput
                        value={search}
                        ref={searchInputRef}
                        placeholder='Search for Photos...'
                        style={styles.searchinput}
                        onChangeText={value => setsearch(value)}
                    />
                    {
                        search && (
                            <Pressable style={styles.closeicon}>
                                <Ionicons name='close' size={24} color={theme.color.neutral(0.6)} />

                            </Pressable>

                        )

                    }

                </View>

                {/* Categories */}

                <View style={styles.categories}>
                    <Categories activeCategory={activeCategory} handlechangecategory={handlechangecategory} />

                </View>

                {/* images grid */}
                <View>
                    {
                        images.length > 0 && <ImageGrid images={images} />
                    }
                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(4),
    },
    title: {
        fontSize: hp(4),
        fontWeight: theme.fontWeights.semibold,
        color: theme.color.neutral(0.9),
    },
    searchbar: {
        marginHorizontal: wp(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.color.grayBG,
        backgroundColor: theme.color.white,
        padding: 6,
        paddingLeft: 10,
        borderRadius: theme.radius.lg,

    },
    searchicon: {
        padding: 7,
    },
    searchicon: {
        borderRadius: theme.radius.sm,
        paddingVertical: 10,
        fontSize: hp(1.8),
    },
    closeicon: {
        backgroundColor: theme.color.neutral(0.1),
        padding: 8,
        borderRadius: theme.radius.sm,
    }
})

export default HomeScreen