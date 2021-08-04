<template>
    <div class="cls_totaldisplay">
        <div class="cls_header">
            <ion-toolbar style="text-align:center;">
                <ion-title><b>{{ value }}</b></ion-title>
            </ion-toolbar>
        </div>

        <div class="cls_input">
            <ion-input id="ID" placeholder="아이디(이메일)" />
            <ion-input id="pwd" placeholder="비밀번호" /> 
        </div>
        <div class="cls_radio">
            <div style="display:flex; align-items: center;">
                <ion-checkbox />
                <ion-label><b>아이디 저장</b></ion-label>
            </div>
            <div style="display:flex; align-items: center;">
                <ion-checkbox />
                <ion-label><b>자동 로그인</b></ion-label>
            </div>
        </div>

        <div class="cls_logins">
            <div class="cls_logins_buttons">
                <ion-button expand="block" fill="default">
                    <ion-label style="color: #FFFFFF;"><b>로그인</b></ion-label>
                </ion-button>
                <ion-button href="/signup" expand="block" fill="default">
                    <ion-label style="color: #FFFFFF;"><b>회원가입</b></ion-label>
                </ion-button>
            </div>
            <div id="cls_logins_service">
                <ion-button fill="clear" style="font-size: 10px; color: black;"><b>아이디 찾기</b></ion-button>
                <ion-text>  |   </ion-text>
                <ion-button fill="clear" style="font-size: 10px; color: black;"><b>비밀번호 찾기</b></ion-button>
            </div>
        </div>

        <div class="cls_simplelogins">
            <ion-item style="--background: rgba(250, 255, 235, 0);">
                <ion-icon />
                <ion-label>간편 로그인</ion-label>
            </ion-item>
            <ion-list style="background: rgba(250, 255, 235, 0);">
                <SimpleLogins v-bind="kakao" v-on:click="kakaobtn"></SimpleLogins>
                <SimpleLogins v-bind="naver" v-on:click="naverbtn"></SimpleLogins>
                <SimpleLogins v-bind="google" v-on:click="googlebtn"></SimpleLogins>
            </ion-list>
        </div>
    </div>
</template>

<style>
    ion-checkbox {
        margin: 0px 10px;
        --border-radius: 4px;
        --background-checked: #128D15;
        --checkmark-color: #FFC20D;
    }
    ion-toolbar {
        border: 1px inset grey;
    }
    .cls_logins_buttons ion-button {
        border-radius: 6px;
        background: linear-gradient(to right, #00B573, 90%, #1CDE97);
    }
    .cls_totaldisplay { 
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    .cls_input { 
        padding: 10px 30px 20px 
     }
    .cls_radio {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding: 0px 10px 5px;
    }
    .cls_logins { 
        padding: 0px 25px;
    }
    .cls_simplelogins { 
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 0px 30px;
        background: #FAFFEB;
        height: 100%;
    }
    #ID { 
        border: 0;
        border-bottom: 1px solid #009132; 
    }
    #pwd { 
        border: 0;
        border-bottom: 1px solid #009132;
    }
    #cls_logins_service {
        display: flex; 
        align-items: center; 
        justify-content: center;
        font-size: 10px;
    }
    .icons { 
        margin-right: auto; 
    }
    .lables { 
        margin-right: auto; 
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        
    }

    @media screen and (min-width: 480px) and (max-width:768px) {
        
    }

    @media screen and (min-width: 768px) {
        
    }
</style>

<script>
import { IonToolbar, IonTitle, IonLabel, IonInput, IonItem, IonList, IonButton, IonText, IonCheckbox, IonIcon } from '@ionic/vue';
import SimpleLogins from '../components/SimpleLogins.vue'
import { useStore } from 'vuex';

export default ({
    name: 'LoginComponent', 
    components: { IonToolbar, IonTitle, IonLabel, IonInput, IonItem, IonList, IonButton, IonText, IonCheckbox, IonIcon, SimpleLogins },
    setup() {
        const store = useStore();

        return {
            kakao: {
                idkind:'Kakao Talk',
                clr: '#F9E83B'
            },
            naver: {
                idkind: 'Naver ID',
                clr: '#1ED600'
            },
            google: {
                idkind: 'Google Id',
                clr: '#EB5042'
            },
            facebook: {
                idkind: 'FaceBook',
                clr: '#3C599F'
            },
        }
    },
})
</script>
