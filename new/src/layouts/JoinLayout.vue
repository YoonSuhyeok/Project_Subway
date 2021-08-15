<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    
    <q-header elevated style="height: 40px; background: white; color:#1F1F1F;">
      <q-toolbar style="margin-left: -10px; margin-top:-5px">
        <q-avatar>
          <img src="../assets/img/keyboard_arrow_left_black_24dp.svg">
        </q-avatar>
        <q-toolbar-title style="margin-left: -10px; font-size: large; font-weight:Bold">{{joinToolbarName}}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    {{ joinToolbarName }}
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';

export default class JoinLayout extends Vue {
  get joinToolbarName(): string{
    return (this.$store.getters['joinToolbarName'] as string);
  }

}
</script>
