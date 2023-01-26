import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:5000/api'
});


export const signIn = async (userData) => await httpClient.post('/users/sign-in', userData);

export const signUp = async (userData) => await httpClient.post('/users/sign-up', userData);

