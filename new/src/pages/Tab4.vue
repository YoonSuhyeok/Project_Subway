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

@Options({
  components: { RecipeList },
})
export default class Tab4 extends Vue {
  $store = useStore();

  recipes: Recipe[] = [];

  created() {
    // 이걸 서버에서 받아오는 API로 수정
    this.recipes = this.$store.getters['moduleUser/recipes'];
  }
}
</script>
