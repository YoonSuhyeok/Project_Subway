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
          <ion-checkbox checked="true" color="dark"></ion-checkbox>
          <ion-checkbox checked="false" color="dark"></ion-checkbox>
          <ion-checkbox checked="false" color="dark"></ion-checkbox>
          <ion-checkbox checked="false" color="dark"></ion-checkbox>
          <ion-checkbox checked="false" color="dark"></ion-checkbox>          
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
            <h1 class="slide-title">메뉴 선택하기</h1>

            <ion-segment value="menu" v-model="selectMenu" >
                <ion-segment-button value="classic">
                    <ion-label>클래식</ion-label>
                </ion-segment-button>
                <ion-segment-button value="freshLight">
                    <ion-label>프레쉬&라이트</ion-label>
                </ion-segment-button>
                <ion-segment-button value="premium">
                    <ion-label>프리미엄</ion-label>
                </ion-segment-button>
            </ion-segment>

            <div class="box-container" v-if="selectMenu === 'classic'">

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">클래식1</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">480Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">클래식2</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">380Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">클래식3</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">480Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

            </div>

            <div class="box-container" v-else-if="selectMenu === 'freshLight'">

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">프레쉬</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">480Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">프레쉬</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">380Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">프레쉬</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">480Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

            </div>

            <div class="box-container" v-else-if="selectMenu === 'premium'">

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">프리미엄</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">480Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">프리미엄</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">380Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title class="menu-name">프리미엄</ion-card-title>
                  <ion-card-subtitle class="menu-kcal">480Kcal</ion-card-subtitle>
                </ion-card-header>
              </ion-card>

            </div>

          </div>
        </ion-slide>
    
        <ion-slide>
          <div>
            <h1 class="slide-title">빵 선택하기</h1>

            <div class="box-container">

              <ion-card class="bread-box">
                <ion-card-header>
                  <ion-card-title>위트</ion-card-title>
                  <ion-card-subtitle>378Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="bread-box">
                <ion-card-header>
                  <ion-card-title>파마산 오레가노</ion-card-title>
                  <ion-card-subtitle>378Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="bread-box">
                <ion-card-header>
                  <ion-card-title>플랫 브레드</ion-card-title>
                  <ion-card-subtitle>378Kcal</ion-card-subtitle>
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
            <h1 class="slide-title">추가토핑 선택하기</h1>

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
            <h1 class="slide-title">야채&소스 선택하기</h1>

            <ion-segment value="vegitableSorce" v-model="selectVegitableSource" >
              <ion-segment-button value="vegitable">
                  <ion-label>야채</ion-label>
              </ion-segment-button>
              <ion-segment-button value="source">
                  <ion-label>소스</ion-label>
              </ion-segment-button>
            </ion-segment>

            <div class="box-container" v-if="selectVegitableSource === 'vegitable'">

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>야아채</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>야아채</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>야아채</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

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
            <h1 class="slide-title">세트 선택하기</h1>

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

  <ExploreContainer name="Tab 2 page" />
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

  .menu-box, .toping-box, .salary-box, .set-box {
    width: 100px;
    height: 100px;
  }

  .white-circle, .dark-circle {
    border-radius: 50%;
    border: black solid 1px;
    width: 30px;
    height: 30px;
    display: flex;
  }

  ion-checkbox {
    --border-radius: 50%; 
    --checkmark-color: dark; 
    --border-color: #c4c4c4; 
    --background: #c4c4c4;
    width: 10px;
    height: 10px;
    margin: 5px;
  }

  ion-segment-button {
    --color-checked: #111111;
    --background-hover: none;
    --color: #c4c4c4;
    --color-checked: #111111;
    --indicator-color	: none;
  }

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
IonSlides, IonSlide, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, 
  IonSlides, IonSlide, IonSegment, IonSegmentButton, IonLabel
   },
  data() {
    return {
      selectMenu: 'classic',
      selectVegitableSource: 'vegitable'
    }
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    return { 
      slideOpts
    }
  }
}

</script>