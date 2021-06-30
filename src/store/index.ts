import { createStore } from 'vuex';
import AxiosService from "@/service/axios.service"
import { AxiosResponse } from "axios";

export const store = createStore({
  state: {
    breadList: 'bread sample',
  },
  mutations: {
    setBreadList(state, breadList){
      state.breadList = breadList;
    }
  },
  actions: {
    async initData({commit}){
      //TODO http 통신
      const response: AxiosResponse = await AxiosService.instance.get('/bread');
      console.log(response.data);
      commit('setBreadList', response.data);
    }
  },
  getters: {
  
  }
});