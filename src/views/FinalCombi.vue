<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="title">
                    <h5><b>최종 조합</b></h5>
                </ion-title>
            </ion-toolbar>
        </ion-header>
        

    <ion-content class="ion-padding">

      <ion-infinite-scroll
        threshold="100px" 
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        
        <Combi :combi="{ type: 0, name: menu.name , kcal: menu.kcal, src: menu.src }" />
        <Combi :combi="{ type: 1, name: bread.name , kcal: bread.kcal, src: bread.src }" />
        <Combi :combi="{ type: 2, name: vegetable.name , kcal: vegetable.kcal, src: vegetable.src }" />
        <Combi :combi="{ type: 3, name: source.name , kcal: source.kcal, src: source.src }" />

        <h3 style="text-align:center; margin: 30px;" :combi-kcal="menu.kcal + bread.kcal + vegetable.kcal + source.kcal"><b>
            총 합계 {{ menu.kcal + bread.kcal + vegetable.kcal + source.kcal }}Kcal
        </b></h3>
        
        <p style="margin-bottom:5px;" class="align-center" >반응 표시</p>
        
        <ion-progress-bar value="0.5" color="success" style="padding:7px; margin-bottom:20px;" class="align-center"></ion-progress-bar>


        <ion-input placeholder="메뉴 닉네임 설정" class="align-center"></ion-input>

        <ion-button @click="presentAlert" class="align-center" style="margin-top:50px;">
            <ion-label><b>저장하기</b></ion-label>
        </ion-button>

        <ion-button class="align-center" style="margin-top:10px;">
            <ion-label><b>공유하기</b></ion-label>
        </ion-button>

        <!-- <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data..."> -->
        <ion-infinite-scroll-content
            loading-spinner="none">
        </ion-infinite-scroll-content>

      </ion-infinite-scroll>
    </ion-content>

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

<!--
<style lang="scss">
    .alertWindow {
        text-align: center;
    }

    .alertCancelBtn {
        background-color: darkgrey;
        color: gray;
    }

    .alertSaveBtn {
        background-color: darkgrey;
        color: gray;
    }
</style>
-->

<style>
    .alertWindow {
        height: 500px;
    }

    .alertCancelBtn {
        --background: pink;
        --background-activated: red;
        --height: 10px;
    }

    .alertSaveBtn {
        --background: pink;
    }
</style>

<script lang="ts">
import Combi from '@/components/Combi.vue'
import { IonProgressBar, IonInput, IonButton, IonLabel, IonInfiniteScroll, alertController } from '@ionic/vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default  {
    name: 'Final',
    components: { Combi, IonProgressBar, IonInput, IonButton, IonLabel, IonInfiniteScroll },
    methods: {
        async presentAlert() {
            const alert = await alertController
                .create({
                    cssClass: 'alertWindow',
                    header: 'SUBWAY MESSAGE',
                    subHeader: '이대로 완성할까요?',
                    // message: 'This is an alert message.',
                    buttons: [
                        {
                            text: '수정할래요!',
                            role: 'cancel',
                            cssClass: 'alertCancelBtn',
                            handler: () => {
                                console.log('Confirm Cancel')
                                window.location.href='/tabs/tab2';
                            },
                        },
                        {
                            text: '좋아요!',
                            role: 'save',
                            cssClass: 'alertSaveBtn',
                            handler: () => {
                                console.log('Confirm Save')
                                window.location.href='/my';
                            },
                        },
                    ],
                });
            await alert.present();

            const { role } = await alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        }
    },
    setup() {
        const store = useStore();
        return { 
            menu: computed(() => store.getters.getSelectMenu),
            bread: computed(() => store.getters.getSelectBread),
            vegetable: computed(() => store.getters.getSelectVege),
            source: computed(() => store.getters.getSelectSource),
        };
    }
}

</script>