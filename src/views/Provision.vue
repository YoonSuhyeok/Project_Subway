<template>
    <div class="cls_totaldisplay">
        <div class="cls_header">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        <ion-icon slot="icon-only" ios="chevron-back" md="chevron-back"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>약관동의</ion-title>
            </ion-toolbar>
        </div>

        <div class="cls_section">
            <div class="cls_section_item">
                <ion-checkbox />
                <div><ion-label>이용약관 동의 (필수)</ion-label></div>
            </div>
            <div class="cls_section_item">
                <ion-checkbox /> 
                <div><ion-label>개인정보처리방침 (필수)</ion-label></div>
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
            
            <div class="cls_section_item">
                <ion-checkbox />
                <ion-label>약관 전체 동의</ion-label>
            </div>
        </div>
    </div>
</template>

<style>
    .cls_totaldisplay {
        display: flex;
        flex-direction: column;

    }
    .cls_header {

    }
    .cls_section {
        display: flex;
        flex-direction: column;
    }
    .cls_section_item {
        display: flex;
        align-content: center;
        justify-content: flex-start;
        margin: 15px 5px;
    } ion-checkbox {
        margin: 0px 15px;
    }
</style>

<script>
import { IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel, IonCheckbox } from '@ionic/vue'

export default ({
    components: { IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel, IonCheckbox }
})
</script>
