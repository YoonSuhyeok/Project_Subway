<template>
    <ion-page>
        <ion-content :fullscreen='true'>
            <div class="info_page">
                <div class="user_info">
                    <img src="/assets/icon/kakao.png" class="profile_photo">
                    <div class="user_info2">
                        <ion-text style="width:100%; font-size: 200%; padding: 5% 3%;">{{ nickname }}</ion-text>
                        <div style="padding: 30px 0px;">
                            <ion-text style="width:100%; padding: 10% 3%">{{ email }}</ion-text>
                            |
                            <ion-text style="width:100%; padding: 10% 3%">비밀번호 변경</ion-text>
                        </div>
                    </div>
                </div>
                <div class="others">
                </div>
                <div class="other_btn">
                    <div>
                        <ion-button expand="full" color="success" shape="round" strong>앱 환경설정</ion-button>
                        <ion-button expand="full" color="success" shape="round" strong>약관 및 정책</ion-button>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
    .info_page {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 25px;
    }  
    .user_info {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 25%;
        padding: 15px 10px;
        margin: 0 0 15px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px grey;
    }
    .user_info2 {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 10px;
        flex-direction: column;
    }
    .profile_photo {
        width: 15ch;
        height: 15ch;
        margin: 20px;
        border-radius: 70%;
    }
    .others {
        width: 100%;
        height: 50%;
        box-shadow: 0px 4px 4px grey;
        margin: 0 0 15px;
        border-radius: 10px;
    }
    .other_btn {
        text-align: center;
        widows: 100%;
        height: 15%;
    }
</style>

<script>
import { IonPage, IonContent, IonText, IonButton  } from '@ionic/vue';

export default ({
    components: { IonPage, IonContent, IonText, IonButton },
    setup() {
        return {
            nickname: '닉네임',
            email: 'email1234@naver.com'
        }

    },
})
</script>
