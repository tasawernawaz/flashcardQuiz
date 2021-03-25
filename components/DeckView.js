import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HeaderText from './HeaderText'
import { connect } from 'react-redux'
import decks from '../reducers/decks'

class DeckView extends React.Component {

    handleStartQuizPress = (deck) => {
        if (deck.questions.length === 0) {
            alert("You don't have any questions, please add questions before starting quiz.")
        } else {
            this.props.navigation.navigate('Quiz View', {deck})
        }
    }

    handleAddQuestionPress = (deck) => {
        this.props.navigation.navigate('New Question', {deck})
    }

    render () {
        const { deck } = this.props
        return (
            <View>
                <HeaderText headerText={`${deck.title} : ${deck.questions.length}`} />
                <View>
                    <TouchableOpacity onPress={() => this.handleStartQuizPress(deck)}>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleAddQuestionPress(deck.id)}>
                        <Text>Add new question</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps({decks}, {route}) {
    return {
        deck: decks[route.params.id]
    }
}

export default connect(mapStateToProps)(DeckView)