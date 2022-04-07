export type Book = {
    title?: string
    text?: string
    img?: string
}



export interface SignUpForm {
    fullName?: string
    email?: string
    password?: string
    confirmPassword?: string
    agreed?: number | string
}
export interface State {
    user: {
        fullName?: string
        email?: string
        books?: Book[]
        err?: boolean
        msg?: string
    }
    isLoogedIn: boolean
    books: Book[]
    searchBooks:Book[]
    forms: {
        login: {
            email?: string
            password?: string
            fullName?: string
            confirmPassword?: string
        }
        signUp: SignUpForm
    }
}
export interface User {
    fullName?: string
    email?: string
    books?: Book[]
    err?: boolean
    msg?: string
}

export interface Payload {
    user?: User
    isLoogedIn?: boolean
    books?: Book[]
    searchBooks?:Book[]
    inputHandler?: {
        form: 'login' | 'signUp'
        property: 'email' | 'password' | 'fullName' | 'confirmPassword'
        value: string
    }
}
export type Action = {
    type: 'login' | 'logout' | 'getbooks' | 'inputHandler' | 'autoLogin'| 'search'
    payload: Payload
}
export type ApiBook = {
    volumeInfo: {
        title: string
        description: string
        imageLinks: {
            thumbnail: string
        }
    }
}
