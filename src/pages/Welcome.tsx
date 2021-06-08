import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import wateringImg from '../assets/watering.png';
import backgroundWelcome from '../assets/backgroundWelcome.png';
export function Welcome() {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundWelcome} style={styles.imageB}>
                <Text style={styles.title}>
                    Gerencie suas plantas de forma fácil e não esqueça de se hidratar
            </Text>
                <Image source={wateringImg} />
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

        </View>
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
        justifyContent: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'

    },
    button: {

    },
    subtitle:{

    }
});