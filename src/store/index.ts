import { createStore } from 'vuex';
import AxiosService from "@/service/axios.service"
import { AxiosResponse } from "axios";

export const store = createStore({
  state: {
    breadList: [],
  },
  mutations: {
    setBreadList(state, breadList){
      state.breadList = breadList;
      console.log(state.breadList);
    }
  },
  actions: {
    async initData({commit}){
      //TODO http 통신
      const response: AxiosResponse = await AxiosService.instance.get('/bread');
      commit('setBreadList', response.data);
    }
  },
  getters: {
    getBreadList: function(state) {
      console.log(state.breadList);
      return state.breadList;
    }
  }
});