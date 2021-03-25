import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import HeaderText from './HeaderText'
import { connect } from 'react-redux'

class QuizView extends React.Component {

    constructor(props) {
        super(props)
        const {deck} = props.route.params
        this.state = {
            questionNumber: 1,
            totalQuestions: deck.questions.length,
            showAnswer: false,
            score: 0,
            quizEnd: false
        }
    }

    showScore = () =>
        Alert.alert(
            "Result",
            "Your total score is: " + this.state.score,
            [{
                text: "Ok",
                onPress: () => this.props.navigation.navigate('Quiz View')
            }]
        )

    handleAnswer = (correct) => {
        if(correct === true) {
            this.setState((currentState) => ({
                score: currentState.score + 1
            }))
        }
        if (this.state.questionNumber === this.state.totalQuestions) {
            this.setState({
                quizEnd: true
            })
        } else {
            this.setState((currentState) => ({
                questionNumber: currentState.questionNumber + 1,
                showAnswer: false
            }))
        }
    }

    handleToggle = () => {
        this.setState(currentState => ({
            showAnswer: !currentState.showAnswer
        }))
    }

    render () {
        {this.state.quizEnd && this.showScore()}

        const { questions } = this.props.route.params.deck
        const { questionNumber, totalQuestions, score, showAnswer} = this.state
        const currentQuestion = questions[(questionNumber - 1)]

        return (
            <View>
                <HeaderText headerText="Quiz in progress"/>
                <Text>{questionNumber} / {totalQuestions}</Text>
                <Text>Your scrore: {score}</Text>

                <View>
                    <Text>{currentQuestion.question}</Text>

                    {showAnswer ? (
                        <View>
                            <Text>{currentQuestion.answer}</Text>
                            <TouchableOpacity onPress={this.handleToggle}>
                                <Text>Show Question</Text>
                            </TouchableOpacity>
                        </View>
                    ):
                        <TouchableOpacity onPress={this.handleToggle}>
                            <Text>Show Answer</Text>
                        </TouchableOpacity>
                    }

                    <TouchableOpacity onPress={() => this.handleAnswer(true)}>
                        <Text>Correct</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleAnswer(false)}>
                        <Text>Incorret</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(QuizView)