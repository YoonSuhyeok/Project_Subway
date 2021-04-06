<template>
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <div class="slide_title">메뉴 선택하기</div>
    </ion-slide>
    <ion-slide>
        <div class="slide_title">빵 선택하기</div>
    </ion-slide>
    <ion-slide>
        <div class="slide_title">추가토핑 선택하기</div>
    </ion-slide>
    <ion-slide>
        <div class="slide_title">야채&소스 선택하기</div>
    </ion-slide>
    <ion-slide>
        <div class="slide_title">세트 선택하기</div>
    </ion-slide>
  </ion-slides>
</template>

<style>
    .slide_title {
        text-align: center;
        font-weight: bold;
    }
</style>

<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
});
</script>