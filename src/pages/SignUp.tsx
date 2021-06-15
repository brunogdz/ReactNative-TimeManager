import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, ImageBackground, TextInput, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import backgroundRegister from '../assets/backgroundSignUp.png'
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { ButtonNext } from '../components/ButtonNext';

export function SignUp() {
    const navigation = useNavigation();
    function handleLoginTo() {
        navigation.navigate('SignIn')
    }

    const [name, setName] = useState("");
    const changeName = () => { }
    const [password, setPassword] = useState("");
    const [security, setSecurity] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [email, setEmail] = useState("")
    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setPassword(value);
    }
    function handleSubmit() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundRegister} style={styles.imageBack}>
                <Text style={styles.title}>
                    Seja bem-vindo(a)
                </Text>
                <View style={styles.content}>



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
                        <ButtonNext title="Cadastrar" onPress={handleSubmit} />
                    </View>
                    <View style={styles.footer2}>
                        <ButtonNext title="Já possuo conta" onPress={handleLoginTo}/>
                    </View>
                </View>




            </ImageBackground>
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
        paddingTop: 50,
        width: '100%'
    }
})




