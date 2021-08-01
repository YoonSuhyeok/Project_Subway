<template>
  <ion-page id="Logins.kakao">
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
import { useStore } from 'vuex';
import AxiosService from "@/service/axios.service"

export default {
    name: "Logins.kakao",
    components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText },
    setup () {
        const store = useStore();

        if(window.location.search.substr(6)) {
            const code = window.location.search.substr(6);
            console.log(code);
            const result = AxiosService.instance.post('/auth/kakao', ({"str": "TokenPost"}),{
                headers: {
                    'Authorization': `Bearer ${code}`
                }
            }).then(t => {
                store.dispatch('setToken', t.data);
                window.Kakao.Auth.setAccessToken(t.data.access_token);
                window.Kakao.API.request({
                url: '/v2/user/me',
                success: function(response) {
                    console.log("login Success")
                    window.location.href = '/tabs/tab1'
                },
                fail: function(error) {
                    console.log("login fail")
                    window.location.href = '/'
                }
                });
            })
        }

        return{
            
        }
    }
}
</script>