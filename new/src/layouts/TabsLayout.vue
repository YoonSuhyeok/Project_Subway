<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-white text-black">
      <q-tabs v-model="tab" class="text-black">
        <q-tab
          style="width: 20%"
          name="person"
          icon="person"
          label="회원정보"
        />
        <q-tab
          style="width: 20%"
          name="layers"
          icon="layers"
          label="회원정보"
        />
        <q-tab style="width: 20%" name="star" icon="star" label="즐겨찾기" />
        <q-tab style="width: 20%" name="movies" icon="movie" label="조합보기" />
        <q-tab style="width: 20%" name="movies" icon="movie" label="순위표" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<style>
.q-tab__label {
  font-size: 10px;
  padding-bottom: 5%;
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class TabsLayout extends Vue {}
</script>
