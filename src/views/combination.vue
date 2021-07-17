<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar style="text-align:center;">
        <ion-title><b>최종 조합</b></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">최종 조합</ion-title>
        </ion-toolbar>
      </ion-header>


        <div class="container">
            <div class="item">
            <div class="itemimg">
                <img src="/assets/img/BMT.jpeg" class="BMT" width="250">
            </div>
            <div class="info"><b>이탈리안 비엠티</b>
                <div class="Kcal">410Kcal</div>
            </div>
            
            </div>
            <div class="item">
            <div class="itemimg">
                <img src="/assets/img/recipe_pepperoni.jpeg" class="pepperoni" width="250">
            </div>
            <div class="info"><b>페퍼로니</b>
                <div class="Kcal">363Kcal (100g 기준)</div>
            </div>
            
            </div>
            <div class="item">
            <div class="itemimg">
                <img src="/assets/img/recipe_salami.jpeg" class="BMT" width="250">
            </div>
            <div class="info"><b>살라미</b>
                <div class="Kcal">363Kcal</div>
            </div>
            
            </div>
            <div class="item">
            <div class="itemimg">
                <img src="/assets/img/recipe_ham.jpeg" class="ham" width="250">
            </div>
            <div class="info"><b>햄</b>
                <div class="Kcal">204Kcal</div>
            </div>
            
            </div>
            <div class="item">
            <div class="itemimg">
                <img src="/assets/img/recipe_cheese.jpeg" class="cheese" width="250">
            </div>
            <div class="info"><b>치즈</b>
                <div class="Kcal">180Kcal (124g기준)</div>
            </div>
            
            </div>
            <div class="item">
            <div class="itemimg">
                <img src="/assets/img/sauce_hot_chilli.png" class="hotchilli" width="250">
            </div>
            <div class="info"><b>핫칠리</b>
                <div class="Kcal">22Kcal</div>
            </div>
            
            </div>
            
        </div>

        <div class="cls_logins">
            <div class="cls_logins_buttons">
                <ion-button expand="block" fill="default">
                    <ion-label style="color: #FFFFFF;"><b>수정하기</b></ion-label>
                </ion-button>
                <ion-button expand="block" fill="default">
                    <ion-label style="color: #FFFFFF;"><b>저장하기</b></ion-label>
                </ion-button>
                <ion-button expand="block" fill="default">
                    <ion-label style="color: #FFFFFF;"><b>공유하기</b></ion-label>
                </ion-button>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonIcon, IonLabel,IonButton } from '@ionic/vue';
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
    IonButton,
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
  text-align: center;
  padding-top: 70px;
  flex-grow:1;
}
.Kcal{

  flex-basis:150px;
  
}
.cls_logins_buttons ion-button {
        border-radius: 6px;
        background: linear-gradient(to right, #00B573, 90%, #1CDE97);
}
</style>