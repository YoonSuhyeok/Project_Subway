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
                class="wrap q-pa-md row items-start"
                v-if="menuToggle === 'classic'"
              >
                <Item name="미트볼" category="menu" :kcal="480" :id="3" v-on:click="selMenu('03')" />
                <Item name="비엘티" category="menu" :kcal="380" :id="2" v-on:click="selMenu('02')" />
                <Item name="에그마요" category="menu" :kcal="480" :id="0" v-on:click="selMenu('00')" />
                <Item name="이탈리안비엠티" category="menu" :kcal="410" :id="1" v-on:click="selMenu('01')" />
                <Item name="참치" category="menu" :kcal="480" :id="5" v-on:click="selMenu('05')" />
                <Item name="햄" category="menu" :kcal="290" :id="4" v-on:click="selMenu('04')" />
              </div>
              <div
                class="wrap q-pa-md row items-start"
                v-if="menuToggle == 'fresh'"
              >
                <Item name="로스트 치킨" category="menu" :kcal="320" :id="6" v-on:click="selMenu('06')" />
                <Item name="로티세리 바비큐 치킨" category="menu" :kcal="350" :id="7" v-on:click="selMenu('07')" />
                <Item name="베지" category="menu" :kcal="480" :id="10" v-on:click="selMenu('10')" />
                <Item name="써브웨이 클립" category="menu" :kcal="310" :id="8" v-on:click="selMenu('08')" />
                <Item name="터키" category="menu" :kcal="280" :id="9" v-on:click="selMenu('09')" />
              </div>
              <div
                class="wrap q-pa-md row items-start"
                v-if="menuToggle == 'premium'"
              >
                <Item name="쉬림프" category="menu" :kcal="229" :id="11" v-on:click="selMenu('11')" />
                <Item name="스테이크&치즈" category="menu" :kcal="350" :id="14" v-on:click="selMenu('14')" />
                <Item name="K - 바비큐" category="menu" :kcal="378" :id="12" v-on:click="selMenu('12')" />
                <Item name="스파이시 이탈리안" category="menu" :kcal="350" :id="16" v-on:click="selMenu('16')" />
                <Item name="치킨 데리야끼" category="menu" :kcal="350" :id="17" v-on:click="selMenu('17')" />
                <Item name="터키 베이컨 아보카도" category="menu" :kcal="350" :id="15" v-on:click="selMenu('15')" />
                <Item name="풀드 포크 바비큐" category="menu" :kcal="420" :id="13" v-on:click="selMenu('13')" />
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="bread" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">빵 선택하기</p>
            <div class="wrap q-pa-md row items-start">
                <Item name="위트" category="bread" :kcal="210" :id="5" v-on:click="selBread('5')" />
                <Item name="파마산 오레가노" category="bread" :kcal="210" :id="4" v-on:click="selBread('4')" />
                <Item name="플랫 브레드" category="bread" :kcal="230" :id="1" v-on:click="selBread('1')" />
                <Item name="하티" category="bread" :kcal="210" :id="3" v-on:click="selBread('3')" />
                <Item name="허니오트" category="bread" :kcal="230" :id="0" v-on:click="selBread('0')" />
                <Item name="화이트" category="bread" :kcal="200" :id="2" v-on:click="selBread('2')" />
              </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="chease" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">치즈 선택하기</p>
            <div class="wrap q-pa-md row items-start">
                <Item name="아메리칸  치즈" category="cheeze" :kcal="40" :id="0" v-on:click="setIgd(9)" />
                <Item name="슈레드 치즈" category="cheeze" :kcal="50" :id="1" v-on:click="setIgd(10)" />
                <Item name="모차렐라 치즈" category="cheeze" :kcal="44" :id="2" v-on:click="setIgd(11)" />
              </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="toping" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">추가토핑 선택하기</p>
            <div class="wrap q-pa-md row items-start">
                <Item name="치즈 추가" category="extra" :kcal="0" :id="0" v-on:click="setExtra(0)" />
                <Item name="더블 업" category="extra" :kcal="0" :id="1" v-on:click="setExtra(1)" />
                <Item name="쉬림프 더블업" category="extra" :kcal="0" :id="2" v-on:click="setExtra(2)" />
                <Item name="에그마요" category="extra" :kcal="0" :id="3" v-on:click="setExtra(3)" />
                <Item name="오믈렛" category="extra" :kcal="0" :id="4" v-on:click="setExtra(4)" />
                <Item name="아보카도" category="extra" :kcal="0" :id="5" v-on:click="setExtra(5)" />
                <Item name="베이컨" category="extra" :kcal="0" :id="6" v-on:click="setExtra(6)" />
                <Item name="페퍼로니" category="extra" :kcal="0" :id="7" v-on:click="setExtra(7)" />
              </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="vegetable" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">야채 선택하기</p>
            <div class="wrap q-pa-md row items-start">
                <Item name="양상추" category="vegetable" :kcal="5" :id="0" v-on:click="setIgd(0)" />
                <Item name="토마토" category="vegetable" :kcal="5" :id="1" v-on:click="setIgd(1)" />
                <Item name="오이" category="vegetable" :kcal="5" :id="2" v-on:click="setIgd(2)" />
                <Item name="피망" category="vegetable" :kcal="5" :id="3" v-on:click="setIgd(3)" />
                <Item name="양파" category="vegetable" :kcal="5" :id="4" v-on:click="setIgd(4)" />
                <Item name="피클" category="vegetable" :kcal="5" :id="5" v-on:click="setIgd(5)" />
                <Item name="올리브" category="vegetable" :kcal="5" :id="6" v-on:click="setIgd(6)" />
                <Item name="할라피뇨" category="vegetable" :kcal="5" :id="7" v-on:click="setIgd(7)" />
                <Item name="아보카도" category="vegetable" :kcal="60" :id="8" v-on:click="setIgd(8)" />
              </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="source" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <p class="menu-select-title">소스 선택하기</p>
            <div class="wrap q-pa-md row items-start">
                <Item name="랜치" category="source" :kcal="110" :id="0" v-on:click="setIgd(12)" />
                <Item name="마요네즈" category="source" :kcal="110" :id="1" v-on:click="setIgd(13)" />
                <Item name="스위트 어니언" category="source" :kcal="40" :id="2" v-on:click="setIgd(14)" />
                <Item name="허니 머스타드" category="source" :kcal="30" :id="3" v-on:click="setIgd(15)" />
                <Item name="스위트 칠리" category="source" :kcal="30" :id="4" v-on:click="setIgd(16)" />
                <Item name="스모크 바비큐" category="source" :kcal="35" :id="5" v-on:click="setIgd(17)" />
                <Item name="핫 칠리" category="source" :kcal="40" :id="6" v-on:click="setIgd(18)" />
                <Item name="사우스웨스트 치폴레" category="source" :kcal="100" :id="7" v-on:click="setIgd(19)" />
                <Item name="홀스레디쉬" category="source" :kcal="110" :id="8" v-on:click="setIgd(20)" />
                <Item name="머스타드" category="source" :kcal="5" :id="9" v-on:click="setIgd(21)" />
                <Item name="레드와인 식초" category="source" :kcal="40" :id="10" v-on:click="setIgd(22)" />
                <Item name="소금" category="source" :kcal="0" :id="11" v-on:click="setIgd(23)" />
                <Item name="후추" category="source" :kcal="0" :id="12" v-on:click="setIgd(24)" />
                <Item name="올리브 오일" category="source" :kcal="45" :id="13" v-on:click="setIgd(25)" />
              </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div round class="text-center" style="position:fixed; left:0; bottom:100px; width:100%;" v-on:click="setRecipeData()">
      <q-btn style="width:60%;">선택 완료</q-btn>
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

