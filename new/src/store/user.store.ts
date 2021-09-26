import { Module } from 'vuex';
import { RootState } from './index';
import AxiosService from 'src/service/axios.service';

export interface moduleUserState {
    email: string;
    password: string,
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
        password: '',
        nickname: '',
        loginState: false,
        signState: false
    },
    mutations: {
        setEmail(state, email: string){
            state.email = email;
        },
        setPassword(state, password: string) {
            state.password = password;
        },
        setNickname(state, nickname: string) {
            state.nickname = nickname;
        },
        setSignState(state, signState: boolean){
            state.signState = signState;
        },
        setLoginState(state, loginState: boolean){
            state.loginState = loginState;
        },
    },
    actions: {
        async login({commit}, data: loginData){
            const userResponse = await AxiosService.instance.post('/user/login', {email: data.email, password: data.password});
            if(userResponse.data == 'success'){
                commit('setLoginState', true);
            }
            commit('setEmail', data.email);
            commit('setPassword', data.password);
        },
        async sign({commit}, data: signData){
            const emailresponse = await AxiosService.instance.get(`/user/${data.email}`);

            if(emailresponse.data === 'success'){
                commit('setSignState', true);
            }
        },
        // 메일로 인증번호를 보냄
        async sendmail({commit}, email: string) {
            commit('setEmail', email);
            await AxiosService.instance.get(`/user/keys?userId=${email}`);
        },
        // 인증번호를 서버로 보냄
        async certmail({state}, key: number) {
            console.log("email and key", state.email, key);
            console.log("header", `/user/certify?userId=${state.email}&key=${key}`);
            return await AxiosService.instance.get(`/user/certify?userId=${state.email}&key=${key}`);
        }
    },
    getters: {
        email: (state):string => state.email,
        password: (state):string => state.password,
        nickname: (state):string => state.nickname,
        signState: (state):boolean => state.signState,
        loginState: (state):boolean => state.loginState
    }
}

export default moduleUser;