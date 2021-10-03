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
            <p class="menu-select-title">메뉴 선택하기{{ selectMenu }}</p>

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
                  { label: 'classic', value: 'classic' },
                  { label: 'fresh&light', value: 'fresh' },
                  { label: 'premium', value: 'premium' },
                ]"
              />
              <div
                class="wrap q-pa-md row items-start q-gutter-md item-card-div"
                v-if="menuToggle === 'classic'"
              >
                <Item breadname="미트볼" :kcal="480" />
                <Item breadname="비엘티" :kcal="380" />
                <Item breadname="에그마요" :kcal="480" />
                <Item breadname="이탈리안비엠티" :kcal="410" />
                <Item breadname="참치" :kcal="480" />
                <Item breadname="햄" :kcal="290" />
              </div>
              <div
                class="wrap q-pa-md row items-start q-gutter-md item-card-div"
                v-if="menuToggle == 'fresh'"
              >
                <Item breadname="로스트 치킨" :kcal="320" />
                <Item breadname="로스트 치킨 아보카도" :kcal="383" />
                <Item breadname="로티세리 바비큐 치킨" :kcal="350" />
                <Item breadname="베지" :kcal="480" />
                <Item breadname="써브웨이 클립" :kcal="310" />
                <Item breadname="터키" :kcal="280" />
                <Item breadname="로스트 치킨 베이컨" :kcal="409" />
              </div>
              <div
                class="wrap q-pa-md row items-start q-gutter-md item-card-div"
                v-if="menuToggle == 'premium'"
              >
                <Item breadname="쉬림프" :kcal="229" />
                <Item breadname="스테이크&치즈" :kcal="350" />
                <Item breadname="K - 바비큐" :kcal="378" />
                <Item breadname="스파이시 이탈리안" :kcal="350" />
                <Item breadname="써브웨이 멜트" :kcal="350" />
                <Item breadname="치킨 데리야끼" :kcal="350" />
                <Item breadname="터키 베이컨 아보카도" :kcal="350" />
                <Item breadname="풀드포크" :kcal="420" />
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
  margin-bottom: 20px;
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
import { Vue, Options } from 'vue-class-component';
import { ref } from 'vue';
import Item from 'src/components/Items.vue';
// import MenuBtnActive from 'src/components/MenuBtnActive.vue';
// import MenuBtn from 'src/components/MenuBtn.vue';

@Options({
  components: {
    Item,
    // MenuBtnActive,
    // MenuBtn
  },
})
export default class Tab2 extends Vue {
  menuToggle = 'classic';
  navPos = ref('top');
  slide = ref('menu');
  selectMenu = '';
}
</script>
