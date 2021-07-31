<template>
    <ion-page>
        <ion-header>
            <ion-title class="title">
                <h5><b>나의 조합</b></h5>
            </ion-title>
        </ion-header>

    <MyCombination :mycombi="{ type: 0, name: '임시' , kcal: '임시' }"/>

    </ion-page>
</template>

<style scoped>
    .title {
            text-align: center;
            font-weight: bold;
            color: #009132;
        }
</style>

<script>
import MyCombination from '@/components/MyCombination.vue'
export default{
    props: ["mycombi"],
    components: { MyCombination },
    setup() {
        
    },
}
</script>
