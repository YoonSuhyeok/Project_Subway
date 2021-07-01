<template>
    <div id="container">
        <ion-card class="menu-box">
            <ion-card-header class="menu-box-header">
                <img :src="info.src" :alt="info.name" />
                <ion-card-title class="menu-name">{{ info.name }}</ion-card-title>
                <ion-card-subtitle class="menu-kcal">{{ info.kcal }}Kcal</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
    </div>
</template>

<style scoped>

    @charset "utf-8";

    @font-face {
        font-family: 'NanumGothicExtraBold';
        src: url(../../public/assets/font/NanumGothicExtraBold.ttf);
    }

    .menu-name, .menu-kcal {
        font-weight: bold;
        color: black;
        font-family: NanumGothicExtraBold;
    }

    @media screen and (max-width: 480px) {
        .menu-box {
            width: 130px;
            height: 130px;
        }

        .menu-name, .menu-kcal {
            font-size: 9px;
        }
  }

    @media screen and (min-width: 480px) and (max-width:768px) {
        .menu-box {
            width: 130px;
            height: 130px;
        }

        .menu-name, .menu-kcal {
            font-size: 10px;
        }
  }

    @media screen and (min-width: 768px) {
        .menu-box {
            width: 200px;
            height: 200px;
        }

        .menu-name, .menu-kcal {
            font-size: 15px;
        }
  }

</style>

<script lang="ts">
    import { IonCard } from '@ionic/vue';

    export default  {
        props: ["info"],
        components: { IonCard },
    }
</script>