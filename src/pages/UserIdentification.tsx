import React, { useState } from 'react';
import colors from '../styles/colors';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import fonts from '../styles/fonts';
import { ButtonNext } from '../components/ButtonNext';
import { useNavigation } from '@react-navigation/core';
export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name)
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    function handleSubmit() {
        navigation.navigate('Confirmation');
    }
    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>

                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled ? '😎👍' : '😀'}

                                </Text>
                                <Text style={styles.title}>
                                    Como posso te chamar?
                                </Text>
                            </View>


                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green }

                                ]} placeholder="Digite aqui o seu nome ou nick"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <ButtonNext title="Confirmar" onPress={handleSubmit} />
                            </View>

                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }
})