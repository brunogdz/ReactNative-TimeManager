import React from 'react';
import {SafeAreaView, Text, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';

export function SignUp(){
    const navigation = useNavigation();
    function handleLoginTo(){
        navigation.navigate('SignIn')
    }
    return(
        <SafeAreaView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    imageBack:{
        
    }
})




