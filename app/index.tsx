import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { theme } from '../constants/theme';
import { useRouter } from 'expo-router';


const WelcomeScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={require('../assets/welcome.png')}
                style={styles.bgimage}
                resizeMode='cover'
            />

            {/* linear gradiant */}
            <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
                <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'white', 'white']}
                    style={styles.linearGradient}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.8 }}

                />

            </Animated.View>

            {/* contant */}

            <View style={styles.contantcontainer}>
                <Animated.Text style={styles.title} entering={FadeInDown.delay(400).springify()}>
                    Pixels

                </Animated.Text>
                <Animated.Text style={styles.subTitle} entering={FadeInDown.delay(500).springify()}>
                    Every Pixcel Tells a Story
                </Animated.Text>

                <Animated.View entering={FadeInDown.delay(600).springify()} >
                    <Pressable onPress={() => router.push('home')} style={styles.startbutton}>
                        <Text style={styles.buttontext}>Start Explore</Text>
                    </Pressable>
                </Animated.View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgimage: {
        width: wp(100),
        height: hp(100),
        position: 'absolute',
    },
    linearGradient: {
        width: wp(100),
        height: hp(65),
        top: 350,
        bottom: 0,


    },
    contantcontainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,

    },
    title: {
        fontSize: hp(7),
        fontWeight: 'bold',
        color: theme.color.neutral(0.9),
    },

    subTitle: {
        fontSize: hp(2),
        letterSpacing: 1,
        marginBottom: 10,
        fontWeight: "600",
        color: theme.color.neutral(0.9),
    },
    startbutton: {

        backgroundColor: theme.color.neutral(0.9),
        padding: 15,
        paddingHorizontal: 90,
        borderRadius: theme.radius.xl,
        borderCurve: 'continuous',
    },
    buttontext: {
        color: theme.color.white,
        fontSize: hp(3),
        fontWeight: "600",
        letterSpacing: 1,


    }

})







export default WelcomeScreen