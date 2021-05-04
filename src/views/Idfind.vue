<!--아이디 찾기 창-->

<template>
<ion-app>
<div class="cls_totaldisplay">
    <div class="cls_header">
        <ion-toolbar>
            <ion-title><b>ID 찾기</b></ion-title>
        </ion-toolbar>
    </div>
    <div>
        <ion-toolbar>
            <ion-segment value="idfind">
                <ion-segment-button value="idfind" style="--color-checked:#128D15;">
                    <ion-label>ID 찾기</ion-label>
                </ion-segment-button>
                <ion-segment-button value="pwfind" style="--color-checked:#128D15;">
                    <ion-label>PW 찾기</ion-label>
                </ion-segment-button>
            </ion-segment>
        </ion-toolbar>

        <div class="cls_segmentview">
            <div class="cls_input">
                <ion-input id="NAME" placeholder="이름" />
                <ion-input id="PHONE" placeholder="휴대폰 번호" />
            </div>
            <ion-button expand="block">아이디 찾기</ion-button>
            <ion-text>
                - 회원님의 가입 시 입력한 이름과 휴대폰번호로 아이디 정보를
                찾을 수 있습니다<br><br>

                -네이버, 카카오톡, 삼성 앱카드, 애플아이디로 가입하신 회원님은 각해당
                서비스를 통해 아이디/비밀번호를 찾아 주시기 바랍니다.
            </ion-text>
        </div>
    </div>
</div>
</ion-app>
</template>

<style>
    .cls_totaldisplay {
        width: 100vw;
        height: 100vh;
    }
    .cls_segmentview {
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
        width: 100%;
        height: 50%;
        border: 1px solid red;
    }
    .cls_input {
        margin: 5px 15px;
    }
    ion-input {
        border: 0;
        border-bottom: 1px solid #128D15;
    }
    ion-text {
        margin: 15px;
        font-size: 14px;
    }
    ion-button {
        border-radius: 6px;
        --background: linear-gradient(to right, #00B573, 90%, #1CDE97);
    }

</style>

<script>
import { IonToolbar, IonTitle } from '@ionic/vue'

export default {
    components: { IonToolbar, IonTitle }
}
</script>