export type Book = {
    title?: string;
    subtitle?: string;
    text?: string;
    img?: string;
    publishedDate?: string;
    previewLink?: string;
    isbn10?: string | number;
    isbn13?: string | number;
    googleId?: string | number;
    category?:string;
    author?:string
}

export interface SignUpForm {
    fullName?: string
    email?: string
    password?: string
    confirmPassword?: string
    agreed?: number | string
}
export interface User{
    readonly id?: number;
    fullName?: string;
    email?: string;
    books?: Book[]
}
export interface State {
    user: User
    isLoogedIn: boolean
    books: Book[]
    searchBooks: Book[]
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

export interface Payload {
    user?: User
    isLoogedIn?: boolean
    books?: Book[]
    searchBooks?: Book[]
    inputHandler?: {
        form: 'login' | 'signUp'
        property: 'email' | 'password' | 'fullName' | 'confirmPassword'
        value: string
    }
}
export type Action = {
    type: 'login' | 'logout' | 'getbooks' | 'inputHandler' | 'autoLogin' | 'search'
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

export type Params = {
    q: string
    maxResults?: number
    startIndex?: number

}

export type Query = {
    [key:string]:string
}

export type BookQuery = {
    keyword: string
    intitle?: string
    inauther?: string
    inpublisher?: string
    subject?: string
    isbn?: string
    lccn?: string
    pclc?: string
}
export   interface ContactUsForm {
    fullName?:string,
    email?:string,
    message?:string,
    q?:string
}