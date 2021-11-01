import { Module } from 'vuex';
import { RootState } from './index';
import AxiosService from 'src/service/axios.service';

type breadData = {
    codeNum: number;
    breadname: string;
    kcal: number;
}

export interface breadSet {
    bread: breadData[];
    Loadflag: boolean;
}

const moduleBread: Module<breadSet, RootState> = {
    namespaced: true,
    state: {
        bread: [],
        Loadflag: false,
    },
    mutations: {
        setBread(state, data: breadData) {
            state.bread[data.codeNum].codeNum = data.codeNum;
            state.bread[data.codeNum].breadname = data.breadname;
            state.bread[data.codeNum].kcal = data.kcal;
        },
        setFlag(state, flag: boolean) {
            state.Loadflag = flag;
        }
    },
    actions: {
        async mappingBread({commit}) {
            if(!this.getters['flag']){
                const breadConst: breadSet = await AxiosService.instance.get('/bread');
                for (let i = 0; i < breadConst.bread.length; i++)
                    commit('setBread', breadConst.bread[i]);
                commit('setFlag', breadConst.Loadflag = true);
            }
        },
    },
    getters: {
        breadSet: (state): breadData[] => state.bread,
        //bread: (state) => (codeNum: number) => state.bread.find(bread => bread.codeNum == codeNum)
    }
}

export default moduleBread;