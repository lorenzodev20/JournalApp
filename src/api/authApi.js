import axios from 'axios'

const identitytoolkitUrl = process.env.VUE_APP_BACKEND_AUTH_URL
const identitytoolkitKey= process.env.VUE_APP_BACKEND_AUTH_URL_KEY

const authApi = axios.create({
    baseURL: identitytoolkitUrl,
    params:{
        key:identitytoolkitKey
    }
})

export default authApi