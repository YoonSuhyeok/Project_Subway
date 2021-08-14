import axios, { AxiosInstance } from 'axios';

export default class AxiosService {
    static readonly instance: AxiosInstance = axios.create({
        baseURL: 'https://www.makesand.shop',
        headers: {
            'Access-Control-Allow-Origin': 'https://www.makesand.shop',
            'Content-Type': 'application/json'
        },
        timeout: 100000,
    });
}