import { State, Action } from '../Types/Types'
import { LOGIN, LOGOUT, GET_BOOKS, INPUT_HANDLER, AUTO_LOGIN } from './actions'
import { produce } from 'immer'

export const reducer = function (
    state: State = {
        user: {
            fullName: '',
            email: '',
            books: []
        },
        isLoogedIn: false,
        books: [],
        forms: {
            login: {
                email: '',
                password: '',
            },
            signUp: {
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
                agreed:''
            }
        }
    },
    action: Action
) {
    switch (action.type) {
        case LOGIN:
            return produce(state, (draftState: State) => {
                const curUser = action?.payload?.user
                if (curUser) {
                    localStorage.setItem('user', JSON.stringify(curUser))
                    draftState.isLoogedIn = true
                    draftState.user = curUser
                }
            })
        case LOGOUT:
            return produce(state, (draftState: State) => {
                draftState.user = {
                    fullName: '',
                    email: '',
                    books: []
                }
                draftState.isLoogedIn = false
            })
        case GET_BOOKS:
            return produce(state, (draftState: State) => {
                draftState.books = action.payload.books || draftState.books
            })
        case INPUT_HANDLER:
            return produce(state, (draftState: State) => {
                const form = action.payload.inputHandler?.form
                const property = action.payload.inputHandler?.property
                if (form && property) {
                    draftState.forms[form][property] = action.payload.inputHandler?.value
                }
            })

        default:
            return state
    }
}
//redux thunk
//zustand
