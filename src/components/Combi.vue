<template>
    <ion-card>
        <img :src=menuSrc alt="">
        <div class="content">
            <div class="title">{{ menuName }}</div>
            <div class="kcal">{{ menuKcal }}KCAL</div>
        </div>
    </ion-card>

    <ion-card>
        <img :src=breadSrc alt="">
        <div class="content">
            <div class="title">{{ breadName }}</div>
            <div class="kcal">{{ breadKcal }}KCAL</div>
        </div>
    </ion-card>

    <ion-card>
        <img :src=vegeSrc alt="">
        <div class="content">
            <div class="title">{{ vegeName }}</div>
            <div class="kcal">{{ vegeKcal }}KCAL</div>
        </div>
    </ion-card>

    <ion-card>
        <img :src=sourceSrc alt="">
        <div class="content">
            <div class="title">{{ sourceName }}</div>
            <div class="kcal">{{ sourceKcal }}KCAL</div>
        </div>
    </ion-card>

    
    <h3 style="text-align:center;"><b>
        총 합계 칼로리   {{ menuKcal + breadKcal + vegeKcal + sourceKcal }}
    </b></h3>

</template>

<style scoped>
    img {
        height: 80px;
        padding: 20px;
    }

    ion-card {
        display: flex;
        font-weight: bold;
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
import { defineComponent } from 'vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default defineComponent({
    components: { IonCard },
    setup() {
        const store = useStore();
        return { 
            menuName: computed(() => store.getters.getSelectMenuName),
            menuKcal: computed(() => store.getters.getSelectMenuKcal),
            menuSrc: computed(() => store.getters.getSelectMenuSrc),
            breadName: computed(() => store.getters.getSelectBreadName),
            breadKcal: computed(() => store.getters.getSelectBreadKcal),
            breadSrc: computed(() => store.getters.getSelectBreadSrc),
            vegeName: computed(() => store.getters.getSelectVegeName),
            vegeKcal: computed(() => store.getters.getSelectVegeKcal),
            vegeSrc: computed(() => store.getters.getSelectVegeSrc),
            sourceName: computed(() => store.getters.getSelectSourceName),
            sourceKcal: computed(() => store.getters.getSelectSourceKcal),
            sourceSrc: computed(() => store.getters.getSelectSourceSrc),
        };
    }
});
</script>