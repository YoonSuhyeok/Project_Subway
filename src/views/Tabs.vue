<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab='tab1' href="/tabs/tab1">
          <ion-icon :icon="person" />
          <ion-label>회원정보</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab='tab2' href="/tabs/tab2">
          <ion-icon :icon="layers" />
          <ion-label>조합만들기</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab='tab3' href="/tabs/tab3">
          <ion-icon :icon="star" />
          <ion-label>즐겨찾기</ion-label>
        </ion-tab-button>

        <ion-tab-button tab='tab3' href="/tabs/tab3">
          <ion-icon :icon="search" />
          <ion-label>조합보기</ion-label>
        </ion-tab-button>

        <ion-tab-button tab='tab3' href="/tabs/tab3">
          <ion-icon :icon="cellular" />
          <ion-label>순위표</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { person, layers, star, search, cellular } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      person,
      layers,
      star,
      search,
      cellular
    }
  }
}
</script>