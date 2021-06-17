import React, { useState } from 'react';
import backgroundRegister from '../assets/backgroundSignUp.png'
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { ButtonNext } from '../components/ButtonNext';
import { SafeAreaView, StyleSheet, Text, View, TextInput, ImageBackground, Image, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconT from '../assets/iconTimer.png'

export function SignIn() {
    const navigation = useNavigation();
    function handleSubmit() {
        navigation.navigate('Confirmation')
    }
    const [password, setPassword] = useState("");
    const [security, setSecurity] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [email, setEmail] = useState("")
    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setPassword(value);
    }
    return (



        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={backgroundRegister} style={styles.imageBack}>

                    <View style={styles.content}>
                        <Image
                            source={IconT} style={styles.image}
                        />
                        <Text style={styles.title}>
                            Bem-vindo(a) de volta! 🙌✌
                        </Text>
                        <View style={styles.email}>
                            <TextInput style={
                                styles.input
                            }
                                placeholder="Digite o seu email"
                                value={email}

                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                        <View style={styles.inputPassword}>
                            <TextInput style={[
                                styles.input,
                                (isFilled || security) && {}
                            ]}
                                secureTextEntry={true}
                                placeholder="Digite sua senha"
                                onChangeText={handleInputChange}

                            />
                        </View>
                        <View style={styles.footer1}>
                            <ButtonNext title="Acessar" onPress={handleSubmit} />
                        </View>

                    </View>



                </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        margin: 35,
        fontFamily: fonts.heading,
        lineHeight: 38
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: 325,
    },
    imageBack: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
    },
    image: {
        height: 128,
        width: 128,
    }, input: {
        width: 325,
        height: 51,
        borderRadius: 22,
        backgroundColor: '#FFF',
        marginTop: 20,
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
        fontFamily: fonts.text

    },

    email: {

        justifyContent: "center",
        alignItems: 'center'
    },
    inputPassword: {
    },
    footer1: {
        paddingTop: 15,
        width: '100%',
    },
})