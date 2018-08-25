import axios from 'axios'

export const http =  axios.create({
    baseURL: process.env.BASE_URL,
    headers:{
        Authentication: process.env.AUTH_KEY
    }
});
