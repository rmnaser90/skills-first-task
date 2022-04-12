import APIManager from '../APIs/APIManager'
import { Action, SignUpForm, User } from '../Types/Types'
import { GET_BOOKS, INPUT_HANDLER, LOGIN, LOGOUT, SEARCH_BOOKS } from './actions'

const apiManager = new APIManager()

const Dispatcher = function (dispatch: (dispatcher: Action) => void) {
    const getBooks = async function () {
        const books = await apiManager.getBooks({q:"rich dad",maxResults:40})
        const action: Action = { type: GET_BOOKS, payload: { books } }
        dispatch(action)
    }

    const handleSearchBook = async function (key:string) {
        const searchBooks = await apiManager.searchBooks(key)
        const action: Action = { type: SEARCH_BOOKS, payload: { searchBooks } }
        dispatch(action)
    }
    
    const loginInputHandler = function (property: 'email' | 'password', value: string) {
        const action: Action = {
            type: INPUT_HANDLER,
            payload: {
                inputHandler: {
                    form: 'login',
                    property,
                    value
                }
            }
        }
        dispatch(action)
    }
    const signUpInputHandler = function (
        property: 'email' | 'password' | 'fullName' | 'confirmPassword',
        value: string
    ) {
        const action: Action = {
            type: INPUT_HANDLER,
            payload: {
                inputHandler: {
                    form: 'signUp',
                    property,
                    value
                }
            }
        }
        dispatch(action)
    }

    const login = async function (signInForm: {
        email?: string
        password?: string
        fullName?: string
        confirmPassword?: string
    }) {
        const user = await apiManager.authUser(signInForm)
        if (!user.err) {
            const action: Action = {
                type: LOGIN,
                payload: { user }
            }
            dispatch(action)
            return user
        } else {
            alert(user.msg)
            return user
        }
    }

    const autoLogin = async function () {
        if (localStorage.user) {
            const user = JSON.parse(localStorage.user)
            const action: Action = {
                type: LOGIN,
                payload: { user }
            }
            dispatch(action)
            return true
        } else return false
    }

    const signOut = async function () {
        localStorage.setItem('user', 'null')
        const action: Action = {
            type: LOGOUT,
            payload: {}
        }
        dispatch(action)
    }

    const signUpHandler = function (values:SignUpForm) {
        const {fullName,email} = values
        const user:User = {fullName,email,books:[]}
        const action: Action = {
            type: LOGIN,
            payload: { user }
        }
        dispatch(action)
    }

    return { getBooks,handleSearchBook, loginInputHandler, login, autoLogin, signOut, signUpInputHandler, signUpHandler }
}

export default Dispatcher
