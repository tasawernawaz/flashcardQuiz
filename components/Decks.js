import React from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'


const DecsData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      },
      {
        question: 'What is a ES6?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

class Decks extends React.Component {

  renderItem ({ item }) {
    return (
      <View style={styles.item}>
      <Text style={styles.title}>{item.title} : {item.questions.length}</Text>
    </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Your Decks</Text>
        <FlatList
          data={Object.values(DecsData)}
          renderItem={this.renderItem}
          keyExtractor={(deck) => deck.title}
        />
      </View>
    )
  }
}

export default Decks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#4169E1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})