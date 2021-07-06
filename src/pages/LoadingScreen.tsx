import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Animated, TouchableOpacity } from 'react-native';

import Load from '../assets/load.json';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/core';

export function LoadingScreen() {
    const navigation = useNavigation();
    function handleStartLoading() {
        setTimeout(() => {
            navigation.navigate('Confirmation');
        }, 5000);
    }


    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content} ref={handleStartLoading}>

                <LottieView source={Load}  autoPlay={true} loop={false} />


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    opacity: {
        width: 200,
        height: 200,
    }
})