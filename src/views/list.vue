<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar style="text-align:center;">
        <ion-title><b>나의 조합</b></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">나의 조합</ion-title>
        </ion-toolbar>
      </ion-header>


      <div class="container">
        <div class="item">
          <div class="itemimg">
            <img src="/assets/img/BMT.jpeg" class="BMT" width="200">
          </div>
          <div class="info"><b>이탈리안 비엠티</b>
            <ul>
              <li>페퍼로니</li>
              <li>살라미</li>
              <li>햄</li>
              <li>치즈</li>
            </ul>
          </div>
          <div class="Kcal">410Kcal</div>
        </div>
        <div class="item"> 
          <div class="itemimg">
            <img src="/assets/img/BLT.jpeg" class="BLT" width="200">
          </div>
          <div class="info"><b>비엘티</b>
            <ul>
              <li>베이컨</li>
              <li>치즈</li>
            </ul>
          </div>
          <div class="Kcal">380Kcal</div>
        </div>
        <div class="item">
          <div class="itemimg">
            <img src="/assets/img/Egg.jpeg" class="Egg" width="200">
          </div>
          <div class="info"><b>에그마요</b>
            <ul>
              <li>에그마요</li>
              <li>치즈</li>
            </ul>
          </div>
          <div class="Kcal">480Kcal</div>
        </div>
        <div class="item"> 
          <div class="itemimg">
            <img src="/assets/img/ham.jpeg" class="Ham" width="200">
          </div>
          <div class="info"><b>햄</b>
            <ul>
              <li>햄</li>
              <li>치즈</li>
            </ul>
          </div>
          <div class="Kcal">290Kcal</div>
        
        </div>
      </div>
    </ion-content>

    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="person" />
          <ion-label>회원정보</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="layers" />
          <ion-label>조합만들기</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="star" />
          <ion-label>즐겨찾기</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="search" />
          <ion-label>조합보기</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="cellular" />
          <ion-label>순위표</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonIcon, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import { person, layers, star, search, cellular } from 'ionicons/icons';

export default defineComponent({
  name: 'List',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonTabBar,
    IonIcon,
    IonLabel
  }
});
</script>

<style scoped>
.container{
            height:800px;
            display:flex;
            flex-direction: column;
        }
.item{
  background-color: white;
  display:flex;
  
  /* flex-grow:1; */
}
.itemimg{ 
  flex-shrink:0;
  flex-grow:1;
}
.info{
  flex-basis:150px;
}
.Kcal{
  padding: 60px;
  flex-basis:150px;
  flex-grow:1;
}
.cls_logins_buttons ion-button {
        border-radius: 6px;
        background: linear-gradient(to right, #00B573, 90%, #1CDE97);
    }

</style>