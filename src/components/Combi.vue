<template>
    <ion-card v-if="menu.name != ''">
        <img :src=menu.src alt="">
        <div class="content">
            <div class="title">{{ menu.name }}</div>
            <div class="kcal">{{ menu.kcal }}KCAL</div>
        </div>
    </ion-card>

    <ion-card v-if="bread.name != ''">
        <img :src=bread.src alt="">
        <div class="content">
            <div class="title">{{ bread.name }}</div>
            <div class="kcal">{{ bread.kcal }}KCAL</div>
        </div>
    </ion-card>

    <ion-card v-if="vegetable.name != ''">
        <img :src=vegetable.src alt="">
        <div class="content">
            <div class="title">{{ vegetable.name }}</div>
            <div class="kcal">{{ vegetable.kcal }}KCAL</div>
        </div>
    </ion-card>

    <ion-card v-if="source.name != ''">
        <img :src=source.src alt="">
        <div class="content">
            <div class="title">{{ source.name }}</div>
            <div class="kcal">{{ source.kcal }}KCAL</div>
        </div>
    </ion-card>

    
    <h3 style="text-align:center; margin: 30px;"><b>
        총 합계 칼로리   {{ menu.kcal + bread.kcal + vegetable.kcal + source.kcal }}
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
            menu: computed(() => store.getters.getSelectMenu),
            bread: computed(() => store.getters.getSelectBread),
            vegetable: computed(() => store.getters.getSelectVege),
            source: computed(() => store.getters.getSelectSource),
        };
    }
});
</script>