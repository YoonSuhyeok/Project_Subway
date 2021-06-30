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
      <ion-button @click="hi"> Click </ion-button>
      {{ bread }}
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useStore } from "vuex";
import { computed } from '@vue/runtime-core';

export default  {
  name: 'Tab3',
  components: { ExploreContainer, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup(){
    const store = useStore();

    store.dispatch('initData');

    return {
      bread: computed(() => store.state.breadList),
    }
  }
}
</script>