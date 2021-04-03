<!--회원가입 창-->

<template>
    <div class="cls_totaldisplay">
        <div class="cls_header">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        <ion-icon slot="icon-only" ios="chevron-back" md="chevron-back"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>회원가입</ion-title>
            </ion-toolbar>
        </div>

        <div class="cls_section">
            <ion-text>* 표시는 필수 입력 항목입니다.</ion-text>
            <ion-input id="NAME" placeholder="이름 *" />
            <ion-input id="F_NAME" placeholder="성 *" />
            <ion-input id="EMAIL" placeholder="아아디(이메일) *" />
            <ion-input id="PWD" placeholder="비밀번호 *" />
            <ion-input id="PWD_CHECK" placeholder="비밀번호 확인 *" />
            <ion-input id="PHONE" placeholder="휴대폰 번호" />
            <ion-input id="GENDER" placeholder="성별(선택)" />
            <ion-input id="AGE" placeholder="나이(선택)" />
            <ion-input id="ALLERGY" placeholder="알레르기(선택)" />
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
        
    }
</style>

<script>
import { IonToolbar,  IonIcon } from '@ionic/vue'

export default {
    components: { IonToolbar,  IonIcon },
    setup() {
        return{
            
        }
    }
}
</script>
