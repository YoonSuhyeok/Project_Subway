<template>
    <div id="container">
        <ion-card class="menu-box">
            <ion-card-header class="menu-box-header">
                <ion-card-title class="menu-name">{{ info.name }}</ion-card-title>
                <ion-card-subtitle class="menu-kcal">{{ info.kcal }}Kcal</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
    </div>
</template>

<style scoped>
    
    .menu-box {
        width: 100px;
        height: 100px;
    }

</style>

<script lang="ts">
    import { IonCard } from '@ionic/vue';

    export default  {
        props: ["info"],
        components: { IonCard },
    }
</script>