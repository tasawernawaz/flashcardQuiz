import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HeaderText from './HeaderText'
import { connect } from 'react-redux'

class DeckView extends React.Component {
    render () {
        const { deck } = this.props
        return (
            <View>
                <HeaderText headerText={`${deck.title} : ${deck.questions.length}`} />
                <View>
                    <TouchableOpacity>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
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