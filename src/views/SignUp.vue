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
                <ion-title>회원 가입</ion-title>
            </ion-toolbar>
        </div>

        <div class="cls_section">
            <ion-text>* 표시는 필수 입력 항목입니다.</ion-text>
            <ion-input id="NAME" placeholder="이름 *" />
            <ion-input id="F_NAME" placeholder="성 *" />
            <ion-input id="EMAIL" placeholder="아아디(이메일) *" />
            <ion-text style="font-size: 5px">이메일 주소는 로그인, 비밀번호 찾기에 사용되므로 정확하게 입력해주세요.</ion-text>
            <ion-input id="PWD" placeholder="비밀번호 *" />
            <ion-text style="font-size: 5px">
                비밀번호는 최소8자 이상의 영문대문자 1개포함, 소문자, 숫자로 구성해 주세요.
                (*특수문자로 시작하는 비밀번호는 입력 불가합니다.)
            </ion-text>
            <ion-input id="PWD_CHECK" placeholder="비밀번호 확인 *" />
            <ion-input id="PHONE" placeholder="휴대폰 번호" />
            <ion-input id="GENDER" placeholder="성별(선택)" />
            <ion-input id="AGE" placeholder="나이(선택)" />
            <ion-input id="ALLERGY" placeholder="알레르기(선택)" />
        </div>

        <div class="cls_enter">
            <ion-button expand="block" fill="default">확인</ion-button>
        </div>
    </div>
</template>

<style>
    .cls_totaldisplay {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
    .cls_header ion-title {
        color: #128D15;
    }
    .cls_section {
        display: flex;
        flex-direction: column;
        margin: 5px 25px;
        height: 100%;
    }
    .cls_section ion-input {
        font-size: 14px;
        border: 0;
        border-bottom: 1px solid;
        border-bottom-color: #128D15;
    }
    .cls_enter ion-button {
        margin: 10px 10px;
        background: #128D15;
        border-radius: 10px;
    }
</style>

<script>
import { IonToolbar,  IonIcon } from '@ionic/vue'

export default {
    components: { IonToolbar,  IonIcon }
}
</script>
