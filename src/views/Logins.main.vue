<template>
  <ion-page id="app">
    <ion-header :translucent="true">
      <ion-toolbar style="text-align:center;">
        <ion-title><b>로그인</b></ion-title>
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
      
        <div class="login_button" v-if="loginType === 'mainlogin'">
          <section>
              <ion-button color="success" fill="solid" expand="block" size="large">
                  <img src="/assets/icon/naver.png" class="navericon" width="50">
                  Naver ID로 계속하기
                  </ion-button>
          </section>
          <section>
              <ion-button color="warning" fill="solid" expand="block" size="large" v-model="loginType" v-on:click="otherLoginbtn">다른 계정으로 로그인</ion-button>
          </section>
        </div>
        
        <div class="other_login" v-else-if="loginType === 'otherlogin'">
          <div class="imgbutton">
            <ion-button fill="clear" size="large"><img src="/assets/icon/kakao.png" class="kakao" width="40"></ion-button>
            <ion-button fill="clear" size="large"><img src="/assets/icon/facebook.png" class="facebook" width="40"></ion-button>
            <ion-button fill="clear" size="large"><img src="/assets/icon/google.png" class="google" width="40"></ion-button>
          </div>
          <div class="emailbutton">
            <ion-button size="large" fill="outline" expand="block" color="dark" v-model="loginType" v-on:click="emaiLoginbtn">이메일로 로그인</ion-button>
          </div>
        </div>
        <div class="email_login" v-else-if="loginType === 'emaillogin'">
          <div class="cls_section">
            <ion-input id="NAME" placeholder="이름" />
            <ion-input id="EMAIL" placeholder="이메일 주소" />  
          </div>

          <div class="findIDsection">
            <ion-text color="medium">아이디 / PW를 잊으셨나요?</ion-text>
              <div class="findID">
                <ion-button fill="clear" color="dark"><b>아이디 / PW찾기</b></ion-button>
              </div>
          </div>

          <div class="container">
            <div class="explanation">
              <ion-text color="medium">아직 서브웨이 마스터의 회원이 아니시라면,</ion-text>
            </div>
            <div class="SignupOrAsk">
              <div class="signup">
                <ion-button fill="clear" color="dark" expand="block"><b>회원가입</b></ion-button>
              </div>
              <div class="updown"></div>
              <div class="ask">
                <ion-button fill="clear" color="dark" expand="block"><b>문의하기</b></ion-button>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </ion-content>

    
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonText } from '@ionic/vue';

export default {
  name: 'Logins.main',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonText
  },
  setup () {

    const otherLoginbtn = function () {
      console.log("otherlogin");
      this.loginType = 'otherlogin'
    }

    const emaiLoginbtn = function() {
      console.log("emaillogin");
      this.loginType = 'emaillogin'
    }

    return {
      loginType: 'mainlogin',
      otherLoginbtn,
      emaiLoginbtn
    }
  }
}
</script>

<style scoped>

section {
      margin-top: 1em;
    }

.login_button{
    padding: 20px;
    margin: auto;
    width: 400px;
    display: flex;
    flex-direction: column;
}
 /* img {
        display: block;
        margin: auto;
        padding: 60px;
    } */
.container{
    padding: 50px;
    display: flex;
    flex-direction: column;
}
.SignupOrAsk{
    justify-content: center;
    display: flex;
}
.updown{ 
    margin: 10px;
    border: 1px solid black; 
    width: 0.1px; 
    height: 25px; 
}

.logo{
    padding: 50px;
    display: block;
    margin: auto;
    text-align: center;
    font-size: 30px;
}
.navericon{
    padding-right: 10px;
}
.explanation{
    text-align: center;
}
.findIDsection{
    padding: 30px;
    height: 80px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.emailbutton{
    padding: 30px;
    margin: auto;
    height: 146px;
    width: 400px;
    display: flex;
    flex-direction: column;
}
.imgbutton{
    justify-content: center;
    display: flex;
}
.cls_section{
    margin: auto;
    width: 500px;
    /* display: flex;
    flex-direction: column; */
}
.cls_section ion-input {
    height: 60px;
    font-size: 20px;
    border: 0;
    border-bottom: 1px solid;
    border-bottom-color: #128D15;  
}

</style>