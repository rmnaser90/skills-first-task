import APIManager from '../APIs/APIManager'
import { Action } from '../Types/Types'
import { GET_BOOKS, INPUT_HANDLER, LOGIN, LOGOUT } from './actions'

const apiManager = new APIManager()

const Dispatcher = function (dispatch: (dispatcher: Action) => void) {
    const getBooks = async function () {
        const books = await apiManager.getBooks()
        const action: Action = { type: GET_BOOKS, payload: { books } }
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
        const user = JSON.parse(localStorage.user || '')
        if (user) {
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

    return { getBooks, loginInputHandler, login, autoLogin, signOut, signUpInputHandler }
}

export default Dispatcher
