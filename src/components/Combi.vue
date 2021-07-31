<template>
    <ion-card class="card" v-if="combi.name">
        <img :src=combi.src alt="">
        <div class="content">
            <div class="title">{{ combi.name }}</div>
            <div class="kcal">{{ combi.kcal }}KCAL</div>
        </div>
    </ion-card>
</template>

<style scoped>
    .card {
        display: flex;
        font-weight: bold;
    }
    
    img {
        height: 80px;
        padding: 20px;
    }

    .content {
        width: 100%;
        padding-top: 6%;
        display: inline-block;
        text-align: center;
    }
</style>

<script>
    import { IonCard } from '@ionic/vue';

    export default {
        props: ["combi"],
        components: { IonCard },
        setup(){
            return {
            }
        }
    };
</script>