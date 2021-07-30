<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>
          <div class="title">
            <img src="/assets/img/logo.png" class="title-img">
            <p>SUBWAY MASTER</p>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      

      <ion-slides pager="true" :options="slideOpts"  style="--bullet-background-active:#111111; --bullet-background:darkgray;">
        <ion-slide>
        <div>
          <h5 class="slide-title">이번주 베스트 조합</h5>
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
        </div>
        </ion-slide>
        <ion-slide>
          <div>
          <h5 class="slide-title">이달의 베스트 조합</h5>
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
        </div>
        </ion-slide>
        <ion-slide>
          <div>
          <h5 class="slide-title">아침은 드셨나요?<br>아침 꿀조합</h5>
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
        </div>
        </ion-slide>
      </ion-slides>


      <div class="eventAds">
        <img src="/assets/img/tab1/event-1.png" class="eventIMG">
        <img src="/assets/img/tab1/event-2.png" class="eventIMG">
      </div>


    </ion-content>
  </ion-page>
</template>

<style>

  .title-img {
    width: 30px;
    margin-right: 5px;
  }

  .title {
    font-weight: bold;
    color: #26923A;
    display: flex;
    align-items: center;
    width: 250px;
    margin:auto;
  }

  .slide-title {
    width: 100%;
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

  .temporary-img-card {
    width: 100%; 
    height: auto; 
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .eventAds {
    margin-top: 10%;
    text-align: center;
  }

</style>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSlides, IonSlide} from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSlides, IonSlide},
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };

    return {
      slideOpts,
      
    }
  }
}
</script>