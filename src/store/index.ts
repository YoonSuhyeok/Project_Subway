import { createStore } from 'vuex';
import AxiosService from "@/service/axios.service"
import { AxiosResponse } from "axios";

export const store = createStore({
  state: {
    breadList: [],
    menuPremiumList: [],
    menuFreshList: [],
    menuClassicList: [],
    vegetableList: [],
    sourceList: [],
    userId: 'unknown_user',
    access_token: '이거맞음?',
    refresh_toekn: ''
  },
  mutations: {
    setBreadList(state, breadList){
      state.breadList = breadList;
      console.log(state.breadList);
    },
    setMenuPremiumList(state, menuPremiumList){
      state.menuPremiumList = menuPremiumList;
      console.log(state.menuPremiumList);
    },
    setMenuFreshList(state, menuFreshList){
      state.menuFreshList = menuFreshList;
      console.log(state.menuFreshList);
    },
    setMenuClassicList(state, menuClassicList){
      state.menuClassicList = menuClassicList;
      console.log(state.menuClassicList);
    },
    setVegetableList(state, vegetableList){
      state.vegetableList = vegetableList;
      console.log(state.vegetableList);
    },
    setSourceList(state, sourceList){
      state.sourceList = sourceList;
      console.log(state.sourceList);
    },
    setUserId(state, userId) {
      state.userId = userId;
      console.log(state.userId);
    },
    setAccessToken(state, token){
      state.access_token = token;
    },
    setRefreshToken(state, token){
      console.log(token);
      state.refresh_toekn = token;
    }
  },
  actions: {
    async initData({commit}){
      //TODO http 통신
      const responseBread: AxiosResponse = await AxiosService.instance.get('/bread');
      const responseMenuPremium: AxiosResponse = await AxiosService.instance.get('/menu/0'); 
      const responseMenuFresh: AxiosResponse = await AxiosService.instance.get('/menu/1'); 
      const responseMenuClassic: AxiosResponse = await AxiosService.instance.get('/menu/2'); 
      const responseVegetable: AxiosResponse = await AxiosService.instance.get('/ingredient/0');
      const responseSource: AxiosResponse = await AxiosService.instance.get('/ingredient/2'); 

      
      commit('setBreadList', responseBread.data);
      commit('setMenuPremiumList', responseMenuPremium.data);
      commit('setMenuFreshList', responseMenuFresh.data);
      commit('setMenuClassicList', responseMenuClassic.data);
      commit('setVegetableList', responseVegetable.data);
      commit('setSourceList', responseSource.data);
    },
    async setToken({commit}, tokens){
      console.log(tokens)
      commit('setAccessToken', tokens.access_token);
      commit('setRefreshToken', tokens.refresh_token);
    }
  },
  getters: {
    getToken: function(state){
      return state.access_token;
    },
    getBreadList: function(state) {
      console.log(state.breadList);
      return state.breadList;
    },
    getPremiumMenuList: function(state) {
      console.log(state.menuPremiumList);
      return state.menuPremiumList;
    },
    getFreshMenuList: function(state) {
      console.log(state.menuFreshList);
      return state.menuFreshList;
    },
    getVegetableList: function(state) {
      return state.vegetableList;
    },
    getSourceList: function(state) {
      return state.sourceList;
    },
    getUserId: function(state) {
      return state.userId;
    }
  }
});