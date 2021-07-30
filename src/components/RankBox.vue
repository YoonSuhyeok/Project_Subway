<template>
        <ion-card class="card-box">
            <img :src="rank.src" class="menu-img first" v-if="rank.rank === 1">
            <img :src="rank.src" class="menu-img notFirst" v-else>
            <ion-card-header>
                <ion-card-subtitle class="user-name">
                    <span style="color:#08A965;">{{rank.user}}</span>님의
                </ion-card-subtitle>
                <ion-card-title class="menu-info">{{rank.title}}</ion-card-title>
            </ion-card-header>
            <ion-card-content class="menu-info">{{rank.kcal}}K</ion-card-content>
        </ion-card>
</template>

<style scoped>

    ion-card-header, ion-card-content {
        padding: 0;
        margin: 0;
    }

    ion-card-content {
        margin-top: 20px;
    }

    .card-box {
        border-radius: 15px;
        box-shadow: 2px 6px 5px 0px lightgrey;
        margin: 5px;
    }

    .menu-img {
        padding:7px;
    }

    .notFirst {
        height: 46px;
    }

    .first {
        height: 59px;
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