<!--로그인 창-->

<template>
    <div class="cls_totaldisplay">
        <div class="cls_header">
            <ion-toolbar style="text-align:center;">
                <ion-title id="titles">로그인</ion-title>
            </ion-toolbar>
        </div>

        <div class="cls_input">
            <ion-input id="ID" placeholder="아이디(이메일)" />
            <ion-input id="pwd" placeholder="비밀번호" /> 
        </div>
        <div class="cls_radio">
            <div style="display:flex; align-items: center;">
                <ion-checkbox style="margin: 0px 10px;"/>
                <ion-label>아이디 저장</ion-label>
            </div>
            <div style="display:flex; align-items: center;">
                <ion-checkbox style="margin: 0px 10px"/>
                <ion-label>자동 로그인</ion-label>
            </div>
        </div>

        <div class="cls_logins">
            <div id="cls_logins_buttons">
                <ion-button expand="block">로그인</ion-button>
                <ion-button expand="block">회원가입</ion-button>
            </div>
            <div id="cls_logins_service">
                <ion-button fill="clear" style="font-size: 10px">아이디 찾기</ion-button>
                <ion-text>  |   </ion-text>
                <ion-button fill="clear" style="font-size: 10px">비밀번호 찾기</ion-button>
            </div>
        </div>

        <div class="cls_simplelogins">
            <ion-item>
                <ion-icon :icon="alert" />
                <ion-label>간편 로그인</ion-label>
            </ion-item>
            <ion-list>
                <ion-button expand="block" fill="outline" size="large">
                    <ion-icon class="icons" :icon="square"/>
                    <ion-label class="lables">Kakao Talk 으로 계속하기</ion-label>
                </ion-button>
                <ion-button expand="block" fill="outline" size="large">
                    <ion-icon class="icons" :icon="square"/>
                    <ion-label class="lables">Naver ID 로 계속하기</ion-label>
                </ion-button>
                <ion-button expand="block" fill="outline" size="large">
                    <ion-icon class="icons" :icon="square"/>
                    <ion-label class="lables">Google ID 로 계속하기</ion-label>
                </ion-button>
                <ion-button expand="block" fill="outline" size="large">
                    <ion-icon class="icons" :icon="square"/>
                    <ion-label class="lables">FaceBook 으로 계속하기</ion-label>
                </ion-button>
            </ion-list>
        </div>
    </div>
</template>

<style>
    .cls_totaldisplay { 
        display: flex; 
        flex-direction: column;
        width: 100%
    }
    .cls_input { 
        padding: 10px 30px 20px 
     }
    .cls_radio {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding: 0px 10px 5px
    }
    .cls_logins { 
        padding: 0px 25px;
    }
    .cls_simplelogins { 
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 0px 30px;
    }
    #ID { 
        border:0; 
        border-bottom: 1px solid; 
    }
    #pwd { 
        border:0; 
        border-bottom: 1px solid; 
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
        font-size: 15px
    }

    @media screen and (min-width: 769px) {

    }
</style>

<script>
import { IonToolbar, IonTitle, IonInput, IonItem, IonButton, IonLabel, IonIcon, IonList, IonCheckbox } from '@ionic/vue'
import { square, alert } from 'ionicons/icons'
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