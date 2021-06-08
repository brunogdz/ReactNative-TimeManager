import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button( {title, ...rest} : ButtonProps){
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.5} {...rest}>
            <Text style={styles.textButton}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
        borderRadius: 16,
        height: 60,
        width: 60,
        marginBottom: 30
    },
    textButton: {
        color: 'white',
        fontSize: 20
    }
})