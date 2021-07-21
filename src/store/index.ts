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
    selectMenuName: '',
    selectMenuKcal: '',
    selectMenuSrc: '',
    selectBreadName: '',
    selectBreadKcal: '',
    selectBreadSrc: '',
    selectVegeName: '',
    selectVegeKcal: '',
    selectVegeSrc: '',
    selectSourceName: '',
    selectSourceKcal: '',
    selectSourceSrc: '',    
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
    selectMenuName(state, data: string){
      state.selectMenuName = data;
    },
    selectMenuKcal(state, data: string){
      state.selectMenuKcal = data;
    },
    selectMenuSrc(state, data: string){
      state.selectMenuSrc = data;
    },
    selectBreadName(state, data: string){
      state.selectBreadName = data;
    },
    selectBreadKcal(state, data: string){
      state.selectBreadKcal = data;
    },
    selectBreadSrc(state, data: string){
      state.selectBreadSrc = data;
    },
    selectVegeName(state, data: string){
      state.selectVegeName = data;
    },
    selectVegeKcal(state, data: string){
      state.selectVegeKcal = data;
    },
    selectVegeSrc(state, data: string){
      state.selectVegeSrc = data;
    },
    selectSourceName(state, data: string){
      state.selectSourceName = data;
    },
    selectSourceKcal(state, data: string){
      state.selectSourceKcal = data;
    },
    selectSourceSrc(state, data: string){
      state.selectSourceSrc = data;
    }
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
    selectMenuName({commit}, data){
      commit('selectMenuName', data);
    },
    selectMenuKcal({commit}, data){
      commit('selectMenuKcal', data);
    },
    selectMenuSrc({commit}, data){
      commit('selectMenuSrc', data);
    },
    selectBreadName({commit}, data){
      commit('selectBreadName', data);
    },
    selectBreadKcal({commit}, data){
      commit('selectBreadKcal', data);
    },
    selectBreadSrc({commit}, data){
      commit('selectBreadSrc', data);
    },
    selectVegeName({commit}, data){
      commit('selectVegeName', data);
    },
    selectVegeKcal({commit}, data){
      commit('selectVegeKcal', data);
    },
    selectVegeSrc({commit}, data){
      commit('selectVegeSrc', data);
    },
    selectSourceName({commit}, data){
      commit('selectSourceName', data);
    },
    selectSourceKcal({commit}, data){
      commit('selectSourceKcal', data);
    },
    selectSourceSrc({commit}, data){
      commit('selectSourceSrc', data);
    }
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
    getSelectMenuName: function(state) {
      return state.selectMenuName;
    },
    getSelectMenuKcal: function(state) {
      return state.selectMenuKcal;
    },
    getSelectMenuSrc: function(state) {
      return state.selectMenuSrc;
    },
    getSelectBreadName: function(state) {
      return state.selectBreadName;
    },
    getSelectBreadKcal: function(state) {
      return state.selectBreadKcal;
    },
    getSelectBreadSrc: function(state) {
      return state.selectBreadSrc;
    },
    getSelectVegeName: function(state){
      return state.selectVegeName;
    },
    getSelectVegeKcal: function(state){
      return state.selectVegeKcal;
    },
    getSelectVegeSrc: function(state){
      return state.selectVegeSrc;
    },
    getSelectSourceName: function(state){
      return state.selectSourceName;
    },
    getSelectSourceKcal: function(state){
      return state.selectSourceKcal;
    },
    getSelectSourceSrc: function(state){
      return state.selectSourceSrc;
    }
  },
  plugins: [createPersistedState()]
});