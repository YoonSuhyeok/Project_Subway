<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <div>
            <h1 class="slide-title">메뉴 선택하기</h1>

            <div class="box-container">

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title>미트볼</ion-card-title>
                  <ion-card-subtitle>480Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title>비엘티</ion-card-title>
                  <ion-card-subtitle>380Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="menu-box">
                <ion-card-header>
                  <ion-card-title>에그마요</ion-card-title>
                  <ion-card-subtitle>480Kcal</ion-card-subtitle>
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

            <div class="box-container">

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>베이컨 비츠</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="salary-box">
                <ion-card-header>
                  <ion-card-title>베이컨 비츠</ion-card-title>
                  <ion-card-subtitle>51Kcal</ion-card-subtitle>
                </ion-card-header>

                <!-- <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content> -->
              </ion-card>

              <ion-card class="salary-box">
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
  }

  .bread-box {
    border-radius: 100%;
  }

  .slide-title {
    width: 100%;
  }

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
IonSlides, IonSlide } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, 
  IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
}
</script>