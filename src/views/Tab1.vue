<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>
          <div class="title">
            <img src="/assets/img/logo(nomal).png" class="title_img">
            <img src="/assets/img/SUBWAY MASTER.png" class="title_logo">
          </div>
          <p class="title">이번주 베스트 조합</p>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      

      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <div class="card-container">
            <ion-card class="card-box second">
              <img src="/assets/img/temporary-img.png" class="temporary-img-card">
              <ion-card-header>
                <ion-card-subtitle class="card-box_user">
                  <span class="card-box_user-name">윤수혁</span> 님의
                </ion-card-subtitle>
                <ion-card-title class="bold-title">무야호 샌드</ion-card-title>
              </ion-card-header>
              <ion-card-content class="bold-title">3.7K</ion-card-content>
            </ion-card>

            <ion-card class="card-box first">
              <img src="/assets/img/temporary-img.png" class="temporary-img-card">
              <ion-card-header>
                <ion-card-subtitle class="card-box_user">
                  <span class="card-box_user-name">윤수혁</span> 님의
                </ion-card-subtitle>
                <ion-card-title class="bold-title">무야호 샌드</ion-card-title>
              </ion-card-header>
              <ion-card-content class="bold-title">3.7K</ion-card-content>
            </ion-card>

            <ion-card class="card-box third">
              <img src="/assets/img/temporary-img.png" class="temporary-img-card">
              <ion-card-header>
                <ion-card-subtitle class="card-box_user">
                  <span class="card-box_user-name">윤수혁</span> 님의
                </ion-card-subtitle>
                <ion-card-title class="bold-title">무야호 샌드</ion-card-title>
              </ion-card-header>
              <ion-card-content class="bold-title">3.7K</ion-card-content>
            </ion-card>
      </div>
        </ion-slide>
        <ion-slide>
          <img src="/assets/img/temporary-ad.JPG">
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>

      <div class="bottom-box-container">
        <div class="left">
          <div class="box1">나만의 레시피</div>
          <div class="box2">오늘의 섭웨이</div>
        </div>
        <div class="right"></div>
      </div>

      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<style>
  .title {
    text-align: center;
    font-weight: bold;
  }

  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second, .third {padding: 2% 2% 2% 2%;}

  .first {padding: 4% 2% 4% 2%;}

  .card-box {
    flex-basis: 25%;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 3px 10px gray;
  }

  .bold-title {
    color: black;
    font-weight: bold;
    font-size: 1em;
  }

  .card-box_user {font-size: 5px;}

  .card-box_user-name {color: green;}

  .title_img {
    margin: 3%;
    width: 35px;
  }

  .title_logo {
    margin: 4%;
    width: 200px; 
    height: auto; 
    display: inline;
    margin-left: auto;
    margin-right: auto;
  }

  .temporary-img-card {
    width: 100%; 
    height: auto; 
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .bottom-box-container {
    margin-top: 100px;
    padding: 5% 5% 5% 5%;
    background-color: green;
    border-radius: 50px;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .box1 {
    background-color: pink;
    padding: 30%;
    border-radius: 20px;
    margin: 20px;
  }

  .box2 {
    background-color: skyblue;
    padding: 30%;
    border-radius: 20px;
    margin: 20px;
  }

  .right {
    background-color: khaki;
    padding: 35%;
    border-radius: 20px;
    margin: 20px;
  }

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonSlides, IonSlide} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
  IonSlides, IonSlide},
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