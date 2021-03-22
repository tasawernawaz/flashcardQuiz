
import { AsyncStorage } from 'react-native'

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

const DECK_STORAGE_KEY = 'DECK_STORAGE_KEY'



export function getInitialDecks() {

  return DecsData

  // return AsyncStorage.getItem(DECK_STORAGE_KEY)
  //   .then(results => {
  //     if (results === null) {
  //       AsyncStorage.setItem(DECK_STORAGE_KEY, DecsData)
  //       return DecsData
  //     }
  //     return results
  //   })
}

export function getDeck(id) {

}

export function addDeck(title) {

}

export function addQuestionToDeck({title, question}) {

}
