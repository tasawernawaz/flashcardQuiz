import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import decks from '../reducers/decks'
import { white, navyBlue } from '../utils/colors'
import SubmitBtn from './SubmitBtn'

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
            <View style={styles.container}>
                <View style={{flex:1, paddingTop: 20}}>
                    <Text style={styles.title}>
                        {deck.title}<Text style={styles.length}>({deck.questions.length} questions)</Text>
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <SubmitBtn
                    btnText="Start Quiz"
                    onPressHandler={() => this.handleStartQuizPress(deck)}
                    />
                    <SubmitBtn
                    btnText="Add New Question"
                    onPressHandler={() => this.handleAddQuestionPress(deck.id)}
                    />
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

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: navyBlue
    },
    title: {
        color: white,
        fontSize: 32,
    },
    length: {
        fontSize: 20,
        fontStyle: 'italic'
    }
})
