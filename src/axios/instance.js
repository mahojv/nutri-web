import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
}); 
//validar los status code 403 
const success = (response) => response;
const error = (error) => { 

    if(error.status === 403){
        window.location.href = '/login'
    }
    return Promise.reject(error);
}
instance.interceptors.response.use(success, error);

