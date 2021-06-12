import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { ButtonNext } from '../components/ButtonNext';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😉✍
                </Text>

                <Text style={styles.title}>
                    Beleza! Seja bem-vindo(a)
                </Text>

                <Text style={styles.subtitle}>
                    Agora estamos dando um passo à frente para a sua organização!
                </Text>

                <View style={styles.footer}>
                    <ButtonNext title="Começar" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji: {
        fontSize: 70,
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        paddingTop: 20
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
    }
})