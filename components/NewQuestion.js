import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import HeaderText from './HeaderText'
import { connect } from 'react-redux'
import { addQuestionToDeckApi } from '../utils/helpers'
import { addQuestionToDeck } from '../actions/questions'


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
                <HeaderText headerText="New Question"/>
                <Text>{deck.title}</Text>
                <View>
                    <TextInput
                    placeholder="Enter a question"
                    value={question}
                    onChangeText={(text) => this.setState({question: text})}
                    >
                    </TextInput>
                    <TextInput
                    placeholder="Enter the answer"
                    value={answer}
                    onChangeText={(text) => this.setState({answer: text})}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={() => this.handleSubmit(deck)}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(NewQuestion)