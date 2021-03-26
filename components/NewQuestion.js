import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addQuestionToDeckApi } from '../utils/helpers'
import { addQuestionToDeck } from '../actions/questions'
import TextInputView from './TextInputVIew'
import SubmitBtn from './SubmitBtn'
import { navyBlue } from '../utils/colors'


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
            <View style={styles.container}>
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

                <SubmitBtn btnText="Submit" onPressHandler={() => this.handleSubmit(deck)} />

            </View>
        )
    }
}

export default connect()(NewQuestion)


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: navyBlue}
})