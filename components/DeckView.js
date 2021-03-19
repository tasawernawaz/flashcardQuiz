import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

let deck = {

        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          },
          {
            question: 'What is a ES6?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
}

class DeckView extends React.Component {
    render () {
        return (
            <View>
                <View>
                    <Text>{deck.title} : {deck.questions.length}</Text>
                </View>

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

export default DeckView