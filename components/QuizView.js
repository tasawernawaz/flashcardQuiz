import React from 'react'
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { green, navyBlue, white, wwhite, red } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

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

    showScore = () => {
        const {score, totalQuestions} = this.state
        clearLocalNotification()
            .then(setLocalNotification)

        return Alert.alert(
            "Result",
            "Your total score is: " + (score/totalQuestions)*100 + "%",
            [{
                text: "Back to Deck",
                onPress: () => this.props.navigation.navigate('Deck View')
            },
            {
                text: "Restart Quiz",
                onPress: () => this.setState({
                    questionNumber: 1,
                    showAnswer: false,
                    score: 0,
                    quizEnd: false
                })
            }]
        )
    }

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
            <View style={styles.container}>
                <View style={{flex: 1, paddingTop:20}}>
                    <Text style={styles.text}>Quiz count: {questionNumber} / {totalQuestions}</Text>
                    <Text style={styles.text}>Your scrore: {(score/totalQuestions)*100}%</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Question: {currentQuestion.question}?</Text>
                    {showAnswer && <Text style={styles.text}>Answer: {currentQuestion.answer}</Text>}

                    <SubmitBtn
                    onPressHandler={this.handleToggle}
                    btnText={showAnswer ? "Show Question" : "Show Answer"}
                    />
                </View>

                <View style={{flex:1}}>
                    <SubmitBtn
                    style={{color: green}}
                    onPressHandler={() => this.handleAnswer(true)}
                    btnText="Correct"
                    />
                    <SubmitBtn
                    style={{color: red}}
                    onPressHandler={() => this.handleAnswer(false)}
                    btnText="Incorrect"
                    />
                </View>
            </View>
        )
    }
}

export default QuizView

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: navyBlue,
    },
    text: {
        color: white,
        fontSize: 20

    }
})