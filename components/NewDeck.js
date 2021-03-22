import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import HeaderText from './HeaderText'
import { addDeck } from '../actions/decks'
import { addDeckApi, formatDeck } from '../utils/helpers'
import { connect } from 'react-redux'

class NewDeck extends React.Component {
    state = {
        deckName: "",
    }

    handleSubmit = () => {
        const {dispatch} = this.props
        const deck =  formatDeck(this.state.deckName)
        addDeckApi(deck)
        dispatch(addDeck(deck))

        this.setState({
            deckName: ""
        })
    }

    render () {
        return (
            <View style={styles.container}>
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

export default connect()(NewDeck)


const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    }
})