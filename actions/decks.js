import { getDecks } from '../utils/helpers'

export const RECEIVE_DECS = "RECEIVE_DECS"

export function receiveDecs(decs) {
    return {
        type: RECEIVE_DECS,
        decs
    }
}
