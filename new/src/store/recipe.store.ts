import { Module } from 'vuex';
import { RootState } from './index';
import AxiosService from 'src/service/axios.service';

export interface Recipe {
    name: string;
    user: string;
    breadId: number;
    menuId: number;
    extraId: string;
    igdId: string;
}

const moduleRecipe: Module<Recipe, RootState> = {
    namespaced: true,
    state: {
        name: '',
        user: '',
        breadId: 0,
        menuId: 0,
        extraId: '',
        igdId: '',
    },
    mutations: {
        setName(state, name: string) {
            state.name = name;
        },
        setUser(state, email: string) {
            state.user = email;
        },
        setBreadId(state, id: number) {
            state.breadId = id;
        },
        setMenuId(state, id: number) {
            state.menuId = id;
        },
        setIgdId(state, extraCode: string) {
            state.igdId = extraCode;
        },
        setExtraId(state, extraCode: string) {
            state.extraId = extraCode;
        },
    },
    actions: {
        setRecipe({commit}, recipe: Recipe) {
            commit('setName', recipe.name);
            commit('setUser', recipe.user);
            commit('setBreadId', recipe.breadId);
            commit('setMenuId', recipe.menuId);
            commit('setIgdId', recipe.igdId);
            commit('setExtraId', recipe.extraId);
        },
        async sendRecipe({commit}, recipe: Recipe) {
            const recipeConst = await AxiosService.instance.post('/recipe', {
                name: this.getters.name,
                User_id: recipe.user,
                Bread_id: recipe.breadId,
                Menu_id: recipe.menuId,
                Ingredient: recipe.igdId,
                Extra: recipe.extraId,
            });
        }
    },
    getters: {
        Recipe: (state) => state,
        Name: (state) => state.name,
        User: (state) => state.user,
        BreadId: (state) => state.breadId,
        MenuId: (state) => state.menuId,
        IgdId: (state) => state.igdId,
        ExtraId: (state) => state.extraId,
    }
}

export default moduleRecipe;