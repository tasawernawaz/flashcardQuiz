import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { addDeck } from '../actions/decks'
import { addDeckApi, formatDeck } from '../utils/helpers'
import { connect } from 'react-redux'
import { NavigationActions } from '@react-navigation/native'
import { navyBlue, white } from '../utils/colors'
import TextInputView from './TextInputVIew'
import SubmitBtn from './SubmitBtn'

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
                <View style={styles.container}>
                    <TextInputView
                        placeholder="Enter name of the deck"
                        value={this.state.deckName}
                        onChangeTextHandler={(text) => this.setState({deckName: text})}
                    />
                    <SubmitBtn
                        btnText="Create Deck"
                        onPressHandler={this.handleSubmit}
                    />

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
         backgroundColor: navyBlue,
    }
})