import { createStore, StoreOptions } from 'vuex';
import AxiosService from "@/service/axios.service"
import createPersistedState from "vuex-persistedstate";
import { AxiosResponse } from "axios";

export const store = createStore({
  state: {
    menuClassicList: [],
    menuFreshList: [],
    menuPremiumList: [],
    breadList: [],
    extraList: [],
    vegetableList: [],
    sourceList: [],
    userId: 'unknown_user',
    accessToken: '',
    refreshToken: '',
    selectMenu: '',
    selectBread: '',
    selectTopingList: [''],
    selectVegeList: [''],
    selectSourceList: [''],    
  },
  mutations: {
    setMenuClassicList(state, menuClassicList){
      state.menuClassicList = menuClassicList;
    },
    setMenuFreshList(state, menuFreshList){
      state.menuFreshList = menuFreshList;
    },
    setMenuPremiumList(state, menuPremiumList){
      state.menuPremiumList = menuPremiumList;
    },
    setBreadList(state, breadList){
      console.log(breadList)
      state.breadList = breadList;
    },
    setExtraList(state, extraList) {
      state.extraList = extraList;
    },
    setVegetableList(state, vegetableList){
      state.vegetableList = vegetableList;
    },
    setSourceList(state, sourceList){
      state.sourceList = sourceList;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
    setAccessToken(state, token){
      state.accessToken = token;
    },
    setRefreshToken(state, token){
      state.refreshToken = token;
    },
    selectMenu(state, data: string){
      state.selectMenu = data;
    },
    selectBread(state, data: string){
      state.selectBread = data;
    },
    selectTopingList(state, data:string){
      if (!state.selectTopingList.includes(data)) {
        state.selectTopingList.push(data);
      } else {
        const currentIndex = state.selectTopingList.indexOf(data);
        state.selectTopingList.splice(currentIndex, 1);
      }
      state.selectTopingList.sort();
    },
    selectVegeList(state, data:string){
      if (!state.selectVegeList.includes(data)) {
        state.selectVegeList.push(data);
      } else {
        const currentIndex = state.selectVegeList.indexOf(data);
        state.selectVegeList.splice(currentIndex, 1);
      }
      state.selectVegeList.sort();
    },
    selectSourceList(state, data:string){
      if (!state.selectSourceList.includes(data)) {
        state.selectSourceList.push(data);
      } else {
        const currentIndex = state.selectSourceList.indexOf(data);
        state.selectSourceList.splice(currentIndex, 1);
      }
      state.selectSourceList.sort();
    },
  },
  actions: {
    async initData({commit}){
      //TODO http 통신
      const menuClassic: AxiosResponse = await AxiosService.instance.get('/menu/2'); 
      const menuFresh: AxiosResponse = await AxiosService.instance.get('/menu/1'); 
      const menuPremium: AxiosResponse = await AxiosService.instance.get('/menu/0'); 
      const bread: AxiosResponse = await AxiosService.instance.get('/bread');
      const extra: AxiosResponse = await AxiosService.instance.get('/extra'); 
      const vegetable: AxiosResponse = await AxiosService.instance.get('/ingredient/0');
      const source: AxiosResponse = await AxiosService.instance.get('/ingredient/2'); 

      commit('setMenuClassicList', menuClassic.data);
      commit('setMenuFreshList', menuFresh.data);
      commit('setMenuPremiumList', menuPremium.data);
      commit('setBreadList', bread.data);
      commit('setExtraList', extra.data);
      commit('setVegetableList', vegetable.data);
      commit('setSourceList', source.data);
    },
    async setToken({commit}, tokens){
      commit('setAccessToken', tokens.access_token);
      commit('setRefreshToken', tokens.refresh_token);
    },
    selectMenu({commit}, data){
      commit('selectMenu', data);
    },
    selectBread({commit}, data){
      commit('selectBread', data);
    },
    selectTopingList({commit}, data){
      commit('selectTopingList', data);
    },
    selectVegeList({commit}, data){
      commit('selectVegeList', data);
    },
    selectSourceList({commit}, data){
      commit('selectSourceList', data);
    },
  },
  getters: {
    getToken: function(state){
      return state.accessToken;
    },
    getClassicMenuList: function(state) {
      return state.menuClassicList;
    },
    getFreshMenuList: function(state) {
      return state.menuFreshList;
    },
    getPremiumMenuList: function(state) {
      return state.menuPremiumList;
    },
    getBreadList: function(state) {
      return state.breadList;
    },
    getExtraList: function(state) {
      return state.extraList;
    },
    getVegetableList: function(state) {
      return state.vegetableList;
    },
    getSourceList: function(state) {
      return state.sourceList;
    },
    getUserId: function(state) {
      return state.userId;
    },
    getSelectMenu: function(state) {
      return state.selectMenu;
    },
    getSelectBread: function(state) {
      return state.selectBread;
    },
    getSelectTopingList: function(state){
      return state.selectTopingList;
    },
    getSelectVegeList: function(state){
      return state.selectVegeList;
    },
    getSelectSourceList: function(state){
      return state.selectSourceList;
    },
  },
  plugins: [createPersistedState()]
});