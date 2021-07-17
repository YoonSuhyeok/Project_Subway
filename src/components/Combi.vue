<template>
    <ion-card>
        <img src="/assets/img/temporary-img.png" alt="">
        <div class="content">
            <div class="title">이탈리안 비엠티</div>
            <div class="kcal">410KCAL</div>
        </div>
    </ion-card>
</template>

<style scoped>
    img {
        height: 80px;
        padding: 20px;
    }

    ion-card {
        display: flex;
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
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard },
  setup() {
    return { warning };
  }
});
</script>