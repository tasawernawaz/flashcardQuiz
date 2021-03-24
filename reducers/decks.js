import { ADD_DECK, RECEIVE_DECKS } from '../actions/decks'
import {ADD_QUESTION } from '../actions/questions'


export default function decks(state={}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.id] : {
                    ...action.deck
                }
            }
        case ADD_QUESTION:
            const {id, ...question} = action.data
            return {
                ...state,
                [id] : {
                    ...state[id],
                    questions: [...state[id].questions, question]
                    }
                }
        default:
            return state
    }
}