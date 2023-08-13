import axios from 'axios'

const urlBackJournalApi = process.env.VUE_APP_BACKEND_JOURNAL_URL

const journalApi = axios.create({
    baseURL: urlBackJournalApi
})

journalApi.interceptors.request.use( (config) => {
    config.params = {
        auth: localStorage.getItem('idToken')
    }
    return config
})

export default journalApi