import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import wateringImg from '../assets/watering.png';
import backgroundWelcome from '../assets/backgroundWelcome.png';
import colors from '../styles/colors';
export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundWelcome} style={styles.imageB}>
                <Text style={styles.title}>
                    Gerencie suas plantas de forma fácil e não esqueça de se hidratar!
            </Text>
                <Image source={wateringImg} style={styles.}/>
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                    sempre que precisar.
            </Text>

                <TouchableOpacity style={styles.button}>
                    <Text>
                        >
                    </Text>
                </TouchableOpacity>
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageB: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        margin: 38,
        paddingBottom: 10

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
        borderRadius: 16,
        height: 60,
        width: 60,
        marginBottom: 30

        

    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 20,
        color: 'black'
    }
});