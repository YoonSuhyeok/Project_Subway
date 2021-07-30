<template>
  <ion-page>

    <ion-content :fullscreen="true">

      <ion-slides pager :options="slideOpts">
        <ion-slide>
          <div>
            <h5 class="slide-title"><b>메뉴 선택하기</b></h5>

            <ion-button strong="true" class="menu_btn" v-on:click="clickedClassic" v-if="state.selectMenu != 'classic_menu'"><b>클래식</b></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedClassic" v-else><b>클래식</b></ion-button>
            <ion-button strong="true" class="menu_btn" v-on:click="clickedFresh" v-if="state.selectMenu != 'fresh_menu'"><b>프래쉬&라이트</b></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedFresh" v-else><b>프래쉬&라이트</b></ion-button>
            <ion-button strong="true" class="menu_btn" v-on:click="clickedPremium" v-if="state.selectMenu != 'premium_menu'"><b>프리미엄</b></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedPremium" v-else><b>프리미엄</b></ion-button>
            
            <span v-if="state.selectMenu === 'classic_menu'">

              <div class="box-container" v-for="classic in classicMenus" :key="classic.Menu_id + classic.Menu_name">
                <Items :info="{ type: 0, name: classic.Menu_name , kcal: classic.Menu_calorie, src: classic.Menu_imageUrl }" />
              </div>
              
            </span>

            <div class="box-container" v-if="state.selectMenu === 'fresh_menu'">

              <div v-for="fresh in freshMenus" :key="fresh.Menu_id + fresh.Menu_name">
                <Items :info="{ type: 0, name: fresh.Menu_name , kcal: fresh.Menu_calorie, src: fresh.Menu_imageUrl }" />
              </div>

            </div>

            <div class="box-container" v-if="state.selectMenu === 'premium_menu'">

              <div v-for="premium in premiumMenus" :key="premium.Menu_id + premium.Menu_name">
                <Items :info="{ type: 0, name: premium.Menu_name , kcal: premium.Menu_calorie, src: premium.Menu_imageUrl }" />
              </div>

            </div>
          </div>
        </ion-slide>
    
        <ion-slide>
          <div>
            <h5 class="slide-title"><b>빵 선택하기</b></h5>

            <div class="box-container">

              <div v-for="bread in breads" :key="bread.Bread_id + bread.Bread_name">
                <Items :info="{ type: 1, name: bread.Bread_name , kcal: bread.Bread_calorie, src: bread.Bread_imageUrl }" />
              </div>

            </div>

          </div>
        </ion-slide>
    
        <ion-slide>
          <div>
            <h5 class="slide-title"><b>추가토핑 선택하기</b></h5>

            <div class="box-container">

              <div v-for="extra in extras" :key="extra.Extra_id + extra.Extra_name">
                <Items :info="{ type: 2, name: extra.Extra_name , kcal: extra.Extra_calorie, src: extra.Extra_imageUrl }" />
              </div>

            </div>

          </div>
        </ion-slide>

        <ion-slide>
          <div>
            <h5 class="slide-title"><b>야채&소스 선택하기</b></h5>

            <ion-button strong="true" class="menu_btn" v-on:click="clickedVegetable" v-if="state.selectVegeSource != 'vegetable'"><h5><b>야채</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedVegetable" v-else><h5><b>야채</b></h5></ion-button>
            <ion-button strong="true" class="menu_btn" v-on:click="clickedSource" v-if="state.selectVegeSource != 'source'"><h5><b>소스</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedSource" v-else><h5><b>소스</b></h5></ion-button>

            <div class="box-container" v-if="state.selectVegeSource === 'vegetable'">
              <div v-for="vegetable in vegetables" :key="vegetable.Ingredient_id + vegetable.Ingredient_name">
                <Items :info="{ type: 3,name: vegetable.Ingredient_name , kcal: vegetable.Ingredient_calorie, src: vegetable.Ingredient_imageUrl }" />
              </div>

            </div>

            <div class="box-container" v-else>

              <div v-for="source in sources" :key="source.Ingredient_id + source.Ingredient_name">
                <Items :info="{ type: 4, name: source.Ingredient_name , kcal: source.Ingredient_calorie, src: source.Ingredient_imageUrl }" />
              </div>
            </div>

          </div>
        </ion-slide>
      </ion-slides>
      </ion-content>
  </ion-page>
