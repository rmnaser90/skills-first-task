export type Book = {
    title?: string
    text?: string
    img?: string
}

export interface State {
    user: {
        fullName?: string
        email?: string
        books?: Book[]
        err?:boolean
        msg?:string
    }
    isLoogedIn: boolean
    books: Book[]
    forms: {
        login: {
            email?: string
            password?: string
            fullName?: string
            confirmPassword?: string

        }
        signUp: {
            fullName?: string
            email?: string
            password?: string
            confirmPassword?: string
        }
    }
}

export interface Payload{
    user?: {
        fullName?: string
        email?: string
        books?: Book[]
        err?:boolean
        msg?:string
    }
    isLoogedIn?: boolean
    books?: Book[]
    inputHandler?: {
        form: 'login' | 'signUp'
        property: 'email' | 'password' | 'fullName' | 'confirmPassword'
        value: string
    }
}
export type Action = {
    type: 'login' | 'logout' | 'getbooks' | 'inputHandler' | 'autoLogin'
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
