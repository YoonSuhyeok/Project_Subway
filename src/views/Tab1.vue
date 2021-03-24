<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
        <ion-title>hello</ion-title>
      </ion-toolbar> -->
    <h1 class="title">나만의 조합식</h1>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
    <div class="card-container">
      <ion-card class="card-box second">
    <ion-card-header>
      <ion-card-subtitle>윤수혁 님의</ion-card-subtitle>
      <ion-card-title>무야호 샌드</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      3.7K
    </ion-card-content>
  </ion-card>

  <ion-card class="card-box first">
    <ion-card-header>
      <ion-card-subtitle>윤수혁 님의</ion-card-subtitle>
      <ion-card-title>머리가 자라는 미트볼</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      3.7K
    </ion-card-content>
  </ion-card>

  <ion-card class="card-box third">
    <ion-card-header>
      <ion-card-subtitle>윤수혁님의</ion-card-subtitle>
      <ion-card-title>무야호 샌드</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      3.7K
    </ion-card-content>
  </ion-card>
  </div>

      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<style>
  .title {
    text-align: center;
  }

  .card-container {
    display: flex;
  }

  .card-box {
    justify-content: space-between;
    align-items: center;
    flex-basis: 20%;
  }

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>