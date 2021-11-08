<template>
  <q-page>
    <q-list v-for="(item, idx) in recipes" :key="idx">
      <recipe-list :recipe="item"></recipe-list>
    </q-list>
  </q-page>
</template>

<style scoped></style>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { useStore } from 'vuex';
import { Recipe } from 'src/store/recipe.store';
import RecipeList from 'components/RecipeListComponent.vue';
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
}
</script>
