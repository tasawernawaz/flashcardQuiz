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
import middleware from './middleware'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

function HomePageTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Decks" component={Decks} />
        <Tab.Screen name="Add New" component={NewDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
class App extends React.Component {

  render () {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <HomePageTabs />
      </Provider>
    )
  }
}

export default App
