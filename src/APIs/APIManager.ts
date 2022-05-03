import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ContactUsForm, Params, SignUpForm } from '../Types/Types'

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
        try {
            
            const params: Params = {
                q: key,
                maxResults: 40
            }
            const books = await this.getBooks(params)
            return books
        } catch (error) {
            return []
        }
    }

    async signInUser(signInForm: { email?: string; password?: string }) {
        try {
            const response:AxiosResponse = await axios('user/signIn', { ...this.config, method: 'PUT', data: signInForm })
                    const {data}= response
                    console.log(response);
                    
            const { user, err } = data
            if (user && !err) {
                this.config.headers.userid = user.id
                return user
            }
            alert(data.msg)
        } catch (error) {
            console.log(error)
        }
    }

    async logOut() {
        try {
            const { data } = await axios('user/signOut', { ...this.config, method: 'PUT' })
            this.config.headers.userid = ''
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    async signUp(signUpForm: SignUpForm) {
        try {
            const { data } = await axios('user/signUp', { ...this.config, method: 'POST', data: signUpForm })
            const { err, user } = data
            if (user && !err) {
                this.config.headers.userid = user.id
                return user
            }
        } catch (error) {}
    }

    async authUser(userId: string) {
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

    async contactUs(message: ContactUsForm) {
        try {
            const res = await axios({ ...this.config,url:'customerSupport/contactUs', method: 'POST', data: message })
            return res.data
        } catch (error) {
            alert("something went wrong")
        }
    }
    async addBookToShelf(bookISBN:string){
        console.log("trying to add from api manager");
        
        try {
            console.log(
                this.config.headers.userid
            );
            
            const res = await axios({ ...this.config,url:'shelf/addToShelf/', method: 'POST', data: {bookISBN} })
            return res.data
        } catch (error) {
            alert("something went wrong")
        }
    }
    async removeFromBookShelf(bookISBN:string){
        try {
            const res = await axios({ ...this.config,url:'shelf/deleteUserBook/', method: 'DELETE', data: {bookISBN} })
            return res.data
        } catch (error) {
            alert("something went wrong")
        }
    }
}
const apiManager = new APIManager()
export default apiManager
