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
    userId: 'unknown_user',
    accessToken: '',
    refreshToken: '',
    selectMenu: '',
    selectBread: '',
    selectVege: '',
    selectSource: '',    
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
    selectVege(state, data: string){
      state.selectVege = data;
    },
    selectSource(state, data: string){
      state.selectSource = data;
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
      console.log("빵"+ bread)

      commit('setBreadList', bread.data);
      commit('setMenuPremiumList', menuPremium.data);
      commit('setMenuFreshList', menuFresh.data);
      commit('setMenuClassicList', menuClassic.data);
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
    selectVege({commit}, data){
      commit('selectVege', data);
    },
    selectSource({commit}, data){
      commit('selectSource', data);
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
    getUserId: function(state) {
      return state.userId;
    },
    getSelectMenu: function(state) {
      return state.selectMenu;
    },
    getSelectBread: function(state) {
      return state.selectBread;
    },
    getSelectVege: function(state){
      return state.selectVege;
    },
    getSelectSource: function(state){
      return state.selectSource;
    },
  },
  plugins: [createPersistedState()]
});