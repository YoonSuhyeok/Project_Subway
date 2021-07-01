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
            <ion-button strong="true" class="mb_active" v-on:click="clickedClassic" v-if="state.selectMenu === 'classic_menu'"><h5><b>클래식</b></h5></ion-button>
            <ion-button strong="true" class="menu_btn" v-on:click="clickedFresh" v-if="state.selectMenu != 'fresh_menu'"><h5><b>프래쉬&라이트</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedFresh" v-if="state.selectMenu === 'fresh_menu'"><h5><b>프래쉬&라이트</b></h5></ion-button>
            <ion-button strong="true" class="menu_btn" v-on:click="clickedPremium" v-if="state.selectMenu != 'premium_menu'"><h5><b>프리미엄</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedPremium" v-if="state.selectMenu === 'premium_menu'"><h5><b>프리미엄</b></h5></ion-button>
            
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

            <!-- <ion-button strong="true" class="menu_btn" v-on:click="clickedClassic" v-if="state.selectMenu != 'classic_menu'"><h5><b>클래식</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedClassic" v-if="state.selectMenu === 'classic_menu'"><h5><b>클래식</b></h5></ion-button>
            <ion-button strong="true" class="menu_btn" v-on:click="clickedFresh" v-if="state.selectMenu != 'fresh_menu'"><h5><b>프래쉬&라이트</b></h5></ion-button>
            <ion-button strong="true" class="mb_active" v-on:click="clickedFresh" v-if="state.selectMenu === 'fresh_menu'"><h5><b>프래쉬&라이트</b></h5></ion-button> -->
            

            <ion-segment value="vegitableSorce" v-model="selectVegitableSource" >
              <ion-segment-button value="vegitable">
                  <ion-label>야채</ion-label>
              </ion-segment-button>
              <ion-segment-button value="source">
                  <ion-label>소스</ion-label>
              </ion-segment-button>
            </ion-segment>

            <div class="box-container" v-if="selectVegitableSource === 'vegitable'" style="height:300px;">

              <!-- <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>야아채</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>야아채</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>야아채</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card> -->
              
              <div class="bottomsForVegi" style="position:absolute; bottom:0px;">
                <h1>all/del 오이벤</h1>
                <h3>
                  <ion-checkbox class="checkAllOrNothing" checked="true" color="danger"></ion-checkbox>전체선택
                </h3>
              </div>

            </div>

            <div class="box-container" v-else-if="selectVegitableSource === 'source'">

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>소오스</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>소오스</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>소오스</ion-card-title>
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

  .box-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: baseline;
  }

  .bread-box {
    border-radius: 100%;
    width: 100px;
    height: 100px;
  }

  .slide-title {
    width: 100%;
  }

  /* .menu-box, .toping-box, .salary-box, .set-box {
    width: 100px;
    height: 100px;
  } */

  /* ion-segment-button {
    --color-checked: #111111;
    --background-hover: none;
    --color: #c4c4c4;
    --color-checked: #111111;
    --indicator-color	: none;
  } */
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
    font-weight: bold;
    height: 50px;
  }

  .mb_active {
    --color: #111111;
    --background: #ffffff;
    --border-radius: 0;
    --box-shadow: none;
    font-weight: bold;
    height: 50px;
  }

  @media screen and (max-width: 480px) {
    .menu_btn, .mb_active {
      width: 130px;
    }
  }

  @media screen and (min-width: 480px) and (max-width:768px) {
    .menu_btn, .mb_active {
      width: 150px;
    }
  }

  @media screen and (min-width: 768px) {
    .menu_btn, .mb_active {
      width: 250px;
    }
  }

</style>

<script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonSlides, IonSlide, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue';
  import Items from '@/components/Itmes.vue'
  import { useStore } from 'vuex';
  import { computed } from '@vue/runtime-core';
  import axios from 'axios';
  import { reactive } from '@vue/reactivity';

  
export default  {
    name: 'Tab2',
    components: { Items, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, 
    IonSlides, IonSlide, IonSegment, IonSegmentButton, IonLabel
    },
    data() {
      return {
        classic: [
          {name: '클래식1', kcal: 480},
          {name: '클래식2', kcal: 380},
          {name: '클래식3', kcal: 480}
        ],
        fresh: [
          {name: '프래쉬1', kcal: 480},
          {name: '프래쉬2', kcal: 480},
          {name: '프래쉬3', kcal: 480},
        ],
        premium: [
          {name: '프리미엄1', kcal: 480},
          {name: '프리미엄2', kcal: 480},
          {name: '프리미엄3', kcal: 480}, 
        ]
      }
      
    },
    setup() {
      // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
      const slideOpts = {
        initialSlide: 0,
        speed: 400
      };
      const state = reactive({
        selectMenu: 'classic_menu',
        // selectVegitableSource: 'vegitable'
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

      const store = useStore();
      store.dispatch('initData');

      return { 
        slideOpts,
        state,
        clickedClassic,
        clickedFresh,
        clickedPremium,
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