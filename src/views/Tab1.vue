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
          <ion-list>
            <ion-item v-for="img in imgs" :key="img.src">
              <ion-thumbnail>
                <ion-img :src="img.src"></ion-img>
              </ion-thumbnail>
              <!-- <ion-label>{{img.name}}</ion-label> -->
            </ion-item>
          </ion-list>
          <ion-card-header>
            <ion-card-subtitle>
              <span class="card-box_user-name">윤수혁</span> 님의
            </ion-card-subtitle>
            <ion-card-title class="bold-title">무야호 샌드</ion-card-title>
          </ion-card-header>
          <ion-card-content class="bold-title">
            3.7K
          </ion-card-content>
        </ion-card>

        <ion-card class="card-box first">
          <ion-list>
            <ion-item v-for="img in imgs" :key="img.src">
              <ion-thumbnail>
                <ion-img :src="img.src"></ion-img>
              </ion-thumbnail>
              <!-- <ion-label>{{img.name}}</ion-label> -->
            </ion-item>
          </ion-list>
          <ion-card-header>
            <ion-card-subtitle>
              <span class="card-box_user-name">윤수혁</span> 님의
            </ion-card-subtitle>
            <ion-card-title class="bold-title">머리가 자라는 미트볼</ion-card-title>
          </ion-card-header>
          <ion-card-content class="bold-title">
            3.7K
          </ion-card-content>
        </ion-card>

        <ion-card class="card-box third">
          <ion-list>
            <ion-item v-for="img in imgs" :key="img.src">
              <ion-thumbnail>
                <ion-img :src="img.src"></ion-img>
              </ion-thumbnail>
              <!-- <ion-label>{{img.name}}</ion-label> -->
            </ion-item>
          </ion-list>
          <ion-card-header>
            <ion-card-subtitle>
              <span class="card-box_user-name">윤수혁</span> 님의
            </ion-card-subtitle>
            <ion-card-title class="bold-title">무야호 샌드</ion-card-title>
          </ion-card-header>
          <ion-card-content class="bold-title">
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
    flex-basis: 30%;
    text-align: center;
  }

  .bold-title {
    color: black;
    font-weight: bold;
  }

  .card-box_user-name { color: green; }

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonImg, IonItem, IonList, IonThumbnail  } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
  IonImg, IonItem, IonList, IonThumbnail },
  setup() {
    const imgs = [{
      'name': 'tImg1',
      'src': '/assets/img/temporary-img.png'
    }];
    return { imgs }
  }
}
</script>