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
import { createStackNavigator } from '@react-navigation/stack';
import { navyBlue, red } from './utils/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Stack = createStackNavigator();

function DeckStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Deck Stack" component={HomePageTabs} />
          <Stack.Screen name="Deck View" component={DeckView} />
          <Stack.Screen name="New Question" component={NewQuestion} />
          <Stack.Screen name="Quiz View" component={QuizView} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }

const Tab = createBottomTabNavigator()

function HomePageTabs() {
  return (
      <Tab.Navigator
            tabBarOptions={{
              labelStyle: {
                fontSize: 15,
                color: navyBlue
              }
            }}
        >
        <Tab.Screen
        name="My Decks"
        component={Decks}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={navyBlue} size={30} />
          )
        }}
        />
        <Tab.Screen
        name="Add New"
        component={NewDeck}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus-circle-outline" color={navyBlue} size={30} />
          )
        }}
        />
      </Tab.Navigator>
  )
}
class App extends React.Component {

  render () {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <DeckStack />
      </Provider>
    )
  }
}

export default App

const styles = StyleSheet.create({
  tabLable: {
    fontSize: 90
  }
})