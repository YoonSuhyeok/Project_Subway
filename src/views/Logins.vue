<!--로그인 창-->

<template>
    <div class="cls_totaldisplay">
        <div class="cls_header">
            <ion-toolbar style="text-align:center;">
                <ion-title><b>로그인</b></ion-title>
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
                <ion-button expand="block" fill="default">
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
            <ion-item style="--background: rgba(255,255,255,0);">
                <ion-icon :icon="alert" />
                <ion-label>간편 로그인</ion-label>
            </ion-item>
            <ion-list style="background: rgba(255, 255, 255, 0);">
                <ion-button expand="block" fill="outline" size="large" style="color: black; --border-color: #F9E83B;">
                    <ion-icon class="icons" :icon="square"/>
                    <ion-label class="lables"><b>Kakao Talk 으로 계속하기</b></ion-label>
                </ion-button>
                <ion-button expand="block" fill="outline" size="large" style="color: black; --border-color: #1ED600;">
                    <ion-icon class="icons" :icon="square"/>
                    <ion-label class="lables"><b>Naver ID 로 계속하기</b></ion-label>
                </ion-button>
                <ion-button expand="block" fill="outline" size="large" style="color: black; --border-color: #EB5042;">
                    <ion-icon class="icons" :icon="square"/>
                    <ion-label class="lables"><b>Google ID 로 계속하기</b></ion-label>
                </ion-button>
                <ion-button expand="block" fill="outline" size="large" style="color: black; --border-color: #3C599F;">
                    <ion-icon class="icons" :icon="square"/>
                    <ion-label class="lables"><b>FaceBook 으로 계속하기</b></ion-label>
                </ion-button>
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
        background: #FAFFEB;
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
        font-size: 15px
    }

    @media screen and (min-width: 769px) {

    }
</style>

<script>
import { IonToolbar, IonTitle, IonInput, IonItem, IonButton, IonLabel, IonIcon, IonList, IonCheckbox } from '@ionic/vue'
import { square, alert } from 'ionicons/icons'
export default  {
    components: { IonToolbar, IonTitle, IonInput, IonItem, IonButton, IonLabel, IonIcon, IonList,  IonCheckbox}
}
</script>