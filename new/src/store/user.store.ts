import { Module } from 'vuex';
import { RootState } from './index';
import AxiosService from 'src/service/axios.service';

export interface moduleUserState {
    email: string;
    nickname: string;
    loginState: boolean;
}

type loginData = {
    email: string;
    password: string;
}
const moduleUser: Module<moduleUserState, RootState> = {
    namespaced: true,
    state:{
        email: '',
        nickname: '',
        loginState: false
    },
    mutations: {
        setEmail(state, email: string){
            state.email = email;
        }
    },
    actions: {
        async login({commit}, data: loginData){
            await AxiosService.instance.post('/login', {email: data.email, password: data.password});
            commit('setEmail', data.email);
        }
    },
    getters: {
        email: (state) => state.email
    }
}

export default moduleUser;