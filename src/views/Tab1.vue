<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="ion-no-border">
          <div class="title">
            <img src="/assets/img/logo.png" class="title-img">
            <span class="title-logo">SUBWAY MASTER</span>
          </div>
      </ion-header>
    
      

      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
        <div>
          <h5 class="slide-title">이번주 베스트 조합</h5>
          <div class="card-container">
            
            <rankBox :rank="{ user:'윤수혁', title:'무야호 샌드', kcal:'3.7', src:'/assets/img/tab1/temporary-2nd.png', rank:2 }" />
            <rankBox :rank="{ user:'윤수혁', title:'머리가자라는 미트볼', kcal:'3.7', src:'/assets/img/tab1/temporary-1st.png', rank:1 }" />
            <rankBox :rank="{ user:'윤수혁', title:'무야호 샌드', kcal:'3.7', src:'/assets/img/tab1/temporary-3rd.png', rank:3 }" />

          </div>
        </div>
        </ion-slide>
        <ion-slide>
          <div>
          <h5 class="slide-title">이달의 베스트 조합</h5>
          <div class="card-container">
            
            <rankBox style="height:127px; width:97px; margin-top:27px;" :rank="{ user:'윤수혁', title:'무야호 샌드', kcal:'3.7', src:'/assets/img/tab1/temporary-2nd.png', rank:2 }" />
            <rankBox style="height:150px; width:120px;" :rank="{ user:'윤수혁', title:'머리가자라는 미트볼', kcal:'3.7', src:'/assets/img/tab1/temporary-1st.png', rank:1 }" />
            <rankBox style="height:127px; width:97px; margin-top:27px;" :rank="{ user:'윤수혁', title:'무야호 샌드', kcal:'3.7', src:'/assets/img/tab1/temporary-3rd.png', rank:3 }" />

          </div>
        </div>
        </ion-slide>
        <ion-slide>
          <div>
          <h5 class="slide-title">아침은 드셨나요?<br>아침 꿀조합</h5>
          <div class="card-container">
            
            <rankBox style="height:127px; width:97px; margin-top:27px;" :rank="{ user:'윤수혁', title:'무야호 샌드', kcal:'3.7', src:'/assets/img/tab1/temporary-2nd.png', rank:2 }" />
            <rankBox style="height:150px; width:120px;" :rank="{ user:'윤수혁', title:'머리가자라는 미트볼', kcal:'3.7', src:'/assets/img/tab1/temporary-1st.png', rank:1 }" />
            <rankBox style="height:127px; width:97px; margin-top:27px;" :rank="{ user:'윤수혁', title:'무야호 샌드', kcal:'3.7', src:'/assets/img/tab1/temporary-3rd.png', rank:3 }" />

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

<style scoped>

  .title-img {
    width: 30px;
    margin-right: 5px;
    margin-left: 20px;
  }

  .title {
    font-weight: bold;
    color: #26923A;
    display: flex;
    align-items: center;
    width: 200px;
    margin:auto;
    margin-top: 20px;
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
  .eventAds {
    margin-top: 20px;
    text-align: center;
  }

  ion-slides {
    --bullet-background-active:#111111; 
    --bullet-background:darkgray; 
    padding-bottom: 15px;
  }

</style>

<script>
import { IonPage, IonHeader, IonContent, IonSlides, IonSlide} from '@ionic/vue';
import rankBox from '@/components/RankBox.vue';

export default  {
  name: 'Tab1',
  components: { rankBox, IonHeader, IonContent, IonPage, IonSlides, IonSlide},
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    return {
      slideOpts,
      
    }
  }
}
</script>