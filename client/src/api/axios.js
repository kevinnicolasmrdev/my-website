import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kevinnicolasmr-six.vercel.app/api', // Cambia esto a la URL de tu servidor en producción
    withCredentials: true,
});

export default instance;