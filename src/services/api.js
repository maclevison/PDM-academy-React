import axios from 'axios'

const URL = 'http://localhost'
const PORT = '3000'
const BASE_URL = `${URL}:${PORT}`

const api = axios.create({
    baseURL: `${BASE_URL}/`,
})

export default api