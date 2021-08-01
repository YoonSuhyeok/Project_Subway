<!--약관 동의 창-->

<template>
    <div class="cls_totaldisplay">
        <div class="cls_header">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        <ion-icon slot="icon-only" ios="chevron-back" md="chevron-back"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title><b>약관동의</b></ion-title>
            </ion-toolbar>
        </div>

        <div class="cls_section">
            <div class="cls_section_item">
                <ion-checkbox />
                <div style="width:80%; display:flex; justify-content:space-between; align-items:center;">
                    <ion-label><b>이용약관 동의 (필수)</b></ion-label>
                    <ion-button style="font-size:13px;"><b><u>상세보기</u></b></ion-button>
                </div>
                
            </div>
            <div class="cls_section_item">
                <ion-checkbox /> 
                <div style="width:80%; display:flex; justify-content:space-between; align-items:cetner;">
                    <ion-label><b>개인정보처리방침 (필수)</b></ion-label>
                    <ion-button style="font-size:13px;"><b><u>상세보기</u></b></ion-button>
                </div>
                
            </div>
            <div class="cls_section_item">
                <ion-checkbox /> 
                <div style="display:flex; flex-direction: column;">
                    <ion-label>SNS광고성 정보 동의 (선택)</ion-label>
                    <ion-text style="font-size:5px;">다양한 이벤트와 주문 정보를 보내 드립니다.</ion-text>
                </div>
            </div>  
            <div class="cls_section_item">
                <ion-checkbox /> 
                <div style="display:flex; flex-direction: column;">
                    <ion-label>광고성 푸시알림 수신 동의 (선택)</ion-label>
                    <ion-text style="font-size:5px">다양한 이벤트와 쿠폰, 할인정보를 보내드립니다.</ion-text>
                </div>
            </div>
        </div>
        <div class="cls_section_all">
            <div class="cls_section_item">
                <ion-checkbox />
                <ion-label><b>약관 전체 동의</b></ion-label>
            </div>
        </div>
        <div class="cls_plaintext">
            <p>이곳은 아무거나 쓸 수 있도록 남겨둔 공간</p>
        </div>
    </div>
</template>

<style>
    .cls_totaldisplay {
        display: flex;
        flex-direction: column;

    }
    ion-toolbar {
        border: 1px inset grey;
    }
    .cls_section {
        display: flex;
        flex-direction: column;
        margin: 5px 10px;
        background: #f8f8f8;
    }
    .cls_section_item {
        width: 95%;
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: flex-start;
        margin: 15px 5px;
    } 
    .cls_section_all {
        display: flex;
        align-content: center;
        justify-content: flex-start;
        margin: 0px 10px;
        background: #f8f8f8;
    }
    ion-checkbox {
        margin: 0px 15px;
        width: 7%; 
        height: 7%;
        --border-radius: 4px;
        --background-checked: #128D15;
        --checkmark-color: #FFC20D;
    }
    .cls_plaintext {
        display: flex;
        height: 100%;
        margin: 10px;
        padding: 5px 10px;
        border: 1px solid red;
    }
</style>

<script>
import { IonText, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel, IonCheckbox } from '@ionic/vue'

export default ({
    components: { IonText, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel, IonCheckbox }
})
</script>
