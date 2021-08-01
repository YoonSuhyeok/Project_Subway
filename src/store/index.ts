import { createStore, StoreOptions } from 'vuex';
import AxiosService from "@/service/axios.service"
import createPersistedState from "vuex-persistedstate";
import { AxiosResponse } from "axios";

export const store = createStore({
  state: {
    breadList: [],
    menuPremiumList: [],
    menuFreshList: [],
    menuClassicList: [],
    vegetableList: [],
    sourceList: [],
    extraList: [],
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
    setBreadList(state, breadList){
      console.log(breadList)
      state.breadList = breadList;
    },
    setMenuPremiumList(state, menuPremiumList){
      state.menuPremiumList = menuPremiumList;
    },
    setMenuFreshList(state, menuFreshList){
      state.menuFreshList = menuFreshList;
    },
    setMenuClassicList(state, menuClassicList){
      state.menuClassicList = menuClassicList;
    },
    setVegetableList(state, vegetableList){
      state.vegetableList = vegetableList;
    },
    setSourceList(state, sourceList){
      state.sourceList = sourceList;
    },
    setExtraList(state, extraList) {
      state.extraList = extraList;
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
      const bread: AxiosResponse = await AxiosService.instance.get('/bread');
      const menuPremium: AxiosResponse = await AxiosService.instance.get('/menu/0'); 
      const menuFresh: AxiosResponse = await AxiosService.instance.get('/menu/1'); 
      const menuClassic: AxiosResponse = await AxiosService.instance.get('/menu/2'); 
      const vegetable: AxiosResponse = await AxiosService.instance.get('/ingredient/0');
      const source: AxiosResponse = await AxiosService.instance.get('/ingredient/2'); 
      const extra: AxiosResponse = await AxiosService.instance.get('/extra'); 
      console.log("빵"+ bread)

      commit('setBreadList', bread.data);
      commit('setMenuPremiumList', menuPremium.data);
      commit('setMenuFreshList', menuFresh.data);
      commit('setMenuClassicList', menuClassic.data);
      commit('setVegetableList', vegetable.data);
      commit('setSourceList', source.data);
      commit('setExtraList', extra.data);
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
    getExtraList: function(state) {
      return state.extraList;
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
      console.log('getSelectTopingList : ' + state.selectTopingList);
      return state.selectTopingList;
    },
    getSelectVegeList: function(state){
      console.log('getSelectVegeList : ' + state.selectVegeList);
      return state.selectVegeList;
    },
    getSelectSourceList: function(state){
      console.log('getSelectSourceList : ' + state.selectSourceList);
      return state.selectSourceList;
    },
  },
  plugins: [createPersistedState()]
});