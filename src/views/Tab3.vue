<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- {{ bread }} -->
      {{ classicMenu }}
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useStore } from "vuex";
import { computed } from '@vue/runtime-core';

export default  {
  name: 'Tab3',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup(){
    const store = useStore();

    store.dispatch('initData');

    return {
      bread: computed(() => store.getters.getBreadList),
      classicMenu: computed(() => store.getters.getPremiumMenuList),
      freshMenu: computed(() => store.getters.getFreshMenuList),
      premiumMenu: computed(() => store.getters.getPremiumMenuList),
    }
  }
}
</script>