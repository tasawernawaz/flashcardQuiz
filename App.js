import React from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'
import Decks from './components/Decks'
import DeckView from './components/DeckView'

class App extends React.Component {

  render () {
    return (
      <DeckView />
    )
  }
}

export default App
