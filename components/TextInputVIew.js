import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { navyBlueLight, white } from '../utils/colors'

export default function TextInputView(props) {
    const {placeholder, value, onChangeTextHandler} = props
    return (
        <TextInput style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChangeTextHandler(text)}
        >
        </TextInput>
    )
}


const styles = StyleSheet.create({
    textInput : {
        width:400,
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        color: white,
        borderColor: white,
        backgroundColor: navyBlueLight
    }
})