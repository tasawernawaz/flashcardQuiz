import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HeaderText from './HeaderText'
import { connect } from 'react-redux'

class DeckView extends React.Component {

    handlePress = (id) => {
        this.props.navigation.navigate('New Question', {id})
    }

    render () {
        const { deck } = this.props
        return (
            <View>
                <HeaderText headerText={`${deck.title} : ${deck.questions.length}`} />
                <View>
                    <TouchableOpacity>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handlePress(deck.id)}>
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