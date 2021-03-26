import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import HeaderText from './HeaderText'
import { addDeck } from '../actions/decks'
import { addDeckApi, formatDeck } from '../utils/helpers'
import { connect } from 'react-redux'
import { NavigationActions } from '@react-navigation/native'
import { navyBlue } from '../utils/colors'
import TextInputView from './TextInputVIew'

class NewDeck extends React.Component {
    state = {
        deckName: "",
    }

    handleSubmit = () => {
        const {dispatch} = this.props
        const { deckName }= this.state
        if (deckName === "") {
            alert("Please enter valid deck name.")
            return
        }
        const deck =  formatDeck(deckName)
        addDeckApi(deck)
        dispatch(addDeck(deck))

        this.setState({
            deckName: ""
        })

        this.props.navigation.goBack(null)

    }

    render () {
        return (
            <View style={{flex: 1}}>
                <HeaderText headerText="New Deck"/>
                <View style={styles.container}>
                    <TextInputView
                        placeholder="Enter name of the deck"
                        value={this.state.deckName}
                        onChangeTextHandler={(text) => this.setState({deckName: text})}
                    />
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
         alignItems: 'center',
         color: navyBlue
    }
})