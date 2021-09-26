import axios, { AxiosInstance } from 'axios';

export default class AxiosService {
    static readonly instance: AxiosInstance = axios.create({
        baseURL: 'http://3.38.44.44:3000',
        headers: {
            'Access-Control-Allow-Origin': 'http://3.38.44.44:3000',
            'Content-Type': 'application/json'
        },
        timeout: 100000,
    });
}