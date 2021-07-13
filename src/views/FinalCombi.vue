<template>
    <ion-page>
        <ion-header>
            <ion-title class="title">
                <h5>최종 조합</h5>
            </ion-title>
        </ion-header>

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

export default  {
  name: 'Final',
    components: { Combi },
}
</script>
