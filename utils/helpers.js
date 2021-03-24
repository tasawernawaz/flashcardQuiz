
import { AsyncStorage } from 'react-native'

const decksData = {
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

export function setSampleData() {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decksData))
}

export function getInitialDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(results => JSON.parse(results))
}

export function getDeck(id) {
  return getInitialDecks().then(results => JSON.stringify(results)[id])

}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDeck (title) {
  return {
    id: generateUID(),
    title,
    questions: []
  }
}

export function addDeckApi(deck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.id]: deck
  }))
}

export function addQuestionToDeckApi({id, ...question}) {
  getInitialDecks((decks) => {
    alert(decks.length)
    decks = {
      ...decks,
      [id] : {
          ...decks[id],
          questions: [...decks[id].questions, question]
          }
      }
    return AsyncStorage.setItem(DECK_STORAGE_KEY, decks)
  })
}
