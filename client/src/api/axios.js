import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kevinmedina.vercel.app',
    withCredentials: true,
})

export default instance;