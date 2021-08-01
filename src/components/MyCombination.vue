<template>
    <ion-card class="mycombi-card" v-if="mycombi.name">
        <!-- <img class="mycombi-img" :src=mycombi.src alt=""> -->
        <div class="mycombi-content">
            <div class="mycombi-title">{{ mycombi.name }}</div>
            <div class="mycombi-kcal">{{ mycombi.kcal }}KCAL</div>
        </div>
    </ion-card>
</template>

<style scoped>
    .mycombi-card {
        display: flex;
        font-weight: bold;
    }
    
    .mycombi-img {
        height: 80px;
        padding: 10px;
    }

    .mycombi-content {
        width: 100%;
        padding-top: 7%;
        display: inline-block;
        text-align: center;
    }
</style>

<script>
    import { IonCard } from '@ionic/vue';

    export default {
        props: ["mycombi"],
        components: { IonCard },
        setup(){
            return {
            }
        }
    };
</script>