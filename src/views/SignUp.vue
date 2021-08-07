<!--회원가입 창-->
<template>
    <div class="cls_totaldisplay">
        <div class="cls_header">
            <ion-toolbar>
                <ion-buttons>
                    <ion-button @click="back">
                        <ion-icon ios="chevron-back" md="chevron-back" ></ion-icon>
                    </ion-button>
                    <ion-title>회원 가입</ion-title>
                </ion-buttons>
            </ion-toolbar>
        </div>

        <div class="cls_section">
            <ion-text>* 표시는 필수 입력 항목입니다.</ion-text>
            <ion-input id="NAME" v-model="nickname" placeholder="닉네임 *" />
            <ion-input id="EMAIL" type="eamil" v-model="email" placeholder="아아디(이메일) *" />
            <ion-text style="font-size: 5px; color: #686868;">이메일 주소는 로그인, 비밀번호 찾기에 사용되므로 정확하게 입력해주세요.</ion-text>
            <ion-input id="PWD" type="password" v-model="password" placeholder="비밀번호 *" />
            <ion-text style="font-size: 5px; color: #686868;">
                비밀번호는 최소8자 이상의 영문대문자 1개포함, 소문자, 숫자로 구성해 주세요.
                (*특수문자로 시작하는 비밀번호는 입력 불가합니다.)
            </ion-text>
            <ion-input id="PWD_CHECK" type="password" placeholder="비밀번호 확인 *" />
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
        display: block;
        flex-direction: column;
        margin: 5px 25px;
        height: 100%;
    }
    ion-input {
        font-size: 14px;
        height: 10%;
        margin: 25px 0px;
        border: 0;
        border-bottom: 3px solid;
        border-bottom-color: #128D15;
    }
    .cls_enter ion-button {
        margin: 10px 10px;
        border-radius: 6px;
        background: linear-gradient(to right, #00B573, 90%, #1CDE97);
    }
</style>

<script lang="ts">
import { IonToolbar,  IonIcon, IonInput, IonTitle, IonText, IonButtons, IonButton, alertController } from '@ionic/vue'
import AxiosService from '@/service/axios.service';
//import func from 'vue-editor-bridge';
//import bcrypt from 'bcrypt';

export default {
    components: { IonToolbar,  IonIcon, IonInput, IonTitle, IonText, IonButtons, IonButton },
    setup(){
        const email = "";
        const password = '';
        const nickname = '';
        let timer: any;
        let isRunning = false;

        const Timer = (count: number) => {
            let min, sec;
            timer = setInterval(()=>{
                //여기에 시간 표시 및 계산 함수 작성
                min = count/60;
                sec = count%60;

                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                min + ":" + sec;

                if(--count < 0) {
                    clearInterval(timer);
                    isRunning = false;
                }
            }, 1000)
        }

        const TimerControl = () => {
            const leftSec = 60;
            if (isRunning) {
                clearInterval(timer);
            }
            Timer(leftSec)
        }

        const emailAlert = async function() {
            const alert = await alertController
            .create({
                header: '이메일 인증번호 입력',
                message: '인증번호를 입력하세요.',
                inputs: [
                    {
                        name: 'timerContainer',
                        disabled: true,
                        handler: () => {
                            console.log("여기가 input handler");
                        }
                    },
                    {placeholder: '인증번호'}
                ],
                buttons: [
                    {
                        text: '인증',
                        handler: () => {
                            console.log('인증버튼 눌림')
                        }
                    }
                ],
                
            });
            // window.location.href = '/tab/tab1'
            // alert.present의 기능이 뭔지 더 알아볼 필요 있음.
            return alert.present();
        }

        const submit = (nickname: string, email: string, password: string)=> {
            emailAlert()
            AxiosService.instance.post('/user', {
                email: email,
                //password: bcrypt.hashSync('1234', 10)
                password: password,
                nickname: nickname
            })
            console.log(email, password, nickname);

            
        }

        const back = () => {
            window.history.back();
        }

        return {
            email,
            password,
            nickname,
            back,
            emailAlert,
            submit
        }
    }
}
</script>
