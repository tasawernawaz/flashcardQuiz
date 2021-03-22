
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

  //  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    // .then(results => {
    //   if (results) {
    //     JSON.parse(results)
    //   }
    //   AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(DecsData)).then(() =>  DecsData)
    // })
}

export function getDeck(id) {

}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDeck (title) {
  return {
    id: generateUID(),
    title,
    quesitons: []
  }
}

export function addDeckApi(deck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.id]: deck
  }))
}

export function addQuestionToDeck({title, question}) {

}
