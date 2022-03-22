import { State, Action } from '../Types/Types'
import { LOGIN, LOGOUT, GET_BOOKS, INPUT_HANDLER } from './actions'
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
                fullName: '',
                confirmPassword: ''
            },
            signUp: {
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    action: Action
) {
    switch (action.type) {
        case LOGIN:
            return produce(state, (draftState: State) => {
                draftState.isLoogedIn = true
                localStorage.setItem('user',JSON.stringify(state.forms.login))
                draftState.user = state.forms.login
            })
        case LOGOUT:
            return produce(state, (draftState: State) => {
                draftState.user = { email: '', books: [] }
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

                console.log()
            })

        default:
            return state
    }
}
//redux thunk
//zustand
