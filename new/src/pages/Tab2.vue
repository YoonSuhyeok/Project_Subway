<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        :navigation-position="navPos"
        control-color="dark"
        navigation
        padding
        height="100%"
        class="bg-grey text-black rounded-borders"
      >
        <q-carousel-slide name="menu" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p style="padding: 0; margin: 0; font-weight: bold">
              메뉴 선택하기
            </p>
            <div class="wrap">

                <MenuBtn :menu="{title: '클래식'}" />
                <MenuBtn style="width:110%;" :menu="{title: '프레쉬&라이트'}"/>
                <MenuBtn :menu="{title: '프리미엄'}"/>
                
                <Item /><Item /><Item /><Item /><Item />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="bread" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p style="padding: 0; margin: 0; font-weight: bold">빵 선택하기</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="chease" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p style="padding: 0; margin: 0; font-weight: bold">
              치즈 선택하기
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="toping" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p style="padding: 0; margin: 0; font-weight: bold">
              추가토핑 선택하기
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="vegetable" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p style="padding: 0; margin: 0; font-weight: bold">
              야채 선택하기
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="source" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p style="padding: 0; margin: 0; font-weight: bold">
              소스 선택하기
            </p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>

<script>
import { ref } from 'vue';
import Item from 'src/components/Items.vue';
import MenuBtn from 'src/components/MenuBtn.vue';

export default {
  name: 'Tab2',
  components: { Item, MenuBtn },
  setup() {
    return {
      navPos: ref('top'),
      slide: ref('menu'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
};
</script>
