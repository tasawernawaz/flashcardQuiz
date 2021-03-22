import { getDecks, addDeckApi } from '../utils/helpers'

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"

export function receiveDecs(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}
