<template>
        <ion-card class="card-box card-1st" v-if="rank.rank == 1">
            <img :src="rank.src" class="menu-img first">
            <ion-card-header>
                <ion-card-subtitle class="user-name">
                    <span style="color:#08A965;">{{rank.user}}</span>님의
                </ion-card-subtitle>
                <ion-card-title class="menu-info menu-title">{{rank.title}}</ion-card-title>
                <ion-card-subtitle class="menu-info menu-kcal">{{rank.kcal}}K</ion-card-subtitle>
            </ion-card-header>
        </ion-card>

        <ion-card class="card-box card-not-1st" v-else>
            <img :src="rank.src" class="menu-img notFirst">
            <ion-card-header>
                <ion-card-subtitle class="user-name">
                    <span style="color:#08A965;">{{rank.user}}</span>님의
                </ion-card-subtitle>
                <ion-card-title class="menu-info menu-title">{{rank.title}}</ion-card-title>
                <ion-card-subtitle class="menu-info menu-kcal">{{rank.kcal}}K</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
</template>

<style scoped>

    ion-card-header {
        padding: 0;
        margin: 0;
    }

    .menu-img { padding:7px; }
    .notFirst { height: 46px; }
    .first { height: 59px; }

    .card-box {
        border-radius: 15px;
        box-shadow: 2px 6px 5px 0px lightgrey;
        margin: 5px;
    }

    @media screen and (max-width: 360px) {
        .menu-kcal { margin-top: 7px; }

        .card-1st {
            height:130px; 
            width:100px;
        }

        .card-not-1st {
            height:107px; 
            width:77px; 
            margin-top:27px;
        }
    }

    @media screen and (min-width: 360px) {
        .menu-kcal { margin-top: 15px; }

        .card-1st {
            height:150px; 
            width:120px;
        }

        .card-not-1st {
            height:127px; 
            width:97px; 
            margin-top:27px;
        }
    }

    .user-name {
        font-size: 1px;
    }

    .menu-info {
        font-size: 3px;
        color: black;
        font-weight: bold;
    }

</style>

<script>
    import { IonCard } from '@ionic/vue';

    export default{
        props: ["rank"],
        components: { IonCard }
    };
</script>