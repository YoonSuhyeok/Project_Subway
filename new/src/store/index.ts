import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'

// import example from './module-example'
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export interface RootState {
  jocinToolbarName: string;
}

import moduleUser from './user.store'
import moduleBread from './bread.store'
import moduleRecipe from './recipe.store'
import createPersistedState from 'vuex-persistedstate';

export default store(function (/* { ssrContext } */) {
  const Store = createStore<RootState>({
    modules: {
      moduleUser,
      moduleBread,
      moduleRecipe,
    },
    state:{
      jocinToolbarName: '약관동의'
    },
    mutations:{
      setToolbarName(state, name: string){
        state.jocinToolbarName = name;
      }
    },
    actions:{
      setJoinToolbarName({commit}, toolbarName: string){
        commit('setToolbarName', toolbarName);
      }
    },
    getters: {
      joinToolbarName: (state) => state.jocinToolbarName
    },
    plugins: [createPersistedState()],
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store;
})

export function useStore() {
  return vuexUseStore(storeKey)
}