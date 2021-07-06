import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard,Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import backgroundRegister from '../assets/backgroundSignUp.png'
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { ButtonNext } from '../components/ButtonNext';
import IconT from '../assets/iconTimer.png'
export function SignUp() {
    const navigation = useNavigation();
    function handleLoginTo() {
        navigation.navigate('SignIn')
    }
    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    const [name, setName] = useState("");
    const changeName = () => { }
    const [password, setPassword] = useState("");
    const [security, setSecurity] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [email, setEmail] = useState("")
    function handleEmail(value: string){
        setIsFilled(!!value);
        if (validateEmail(value)){
            setEmail(value)
        }
        setEmail(" ")
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setPassword(value);
    }
    function handleSubmit() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={backgroundRegister} style={styles.imageBack}>

                    <View style={styles.content}>
                        <Image
                            source={IconT} style={styles.image}
                        />


                        <TextInput style={styles.input}
                            placeholder="Digite o seu nome"
                            value={name}
                            autoCapitalize={'sentences'}
                            onChangeText={text => setName(text)}
                        />

                        <View style={styles.email}>
                            <TextInput style={
                                styles.input
                            }
                                placeholder="Digite o seu email"
                                

                                onChangeText={handleEmail}
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
                            <ButtonNext title="Cadastrar" onPress={handleSubmit} />
                        </View>
                        <View style={styles.footer2}>
                            <ButtonNext title="Já possuo conta" onPress={handleLoginTo} />
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
        width: '100%',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: 325,
    },
    imageBack: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        margin: 35,
        paddingTop: 50,
        fontFamily: fonts.heading,
        lineHeight: 38

    },
    input: {
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
        paddingTop: 10,
        width: '100%',
    },
    footer2: {
        paddingTop: 10,
        width: '100%'
    },
    image: {
        height: 128,
        width: 128,
    }
})




