import { State, Action } from '../Types/Types'
import { LOGIN, LOGOUT, GET_BOOKS } from './actions'
import { produce } from 'immer'
export const reducer = function (state: State = {}, action: Action) {
    switch (action.type) {
        case LOGIN:
            return produce(state, (draftState: State) => {
                draftState.isLoogedIn = true
                draftState.user = action.payload.user
            })
        case LOGOUT:
            return produce(state, (draftState: State) => {
                draftState.user = { username: '', books: [] }
                draftState.isLoogedIn = false
            })
        case GET_BOOKS:
            return produce(state, (draftState: State) => {
                draftState.books = action.payload.books
            })

        default:
            return state
    }
}
//redux thunk
//zustand
