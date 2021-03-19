import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import HeaderText from './HeaderText'


class NewQuestion extends React.Component {
    state = {
        question: "",
        answer: ""
    }

    handleSubmit () {
        //we will submit data to db
    }

    render () {
        const {question, answer} = this.state
        return (
            <View>
                <HeaderText headerText="New Question"/>
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
                    <TouchableOpacity onPress={this.handleSubmit}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default NewQuestion