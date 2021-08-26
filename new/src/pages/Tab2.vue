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
        class="bg-white text-black rounded-borders"
      >
        <q-carousel-slide name="menu" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">메뉴 선택하기{{selectMenu}}</p>

                <!-- <MenuBtnActive :menu="{title: '클래식'}" v-if="selectMenu == 'classic_menu'" />
                <MenuBtn :menu="{title: '클래식'}" v-else v-on:click="clickedClassic"/>
                <MenuBtnActive style="width:110%;" :menu="{title: '프레쉬&라이트'}" v-if="selectMenu == 'fresh_menu'"/>
                <MenuBtn style="width:110%;" :menu="{title: '프레쉬&라이트'}" v-else v-on:click="clickedFresh" />
                <MenuBtnActive :menu="{title: '프리미엄'}" v-if="selectMenu == 'premium_menu'"/>
                <MenuBtn :menu="{title: '프리미엄'}" v-else v-on:click="clickedPremium" /> -->

                <div class="menu-toggle">
                  <q-btn-toggle
                  v-model="menuToggle"
                  toggle-color="black"
                  flat
                  :options="[
                  {label: 'classic', value: 'classic'},
                  {label: 'fresh&light', value: 'fresh'},
                  {label: 'premium', value: 'premium'}
                  ]"
                  />
                  <div class="q-pa-md row items-start q-gutter-md item-card-div" v-if="menuToggle == 'classic'">
                    <Item /><Item /><Item /><Item /><Item />
                  </div>
                  <div class="q-pa-md row items-start q-gutter-md item-card-div" v-if="menuToggle == 'fresh'">
                    <Item /><Item /><Item /><Item />
                  </div>
                  <div class="q-pa-md row items-start q-gutter-md item-card-div" v-if="menuToggle == 'premium'">
                    <Item /><Item />
                  </div>
                </div>
                
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="bread" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">빵 선택하기</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="chease" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">치즈 선택하기</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="toping" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">추가토핑 선택하기</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="vegetable" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">야채 선택하기</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="source" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">소스 선택하기</p>
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

.menu-select-title {
    padding: 0; 
    margin: 0; 
    margin-bottom:20px; 
    font-weight: bold;
}

.item-card-div {
  width: 275px;
}
</style>

<style>
.menu-toggle > .q-btn-group > .q-btn {
  padding: 5px;
  color: lightslategray;
}
</style>

<script>
import { ref } from 'vue';
import Item from 'src/components/Items.vue';
// import MenuBtnActive from 'src/components/MenuBtnActive.vue';
// import MenuBtn from 'src/components/MenuBtn.vue';

export default {
  name: 'Tab2',
  components: { Item, 
  // MenuBtnActive, MenuBtn 
  },
  setup() {
    return {
      menuToggle: ref('classic'),
      navPos: ref('top'),
      slide: ref('menu'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
};
</script>
