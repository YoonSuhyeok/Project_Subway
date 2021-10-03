<template>
  <q-layout view="hHh lpR fFf">
    <q-page>
      <q-page-container>
        <q-page style="width: 100%; height: 80%; border: 1px solid red">
          <router-view></router-view>
        </q-page>
      </q-page-container>

      <q-footer elevated class="bg-white text-black">
        <q-tabs v-model="tab" class="text-black">
          <q-route-tab
            style="width: 20%"
            name="user"
            icon="person"
            label="회원정보"
            to="/tabs/tab1"
          />
          <q-route-tab
            style="width: 20%"
            name="make"
            icon="layers"
            label="조합만들기"
            to="/tabs/tab2"
          />
          <q-route-tab
            style="width: 20%"
            name="star"
            icon="star"
            label="즐겨찾기"
            to="/tabs/tab3"
          />
          <q-route-tab
            style="width: 20%"
            name="view"
            icon="movie"
            label="조합보기"
            to="/tabs/tab4"
          />
          <q-route-tab
            style="width: 20%"
            name="rank"
            icon="movie"
            label="순위표"
            to="/tabs/tab5"
          />
        </q-tabs>
      </q-footer>
    </q-page>
  </q-layout>
</template>

<style>
.q-tab__label {
  font-size: 10px;
  padding-bottom: 5%;
}
.q-footer {
  width: 100%;
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class TabsLayout extends Vue {
  tab = 'user';
}
</script>
