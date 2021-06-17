import React from 'react';
import backgroundRegister from '../assets/backgroundSignUp.png'
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { ButtonNext } from '../components/ButtonNext';
import { SafeAreaView, StyleSheet, Text, View, TextInput,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
    const navigation = useNavigation();
    function handleLoginTo() {
        navigation.navigate('SignIn')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text>Skéci minha senha</Text>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{

    }
})