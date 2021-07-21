<template>
    <ion-page>
        <ion-header>
            <ion-title class="title">
                <h5><b>최종 조합</b></h5>
            </ion-title>
        </ion-header>
        
        <Combi />

        <p style="margin-bottom:5px;" class="align-center" >반응 표시</p>
        <!-- Default Progressbar with 50 percent -->
        <ion-progress-bar value="0.5" color="success" style="padding:7px; margin-bottom:20px;" class="align-center"></ion-progress-bar>

        <!-- Input with placeholder -->
        <ion-input placeholder="메뉴 닉네임 설정" class="align-center" ></ion-input>

        <ion-button class="align-center" style="margin-top:50px;">
            <ion-label><b>저장하기</b></ion-label>
        </ion-button>

        <ion-button class="align-center" style="margin-top:10px;">
            <ion-label><b>공유하기</b></ion-label>
        </ion-button>

    </ion-page>
</template>

<style scoped>

    ion-button {
        display: block;
        border-radius: 6px;
        --background: linear-gradient(to right, #00B573, 90%, #1CDE97);
        color: #FFFFFF;
    }

    ion-input {
        border-bottom: 1px solid #009132;
    }

    .align-center {
        text-align: center;
        margin:auto;
        width:80%;
    }

    .title {
        text-align: center;
        font-weight: bold;
        color: #009132;
    }
</style>

<script lang="ts">
import Combi from '@/components/Combi.vue'
import { IonProgressBar, IonInput, IonButton, IonLabel } from '@ionic/vue';

export default  {
    name: 'Final',
    components: { Combi, IonProgressBar, IonInput, IonButton, IonLabel },
    setup(){
        return {
        }
    }
}

</script>