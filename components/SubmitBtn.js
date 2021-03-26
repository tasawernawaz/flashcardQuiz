import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import {white, navyBlueLight} from '../utils/colors'


export default function SubmitBtn({btnText, onPressHandler, style={}}) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPressHandler}>
            <Text style={[styles.text, style]}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: white,
        fontSize:20
      },
    btn: {
        width: 200,
        marginTop: 10,
        alignItems: "center",
        backgroundColor: navyBlueLight,
        padding: 10,
        borderRadius: 10
    }
})