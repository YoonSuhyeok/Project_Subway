import { Module } from 'vuex';
import { RootState } from './index';
import AxiosService from 'src/service/axios.service';

export interface moduleUserState {
    email: string;
    nickname: string;
    loginState: boolean;
    signState: boolean;
}

type loginData = {
    email: string;
    password: string;
}

type signData = {
    email: string;
    password: string;
    nickname: string;
}

type user = {
    User_id: number;
    User_email: string;
    User_password: string;
    User_nickname: string;
}

const moduleUser: Module<moduleUserState, RootState> = {
    namespaced: true,
    state:{
        email: '',
        nickname: '',
        loginState: false,
        signState: false
    },
    mutations: {
        setEmail(state, email: string){
            state.email = email;
        },
        setSignState(state, signState: boolean){
            state.signState = signState;
        },
        setLoginState(state, loginState: boolean){
            state.loginState = loginState;
        }
    },
    actions: {
        async login({commit}, data: loginData){
            const userResponse = await AxiosService.instance.post('/user/login', {email: data.email, password: data.password});
            if(userResponse.data == 'success'){
                commit('setLoginState', true);
            }
            commit('setEmail', data.email);
        },
        async sign({commit}, data: signData){
            const userRespone = await AxiosService.instance.post('/user', {
                email: data.email,
                password: data.password,
                nickname: data.nickname
            })

            const user: user = userRespone.data as user;

            if(user.User_id){
                commit('setSignState', true);
            }
        }
    },
    getters: {
        email: (state):string => state.email,
        signState: (state):boolean => state.signState,
        loginState: (state):boolean => state.loginState
    }
}

export default moduleUser;