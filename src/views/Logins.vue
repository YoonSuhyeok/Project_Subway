<!--로그인 창-->
<template>
    <ion-toolbar style="text-align:center;">
        <ion-title id="titles">로그인</ion-title>
    </ion-toolbar>

    <ion-item>
        <ion-input id="ID" placeholder="아이디(이메일)" />
    </ion-item>
    <ion-item>
        <ion-input id="pwd" placeholder="비밀번호" /> 
    </ion-item>

    <ion-item style="text-align: center;">
        <ion-checkbox />
        <ion-label>아이디 저장</ion-label>
        <ion-checkbox />
        <ion-label>자동 로그인</ion-label>
    </ion-item>

    <ion-button expand="block">로그인</ion-button>
    <ion-button expand="block">회원가입</ion-button>

    <div style="text-align:center">
        <ion-button fill="clear">아이디 찾기</ion-button>
        <ion-text>  |   </ion-text>
        <ion-button fill="clear">비밀번호 찾기</ion-button>
    </div>
    <ion-item>
        <ion-icon :icon="alert" />
        <ion-label>간편 로그인</ion-label>
    </ion-item>
    <ion-list>
        <ion-button class="buttons" expand="block" fill="outline" size="large">
            <ion-icon class="icons" :icon="square"/>
            <ion-label class="lables">Kakao Talk 으로 계속하기</ion-label>
        </ion-button>
        <ion-button class="buttons" expand="block" fill="outline" size="large">
            <ion-icon class="icons" :icon="square"/>
            <ion-label class="lables">Naver ID 로 계속하기</ion-label>
        </ion-button>
        <ion-button class="buttons" expand="block" fill="outline" size="large">
            <ion-icon class="icons" :icon="square"/>
            <ion-label class="lables">Google ID 로 계속하기</ion-label>
        </ion-button>
        <ion-button class="buttons" expand="block" fill="outline" size="large">
            <ion-icon class="icons" :icon="square"/>
            <ion-label class="lables">FaceBook 으로 계속하기</ion-label>
        </ion-button>
    </ion-list>
</template>

<style>
    #ID { border:0; border-bottom: 1px solid; }
    #pwd { border:0; border-bottom: 1px solid; }
    .buttons { display: flex; align-items: center; justify-content: center;}
    .icons { margin-right: auto;}
    .lables { margin-right: auto;}
</style>

<script>
import { IonToolbar, IonTitle, IonInput, IonItem, IonButton, IonLabel, IonIcon, IonList, IonCheckbox } from '@ionic/vue'
import { square, alert } from 'ionicons/icons';
export default  {
    components: { IonToolbar, IonTitle, IonInput, IonItem, IonButton, IonLabel, IonIcon, IonList,  IonCheckbox},
    setup(){
        return{
            square,
            alert
        }
    }
}
</script>