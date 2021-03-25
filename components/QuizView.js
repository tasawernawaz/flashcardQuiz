import React from 'react'
import { View, Text } from 'react-native'
import HeaderText from './HeaderText'
import { connect } from 'react-redux'


class QuizView extends React.Component {
    render () {
        return (
            <View>
                <HeaderText headerText="Quiz in progress"/>
                <Text>Quiz detail</Text>
            </View>
        )
    }
}


export default connect()(QuizView)