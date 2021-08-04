<!--회원가입 창-->
<template>
    <div class="cls_totaldisplay">
        <div class="cls_header">
            <ion-toolbar>
                <ion-buttons >
                    <ion-button>
                        <ion-icon ios="chevron-back" md="chevron-back"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>회원 가입</ion-title>
            </ion-toolbar>
        </div>

        <div class="cls_section">
            <ion-text>* 표시는 필수 입력 항목입니다.</ion-text>
            {{ nickname}}
            <ion-input id="NAME" v-model="nickname" placeholder="닉네임 *" />
            <ion-input id="EMAIL" v-model="email" placeholder="아아디(이메일) *" />
            <ion-text style="font-size: 5px; color: #686868;">이메일 주소는 로그인, 비밀번호 찾기에 사용되므로 정확하게 입력해주세요.</ion-text>
            <ion-input id="PWD" v-model="password" placeholder="비밀번호 *" />
            <ion-text style="font-size: 5px; color: #686868;">
                비밀번호는 최소8자 이상의 영문대문자 1개포함, 소문자, 숫자로 구성해 주세요.
                (*특수문자로 시작하는 비밀번호는 입력 불가합니다.)
            </ion-text>
            <ion-input id="PWD_CHECK" placeholder="비밀번호 확인 *" />
        </div>

        <div class="cls_enter">
            <ion-button  @click="submit(nickname, email, password)" expand="block" fill="default" style="color: #FFFFFF;">확인</ion-button>
        </div>
    </div>
</template>

<style>
    ion-toolbar {
        border: 1px inset grey;
    }
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
        border-radius: 6px;
        background: linear-gradient(to right, #00B573, 90%, #1CDE97);
    }
</style>

<script lang="ts">
import { IonToolbar,  IonIcon, IonInput } from '@ionic/vue'
import AxiosService from '@/service/axios.service';
//import bcrypt from 'bcrypt';

export default {
    components: { IonToolbar,  IonIcon, IonInput },
    setup(){
        const email = "1";
        const password = '2';
        const nickname = '3';

        const submit = (nickname: string, email: string, password: string)=> {
            AxiosService.instance.post('/user', {
                email: email,
                //password: bcrypt.hashSync('1234', 10)
                password: password,
                nickname: nickname
            })
            console.log(email, password, nickname);
        }
        return {
            email,
            password,
            nickname,
            submit
        }
    }
}
</script>
