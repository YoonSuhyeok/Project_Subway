<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer> </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { Vue, Options } from 'vue-class-component';

@Options({
  components: { EssentialLink },
})
export default class MainLayout extends Vue {}
</script>
