<template>
    <ion-page>
        <ion-header>
            <ion-title class="title">
                <h5>최종 조합</h5>
            </ion-title>
        </ion-header>
        {{ menu }}
        {{ bread }}
        {{ vegetable }}
        {{ source }}
        
        <Combi />

    </ion-page>
</template>

<style scoped>
    .title {
        text-align: center;
        font-weight: bold;
        color: #009132;
    }
</style>

<script lang="ts">
import Combi from '@/components/Combi.vue'
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default  {
    name: 'Final',
    components: { Combi },
    setup(){
        const store = useStore();
        return {
            menu: computed(() => store.getters.getSelectMenu),
            bread: computed(() => store.getters.getSelectBread),
            vegetable: computed(() => store.getters.getSelectVegetable),
            source: computed(() => store.getters.getSelectSource),
        }
    }
}

</script>