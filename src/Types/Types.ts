export type Book = {
    title?: string
    text?: string
    img?: string
}

export type State = {
    user?: {
        username: string
        books?: Book[]
    }
    isLoogedIn?: boolean
    books?: Book[]
    forms?: {
        login: {
            username: string
            password: string
        }
        signUp: {
            username: string
        }
    }
}

export type Action = {
    type: 'login' | 'logout' | 'getbooks'
    payload: State
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
