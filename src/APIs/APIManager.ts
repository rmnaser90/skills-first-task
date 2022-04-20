import axios, { AxiosRequestConfig } from 'axios'
import { Book, ApiBook, Params, SignUpForm } from '../Types/Types'

const user = {
    fullName: 'Albert Einstein',
    email: 'rami@moday.com',
    books: [],
    err: false,
    msg: ''
}
interface AxiosConfig extends AxiosRequestConfig {
    headers: {
        userid: string
    }
}
class APIManager {
    config: AxiosConfig
    constructor() {
        this.config = {
            headers: { userid: '' },
            baseURL: 'http://localhost:3003/api/v1/',
            method: 'GET'
        }
    }
    async getBooks(params?: Params) {
        try {
            const res = await axios('/search', { ...this.config, params })
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    async searchBooks(key: string) {
        const params: Params = {
            q: key,
            maxResults: 40
        }
        const books = await this.getBooks(params)
        return books
    }

    async signInUser(signInForm: { email?: string; password?: string }) {
        try {
            const { data } = await axios('user/signIn', { ...this.config, method: 'PUT', data: signInForm })
            const { user, err } = data
            if (user && !err) {
                this.config.headers.userid = user.id
                return user
            }
        } catch (error) {
            console.log(error)
        }
    }

    async logOut() {
        try {
            const { data } = await axios('user/signOut', { ...this.config, method: 'PUT' })
            this.config.headers.userid = ''
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    async signUp(signUpForm:SignUpForm){
        try {
            
            const {data} = await axios('user/signUp', {...this.config,method:'POST',data:signUpForm})
            const {err,user} = data
            if (user && !err) {
                this.config.headers.userid = user.id
                return user
            }
        } catch (error) {
            
        }
    }
    async authUser(userId:string){
        try {
            this.config.headers.userid = userId
            const { data } = await axios('user/authenticateUser', this.config)            
            const { user, err } = data
            if (user && !err) {
                this.config.headers.userid = user.id
                return user
            }
        } catch (error) {
            console.log(error)
        }

    }
}
const apiManager = new APIManager()
export default apiManager
