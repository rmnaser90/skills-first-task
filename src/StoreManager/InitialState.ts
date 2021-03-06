import { State } from "../Types/Types";

const initialState: State = {
    user: {
        fullName: '',
        email: '',
        books: []
    },
    selectedBook:{},
    isLoogedIn: false,
    books: [],
    searchBooks:[],
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
}
export default initialState