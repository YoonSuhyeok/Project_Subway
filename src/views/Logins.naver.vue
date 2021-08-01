<template>
  <ion-page id="Logins.main">
    <ion-header :translucent="true">
      <ion-toolbar style="text-align:center;">
        <ion-title><b>{{loginType}}로그인</b></ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content :fullscreen="true">
        <ion-header collapse="condense">
            <ion-toolbar>
                <ion-title size="large">나의 조합</ion-title>
            </ion-toolbar>
        </ion-header>

        <div>
            <div class="logo">
                <img src="/assets/img/logo.png" class="logo">
                <ion-text>서브웨이 마스터와<br><strong>더 맛있고 건강한 레시피</strong></ion-text>
            </div>
        </div>

        <div class="loginbox">
            <ion-text class="logintext">로그인 중 ...</ion-text>
        </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
    .logo {
        padding: 50px;
        display: block;
        margin: auto;
        text-align: center;
        font-size: 30px;
    }
    .loginbox {
        text-align: center;
    }
    .logintext {
        margin: auto;
        padding: auto;
        text-align: center;
        font-size: 30px;
    }
</style>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/vue';

export default {
    components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText },
    setup () {
        return{
            
        }
    }
}
</script>