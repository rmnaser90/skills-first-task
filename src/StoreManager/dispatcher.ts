import apiManager from '../APIs/APIManager'
import { Action, Book, SignUpForm, User } from '../Types/Types'
import { GET_BOOKS, INPUT_HANDLER, LOGIN, LOGOUT, SEARCH_BOOKS, SELECT_BOOK } from './actions'

const Dispatcher = function (dispatch: (dispatcher: Action) => void) {
    const getBooks = async function () {
        const books = await apiManager.getBooks({ q: 'rich dad', maxResults: 40 })
        if (!books.err) {
            const action: Action = { type: GET_BOOKS, payload: { books } }
            dispatch(action)
        } else {
            return books
        }
    }

    const handleSearchBook = async function (key: string) {
        const searchBooks = await apiManager.searchBooks(key)
        const action: Action = { type: SEARCH_BOOKS, payload: { searchBooks } }
        dispatch(action)
    }
    const selectBook = function (selectedBook: Book) {
        const action: Action = { type: SELECT_BOOK, payload: { selectedBook } }
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
            return error
        }
    }

    const autoLogin = async function () {
        try {
            if (localStorage.user) {
                const { id } = JSON.parse(localStorage.user)
                if (id) {
                    const user = await apiManager.authUser(id)
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
    const addToBookShelf = async function (bookISBN: string) {
        try {
            await apiManager.addBookToShelf(bookISBN)
            await autoLogin()
        } catch (error) {
            alert("Book wasn't added")
        }
    }
    const removeFromBookShelf = async function (bookISBN: string) {
        try {
            await apiManager.removeFromBookShelf(bookISBN)
            await autoLogin()
        } catch (error) {
            alert("Book wasn't added")
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
            const action: Action = {
                type: LOGIN,
                payload: { user }
            }
            dispatch(action)
        } catch (error) {
            return error
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
        signUpHandler,
        addToBookShelf,
        removeFromBookShelf,
        selectBook
    }
}

export default Dispatcher
