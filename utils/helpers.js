
import { AsyncStorage } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'


const decksData = {
    xyz100: {
      id: 'xyz100',
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
    xyz101: {
      id: 'xyz101',
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
const DECK_QUIZ_NOTIFICATION = 'DECK_QUIZ_NOTIFICATION'


export function setSampleData() {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decksData))
      .then(() => getInitialDecks())
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

// notifications logic is inspired by the class porject
export function clearLocalNotification () {
  return AsyncStorage.removeItem(DECK_QUIZ_NOTIFICATION)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Take a quiz!',
    body: "Hey 👋, You havn't taken a quiz today.",
  }
}

const createTrigger = () => ({
    hour: 18, minute: 0, repeats: true
})

export function setLocalNotification () {
  AsyncStorage.getItem(DECK_QUIZ_NOTIFICATION)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: createTrigger()
              })
              AsyncStorage.setItem(DECK_QUIZ_NOTIFICATION, JSON.stringify(true))
            }
          })
      }
    })
}
