import apiManager from '../APIs/APIManager'
import { Action, SignUpForm, User } from '../Types/Types'
import { GET_BOOKS, INPUT_HANDLER, LOGIN, LOGOUT, SEARCH_BOOKS } from './actions'

const Dispatcher = function (dispatch: (dispatcher: Action) => void) {
    const getBooks = async function () {
        const books = await apiManager.getBooks({ q: 'rich dad', maxResults: 40 })
        const action: Action = { type: GET_BOOKS, payload: { books } }
        dispatch(action)
    }

    const handleSearchBook = async function (key: string) {
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

    const login = async function (signInForm: { email?: string; password?: string }) {
        try {
            const user = await apiManager.signInUser(signInForm)
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
        } catch (error) {
            console.log(error);
        }
    }

    const autoLogin = async function () {
        try {
            if (localStorage.user) {
                const {id} = JSON.parse(localStorage.user)
                if (id) {
                    console.log(id);  
                    const user = await apiManager.authUser(id)
                    console.log(user);
                    const action: Action = {
                        type: LOGIN,
                        payload: { user }
                    }
                    dispatch(action)
                    return true
                }
            } else return false
        } catch (error) {
         return false   
        }
    }

    const signOut = async function () {
        try {
            await apiManager.logOut()
            localStorage.setItem('user', 'null')
            const action: Action = {
                type: LOGOUT,
                payload: {}
            }
            dispatch(action)
        } catch (error) {}
    }

    const signUpHandler = async function (values: SignUpForm) {
        try {
            const user: User = await apiManager.signUp(values)
            console.log(user)
            const action: Action = {
                type: LOGIN,
                payload: { user }
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getBooks,
        handleSearchBook,
        loginInputHandler,
        login,
        autoLogin,
        signOut,
        signUpInputHandler,
        signUpHandler
    }
}

export default Dispatcher
