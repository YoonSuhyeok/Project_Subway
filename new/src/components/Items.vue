<template>
  <q-card class="item-card">
    <!--<img style="padding: 1vh" src="../assets/img/tmp_item.png" />-->
    <q-card-section class="item-card-section">
      <img class="item-card-img" src="../assets/icons/빵.png" alt="임시 빵" />
      <div>{{ breadname }}</div>
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
}
</style>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  props: { breadname: String, kcal: Number },
})
export default class Item extends Vue {
  breadname?: string;
  kcal?: number;
}
</script>
