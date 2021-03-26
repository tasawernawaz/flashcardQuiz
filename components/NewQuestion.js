import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addQuestionToDeckApi } from '../utils/helpers'
import { addQuestionToDeck } from '../actions/questions'
import TextInputView from './TextInputVIew'


class NewQuestion extends React.Component {
    state = {
        question: "",
        answer: ""
    }

    handleSubmit = (id) => {
        const {dispatch} = this.props
        const { question, answer }= this.state
        if (this.state.question === "" || this.state.answer == "") {
            alert("Please enter valid data before submit.")
            return
        }

        const questionData = {id, question, answer}

        addQuestionToDeckApi(questionData)
        dispatch(addQuestionToDeck(questionData))

        this.setState({
            question: "",
            answer: ""
        })

        this.props.navigation.goBack({key: "Deck View"})
    }

    render () {
        const {question, answer} = this.state
        const {deck} = this.props.route.params
        return (
            <View>
                <Text>{deck.title}</Text>
                <View>
                    <TextInputView
                    placeholder="Enter a question"
                    value={question}
                    onChangeTextHandler={(text) => this.setState({question: text})}
                    />

                    <TextInputView
                    placeholder="Enter the answer"
                    value={answer}
                    onChangeTextHandler={(text) => this.setState({answer: text})}
                    />

                    <TouchableOpacity onPress={() => this.handleSubmit(deck)}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(NewQuestion)