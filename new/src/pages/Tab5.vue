<template>
  <q-page class="page">
    <q-card dark bordered class="card" >
      <q-card-section>
        <img src="../assets/img/logo.png" style="width:100%"/>
      </q-card-section>
      <q-card-section>
        <div class="innerCard">{{ temp_Message }}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E4F5DE;
  }
  .card {
    width: 50%;
    max-width: 50%;
  }
  .innerCard {
    text-align: center;
  }
</style>

<script>
import { Vue } from 'vue-class-component';

export default class Tab5 extends Vue {
  temp_Message = "Preparing Section";
}
</script>
