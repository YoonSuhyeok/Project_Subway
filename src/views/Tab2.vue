<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="star"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title style="text-align: center;">
          <ion-checkbox class="upperCheckbox" checked="true" color="dark"></ion-checkbox>
          <ion-checkbox class="upperCheckbox" checked="false" color="dark"></ion-checkbox>
          <ion-checkbox class="upperCheckbox" checked="false" color="dark"></ion-checkbox>
          <ion-checkbox class="upperCheckbox" checked="false" color="dark"></ion-checkbox>
          <ion-checkbox class="upperCheckbox" checked="false" color="dark"></ion-checkbox>          
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            <ion-icon name="menu-outline"></ion-icon>
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-slides pager="false" :options="slideOpts" style="--bullet-background-active:#111111; --bullet-background:#C4C4C4;">
        <ion-slide>
          <div>
            <h5 class="slide-title"><b>메뉴 선택하기</b></h5>

            <ion-button strong="true" class="menu_btn" v-on:click="clickedClassic" v-if="state.selectMenu != 'classic_menu'"><h5><b>클래식</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedClassic" v-else><h5><b>클래식</b></h5></ion-button>
            <ion-button strong="true" class="menu_btn" v-on:click="clickedFresh" v-if="state.selectMenu != 'fresh_menu'"><h5><b>프래쉬&라이트</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedFresh" v-else><h5><b>프래쉬&라이트</b></h5></ion-button>
            <ion-button strong="true" class="menu_btn" v-on:click="clickedPremium" v-if="state.selectMenu != 'premium_menu'"><h5><b>프리미엄</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedPremium" v-else><h5><b>프리미엄</b></h5></ion-button>
            
            <div class="box-container" v-if="state.selectMenu === 'classic_menu'">

              <div v-for="classic in classicMenus" :key="classic.Menu_id + classic.Menu_name">
                <Items :info="{ name: classic.Menu_name , kcal: classic.Menu_calorie, src: classic.Menu_imageUrl }" />
              </div>

            </div>

            <div class="box-container" v-if="state.selectMenu === 'fresh_menu'">

              <div v-for="fresh in freshMenus" :key="fresh.Menu_id + fresh.Menu_name">
                <Items :info="{ name: fresh.Menu_name , kcal: fresh.Menu_calorie, src: fresh.Menu_imageUrl }" />
              </div>

            </div>

            <div class="box-container" v-if="state.selectMenu === 'premium_menu'">

              <div v-for="premium in premiumMenus" :key="premium.Menu_id + premium.Menu_name">
                <Items :info="{ name: premium.Menu_name , kcal: premium.Menu_calorie, src: premium.Menu_imageUrl }" />
              </div>

            </div>
          </div>
        </ion-slide>
    
        <ion-slide>
          <div>
            <h5 class="slide-title"><b>빵 선택하기</b></h5>

            <div class="box-container">

              <div v-for="bread in breads" :key="bread.Bread_id + Bread_name">
                <Items :info="{ name: bread.Bread_name , kcal: bread.Bread_calorie, src: bread.Bread_imageUrl }" />
              </div>

            </div>

          </div>
        </ion-slide>
    
        <ion-slide>
          <div>
            <h5 class="slide-title"><b>추가토핑 선택하기</b></h5>

            <div class="box-container">

              <ion-card class="toping-box">
                <ion-card-header>
                  <ion-card-title>더블업</ion-card-title>
                  <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="toping-box">
                <ion-card-header>
                  <ion-card-title>더블치즈</ion-card-title>
                  <ion-card-subtitle>44Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="toping-box">
                <ion-card-header>
                  <ion-card-title>베이컨 비츠</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

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
                <Items :info="{ name: vegetable.Ingredient_name , kcal: vegetable.Ingredient_calorie, src: vegetable.Ingredient_imageUrl }" />
              </div>
              
              <!-- <div class="bottomsForVegi" style="position:absolute; bottom:0px;">
                <h1>all/del 오이벤</h1>
                <h3>
                  <ion-checkbox class="checkAllOrNothing" checked="true" color="danger"></ion-checkbox>전체선택
                </h3>
              </div> -->

            </div>

            <div class="box-container" v-else>

              <div v-for="source in sources" :key="source.Ingredient_id + source.Ingredient_name">
                <Items :info="{ name: source.Ingredient_name , kcal: source.Ingredient_calorie, src: source.Ingredient_imageUrl }" />
              </div>

            </div>

          </div>
        </ion-slide>

        <ion-slide>
          <div>
            <h5 class="slide-title"><b>세트 선택하기</b></h5>

            <div class="box-container">

              <ion-card class="set-box">
                <ion-card-header>
                  <ion-card-title>베이컨 비츠</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="set-box">
                <ion-card-header>
                  <ion-card-title>베이컨 비츠</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="set-box">
                <ion-card-header>
                  <ion-card-title>베이컨 비츠</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

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

  .box-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: baseline;
    margin: auto;
  }

  .slide-title {
    width: 100%;
  }

  .upperCheckbox {
    --border-radius: 50%; 
    --checkmark-color: dark; 
    --border-color: #c4c4c4; 
    --background: #c4c4c4;
    width: 10px;
    height: 10px;
    margin: 5px;
    --color-checked: #111111;
    --background-hover: none;
    --color: #8a7d7d;
    --indicator-color	: none;
  }

  .checkAllOrNothing {
    --border-color: #111111;
    --border-color-checked: #111111;
    --checkmark-color: red; 
    --background-checked: none;
    --background: none;
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

  @media screen and (max-width: 480px) {
    .menu_btn, .mb_active {
      width: 130px;
    }

    .box-container {
      width: 300px;
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
      width: 800px;
    }
  }

</style>

<script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonSlides, IonSlide } from '@ionic/vue';
  import Items from '@/components/Itmes.vue'
  import { useStore } from 'vuex';
  import { computed } from '@vue/runtime-core';
  import axios from 'axios';
  import { reactive } from '@vue/reactivity';

  
export default  {
    name: 'Tab2',
    components: { Items, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, 
    IonSlides, IonSlide
    },
    setup() {
      // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
      const slideOpts = {
        initialSlide: 0,
        speed: 400
      };
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

      const store = useStore();
      store.dispatch('initData');

      return { 
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
        sources: computed(() => store.getters.getSourceList)
      }
    }
  }



</script>