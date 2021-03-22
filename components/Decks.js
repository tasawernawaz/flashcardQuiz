import React from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'
import HeaderText from '../components/HeaderText'
import { connect } from 'react-redux'
import { receiveDecs } from '../actions/decks'
import { getInitialDecks } from '../utils/helpers'


class Decks extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(receiveDecs(getInitialDecks()))
    }

    renderItem({ item }) {
        return (
            <View style={styles.dec}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        )
    }

    render () {
        const { decks } = this.props
        return (
            <View style={styles.container}>
            <HeaderText headerText="Your Decks" />
            <FlatList
                data={decks}
                renderItem={this.renderItem}
                keyExtractor={(deck) => deck.title}
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