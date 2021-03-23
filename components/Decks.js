import React from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import HeaderText from '../components/HeaderText'
import { connect } from 'react-redux'
import { receiveDecs } from '../actions/decks'
import { getInitialDecks, setSampleData } from '../utils/helpers'
import DeckView from './DeckView'
class Decks extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        setSampleData()
        .then(() => {
            getInitialDecks()
            .then(dispatch(receiveDecs()))
        })
    }

    handlePress = (id) => {
        this.props.navigation.navigate('Deck View', {id})
    }

    renderItem({ item }) {
        return (
            <View style={styles.dec}>
                <TouchableOpacity id={item.id} onPress={() => this.handlePress(item.id)}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

    render () {
        const { decks } = this.props
        if (decks.length === 0) {
            return (<View style={styles.container}>
                <Text>You dont have any decks.</Text>
            </View>)
        }


        return (
            <View style={styles.container}>
            <HeaderText headerText="Your Decks" />
            <FlatList
                data={decks}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={(deck) => deck.id}
            />
            </View>
        )
    }
}

function mapStateToProps({ decks }) {
    return {
        decks: Object.values(decks)
    }
}

export default connect(mapStateToProps)(Decks)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  dec: {
    backgroundColor: '#4169E1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})