</template>

<style scoped>

  @charset "utf-8";

  @font-face {
    font-family: 'NanumGothicExtraBold';
    src: url(../../public/assets/font/NanumGothicExtraBold.ttf);
  }

  .slide-title {
    width: 100%;
    margin-top: 50px;
  }

  .menu_btn {
    --color: #949494;
    --background: #ffffff;
    --border-radius: 0;
    --box-shadow: none;
    font-family: NanumGothicExtraBold;
    height: 50px;
  }

  .mb_active {
    --color: #111111;
    --background: #ffffff;
    --border-radius: 0;
    --box-shadow: none;
    font-family: NanumGothicExtraBold;
    height: 50px;
  }

  .box-container {
    display: flex;
    justify-content: center;
  }

  /* .box-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    margin: auto;
  } */

  @media screen and (max-width: 360px) {
    .menu_btn, .mb_active {
      width: 100px;
      font-size: 14px;
    }

    .box-container {
      width: 340px;
    }
  }

  @media screen and (min-width: 360px) and (max-width: 480px) {
    .menu_btn, .mb_active {
      width: 115px;
      font-size: 15px;
    }

    .box-container {
      width: 380px;
    }
  }

  @media screen and (min-width: 480px) and (max-width:768px) {
    .menu_btn, .mb_active {
      width: 150px;
    }
    
    .box-container {
      width: 500px;
    }
  }

  @media screen and (min-width: 768px) {
    .menu_btn, .mb_active {
      width: 250px;
    }
    
    .box-container {
      width: 660px;
    }
  }

  ion-slides {
    --bullet-background-active:#111111; 
    --bullet-background:#C4C4C4;
  }

</style>

<style>

  div.swiper-pagination {
    top: 10px;
    height: 0;
  }

</style>


<script lang="ts">
  import { IonPage, IonContent, IonButton, IonSlides, IonSlide } from '@ionic/vue';
  import Items from '@/components/Itmes.vue'
  import { computed } from '@vue/runtime-core';
  import { reactive } from '@vue/reactivity';
  import { useStore } from 'vuex';

  export default  {
    name: 'Tab2',
    components: { Items, IonContent, IonPage, IonButton, IonSlides, IonSlide },
    setup() {
      // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
      const store = useStore();

      const slideOpts = {
        initialSlide: 0,
        speed: 400,
      }

      const state = reactive({
        selectMenu: 'classic_menu',
        selectVegeSource: 'vegetable'
      })
      const clickedClassic = () => {
        state.selectMenu = 'classic_menu'
      }
      const clickedFresh = () => {
        state.selectMenu = 'fresh_menu'
      }
      const clickedPremium = () => {
        state.selectMenu = 'premium_menu'
      }
      const clickedVegetable = () => {
        state.selectVegeSource = 'vegetable'
      }
      const clickedSource = () => {
        state.selectVegeSource = 'source'
      }
      
      store.dispatch('initData');
      const move = () => {
        window.location.href = '/final'
      }
      return { 
        move,
        slideOpts,
        state,
        clickedClassic,
        clickedFresh,
        clickedPremium,
        clickedVegetable,
        clickedSource,
        breads: computed(() => store.getters.getBreadList),
        classicMenus: computed(() => store.getters.getPremiumMenuList),
        freshMenus: computed(() => store.getters.getFreshMenuList),
        premiumMenus: computed(() => store.getters.getPremiumMenuList),
        vegetables: computed(() => store.getters.getVegetableList),
        sources: computed(() => store.getters.getSourceList),
        extras: computed(() => store.getters.getExtraList),
        select: computed(() => store.getters.getSelectMenu),
      }
    }
  }
</script>
