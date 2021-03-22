import { RECEIVE_DECS } from '../actions/decks'


export default function decs(state={}, action) {
    switch (action.type) {
        case RECEIVE_DECS:
            return {
                ...state,
                ...action.decs
            }
        default:
            return state
        }
}