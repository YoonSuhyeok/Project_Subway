<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-header style="height: 5vmax; background: white; color: #373636; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
     padding-top: 8px; padding-bottom: 5px; font-size: 2.4vmax; font-weight: bold;">
      <q-toolbar style="margin-left: -10px; margin-top:-1.7vh">
        <q-avatar style="margin-top:-0.1vh">
          <img src="../assets/img/keyboard_arrow_left_black_24dp.svg">
        </q-avatar>
        <q-toolbar-title style="margin-left: -10px; font-size: 2.4vmax; font-weight:Bold">{{joinToolbarName}}</q-toolbar-title>
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