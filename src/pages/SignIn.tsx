import React from 'react';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { SafeAreaView, StyleSheet, Text, View, TextInput,  } from 'react-native';

export function SignIn() {
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