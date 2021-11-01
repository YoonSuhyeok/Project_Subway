<template>
  <q-card class="item-card">
    <!--<img style="padding: 1vh" src="../assets/img/tmp_item.png" />-->
    <q-card-section class="item-card-section">
      <img class="item-card-img" :src='image' alt="임시 빵" />
      <div>{{ name }}</div>
      <div>{{ kcal }} Kcal</div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.q-pa-md {
  padding: 0;
  margin: auto;
}

.item-card {
  border-radius: 25%;
  width: 80px;
  height: 85px;
  margin: 5px;
}

.item-card-section {
  padding: 3px;
  font-size: 1vh;
  font-weight: bold;
}

.item-card-img {
  width: 60px;
  height: 40px;
}
</style>

<script lang="ts">
  import { Vue, Options } from 'vue-class-component';

  @Options({
    props: { id: Number, name: String, kcal: Number, category: String },
  })
  export default class Item extends Vue {
    id!: number;
    name!: string;
    kcal!: number;
    image!: string;
    category !: string;

    setImage(category: string, id: number) {
      this.image = `http://www.makesand.shop/${category}/img/${id}`;
    }
    
    created() {
      this.setImage(this.category, this.id);
    }
  }
</script>
