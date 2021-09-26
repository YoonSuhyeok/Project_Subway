<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header
      style="
        height: 40px;
        background: white;
        color: #373636;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        text-align: center;
        padding-top: 8px;
        padding-bottom: 5px;
        font-size: large;
        font-weight: bold;
      "
    >
      아이디 찾기
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Vue } from 'vue-class-component';

export default class IdfindLayout extends Vue {}
</script>
