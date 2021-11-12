<template>
  <q-page>
    <q-card v-if="this.checkLogin() == false">
      <q-card-section>
        <div>로그인이 필요한 서비스입니다.</div>
      </q-card-section>
    </q-card>

    <q-card v-else-if="this.checkLogin() == true && this.recipes.length == 0">
      <q-card-section>
        <div>레시피가 없습니다.</div>
      </q-card-section>
    </q-card>

    <q-list v-else v-for="(item, idx) in recipes" :key="idx">
      <recipe-list :recipe="item"></recipe-list>
    </q-list>
  </q-page>
</template>

<style scoped></style>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { useStore } from 'vuex';
import { Recipe } from '../store/recipe.store';
import RecipeList from '../components/RecipeListComponent.vue';
import AxiosService from '../service/axios.service';

@Options({
  components: { RecipeList },
})
export default class Tab4 extends Vue {
  $store = useStore();

  recipes: Recipe[] = [];

  created() {
    // 이걸 서버에서 받아오는 API로 수정
    void this.loadRecipes();
  }

  async loadRecipes() {
    const id = + this.$store.getters['moduleUser/email'];
    const recipesResonse = await AxiosService.instance.get(
      `/recipe/userall?id=${id}`
    );
    this.recipes = recipesResonse.data;
  }

  checkLogin() {
    const loginCheck = this.$store.getters['moduleUser/loginState'];
    return loginCheck
  }
}
</script>
