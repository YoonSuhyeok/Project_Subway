<template>
  <div>
    <q-card>
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <img
              class="item-card-img"
              :src="image"
              style="width: 100px; height: 40px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ menuName }}</q-item-label>
          </q-item-section>
        </template>
        <q-card>
          <q-card-section>
            <q-item-section>
              <p>Base Menu : {{ baseMenu }}</p>
              <p>Base Bread : {{ baseBread }}</p>
              <p>Adding Extra : {{ baseExtra }}</p>
              <p>Adding Ingredient : {{ baseIgd }}</p>
            </q-item-section>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Recipe } from 'src/store/recipe.store';
import { useStore } from 'vuex';
import AxiosService from 'src/service/axios.service';

@Options({
  props: { recipe: Object },
})
export default class RecipeList extends Vue {
  $store = useStore();

  image!: string;
  imagecode!: number;
  menuName!: string;
  recipe!: Recipe;

  baseMenu = '';
  baseBread = '';
  baseExtra = '';
  baseIgd = '';

  setListImage(id: number) {
    this.image = `http://www.makesand.shop/menu/img/${id}`;
  }

  async setRecipe(recipe: Recipe) {
    this.imagecode = recipe.menuId;
    this.menuName = recipe.name;
    // Menu
    const menuResponse = await AxiosService.instance.get(
      `/menu/${recipe.menuId}`
    );
    this.baseMenu = menuResponse.data['Menu_name'];
    // Bread
    const breadResponse = await AxiosService.instance.get(
      `/bread/${recipe.breadId}`
    );
    this.baseBread = breadResponse.data['Bread_name'];
    // Extra
    for (let i = 0; i < recipe.extraId.length; i++) {
      let id: string = recipe.extraId.charAt(i);
      if (id === '1') {
        const extraResponse = await AxiosService.instance.get(`extra/${id}`);
        let temp: string = extraResponse.data['Extra_name'];
        this.baseExtra = this.baseExtra + temp + ' ';
      }
    }
    // IGD
    for (let j = 0; j < recipe.igdId.length; j++) {
      let id: string = recipe.igdId.charAt(j);
      if (j < 9) {
        if (id === '1') {
          const igdResponse = await AxiosService.instance.get(
            `vegetable/${id}`
          );
          let temp: string = igdResponse.data['Ingredient_name'];
          this.baseIgd = this.baseIgd + temp + ' ';
        }
      } else if (j >= 9 && j < 12) {
        if (id === '1') {
          const igdResponse = await AxiosService.instance.get(`cheeze/${id}`);
          let temp: string = igdResponse.data['Cheeze_name'];
          this.baseIgd = this.baseIgd + temp + ' ';
        }
      } else {
        if (id === '1') {
          const igdResponse = await AxiosService.instance.get(`source/${id}`);
          let temp: string = igdResponse.data['soruce_name'];
          this.baseIgd = this.baseIgd + temp + ' ';
        }
      }
    }
  }

  created() {
    this.setRecipe(this.recipe).catch((err) => alert('error'));
    this.setListImage(this.imagecode);
  }
}
</script>