.menu-toggle > .q-btn-group > .q-btn {
  padding: 5px;
  color: lightslategray;
}
</style>

<script lang="ts">
import { useStore } from 'vuex';
import { Recipe } from '../store/recipe.store'
import { Vue, Options } from 'vue-class-component';
import { ref } from 'vue';
import Item from 'src/components/Items.vue';
import { type } from 'os';
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
  $store = useStore();
  recipe: Recipe = {
    name: '',
    user: '', //this.$store.getters['moduleUser/email'],
    breadId: 0,
    menuId: 0,
    extraId: '',
    igdId: ''
  }

  menuToggle = 'classic';
  navPos = ref('top');
  slide = ref('menu');
  selectMenu  = '';

  breadId = 'unknown';
  menuId = 'unknown';
  extraId: string[] = [ '0', '0', '0', '0', '0', '0', '0', '0'];
  igdId: string[] = [ '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
                      '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0' ]

  selMenu(menuid: string) {
    this.menuId = menuid;
    console.log("select Menu : ", this.menuId);
  }
  
  selBread(breadid: string) {
    this.breadId = breadid;
    console.log("select BreadId : ", this.breadId);
  }
  
  setExtra(idx: number) {
    if(this.extraId[idx] == '0') this.extraId[idx] = '1';
    else this.extraId[idx] = '0';
    console.log("[ ", this.extraId[0], this.extraId[1], this.extraId[2], this.extraId[3], this.extraId[4], this.extraId[5], this.extraId[6], this.extraId[7], " ]");
  }

  setIgd(idx: number) {
    if(this.igdId[idx] == '0') this.igdId[idx] = '1';
    else this.igdId[idx] = '0';
    console.log("[ ", 
                    this.igdId[0], this.igdId[1], this.igdId[2], this.igdId[3], this.igdId[4], this.igdId[5], 
                    this.igdId[6], this.igdId[7], this.igdId[8], this.igdId[9], this.igdId[10], this.igdId[11],
                    this.igdId[12], this.igdId[13], this.igdId[14], this.igdId[15], this.igdId[16], this.igdId[17], 
                    this.igdId[18], this.igdId[19], this.igdId[21], this.igdId[22], this.igdId[23], this.igdId[24], 
                    this.igdId[25], " ]");
  }

  async setRecipeData() {
    if(this.menuId != 'unknown' && this.breadId != 'unknown' && this.igdId.find((element) => element == '1') != undefined) {
      this.recipe.menuId = + this.menuId
      this.recipe.breadId = + this.breadId
      this.recipe.extraId = this.extraId.join("");
      this.recipe.igdId = this.igdId.join("");
      await this.$store.dispatch('moduleRecipe/setRecipe', this.recipe);
      void this.$router.push('/makesand');
    } else alert("아직 선택이 완료되지 않았습니다.");
  }
}
</script>
