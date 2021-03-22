import React from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'
import Decks from './components/Decks'
import DeckView from './components/DeckView'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import QuizView from './components/QuizView'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/'

class App extends React.Component {

  render () {
    return (
      <Provider store={createStore(reducer)}>
        <Decks />
      </Provider>
    )
  }
}

export default App
