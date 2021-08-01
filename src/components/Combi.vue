<template>
    <ion-card class="combi-card" v-if="combi.name">
        <img class="combi-img" :src=combi.src alt="">
        <div class="combi-content">
            <div class="combi-title">{{ combi.name }}</div>
            <div class="combi-kcal">{{ combi.kcal }}KCAL</div>
        </div>
    </ion-card>
</template>

<style scoped>
    .combi-card {
        display: flex;
        font-weight: bold;
    }
    
    .combi-img {
        height: 80px;
        padding: 10px;
    }

    .combi-content {
        width: 100%;
        padding-top: 7%;
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