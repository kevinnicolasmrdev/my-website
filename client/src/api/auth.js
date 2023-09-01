import axios from './axios'


export const registerRequest = user => axios.post(`/api/register`, user);

export const loginRequest = user => axios.post(`/api/login`,user)

export const verifyTokenRequest = () => axios.get('/api/verify')