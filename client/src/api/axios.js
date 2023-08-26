import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kevinnicolasmr-six.vercel.app/api',
    withCredentials: true,
})

export default instance;