import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import HeaderText from './HeaderText'


class NewDeck extends React.Component {
    state = {
        deckName: "",
    }

    handleSubmit () {
        //we will submit data to db
    }

    render () {
        return (
            <View>
                <HeaderText headerText="New Deck"/>
                <View>
                    <TextInput
                    placeholder="Enter name of the deck"
                    value={this.state.deckName}
                    onChangeText={(text) => this.setState({deckName: text})}
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

export default NewDeck