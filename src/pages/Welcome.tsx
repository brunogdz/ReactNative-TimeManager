import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import wateringImg from '../assets/watering.png';
import backgroundWelcome from '../assets/backgroundWelcome.png';
import { Button } from '../components/Button';

export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(true)
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundWelcome} style={styles.imageB}>
                <Text style={styles.title}>
                    Gerencie suas plantas de forma fácil e não esqueça de se hidratar!
            </Text>


                <Image source={wateringImg} style={styles.image} />


                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                    sempre que precisar.
            </Text>
                <Button title=">" onPress={handleVisibility} />

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

    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 20,
        color: 'black'
    },
    image: {
        borderRadius: 16,
        width: 284,
        height: 284
    },


});