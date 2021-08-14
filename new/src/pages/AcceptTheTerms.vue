<template>
  <q-page padding >
    
    <div style="margin-left: 40px; margin-right:40px;">
      
      <div style="display:grid; border: 5px solid; border-radius: 7px; border-color: transparent; background: #F8F8F8">
        <q-checkbox color="positive" v-model="one">이용약관 동의 (필수)</q-checkbox>
        <q-checkbox color="positive" v-model="two">개인정보처리방침 (필수)</q-checkbox>
        <q-checkbox color="positive" v-model="one">SNS 광고성 정보 동의 (선택)</q-checkbox>
        <div style="color:#B4B4B4;" class="self-center full-width no-outline" tabindex="0">다양한 이벤트와 쿠폰, 주문 정보를 보내드립니다.</div>
        <q-checkbox color="positive" v-model="one">광고성 푸시알림 수신 동의 (선택)</q-checkbox>
        <div style="color:#B4B4B4;" class="self-center full-width no-outline" tabindex="0">다양한 이벤트와 쿠폰, 할인정보를 보내드립니다.</div>        
      </div>
      
      <div style="margin-top:5px; display:grid; border: 5px solid; border-radius: 7px; border-color: transparent; background: #F8F8F8">
        <q-checkbox color="positive">약관 전체 동의</q-checkbox> 
      </div>

      <q-btn style="background: #128D15; margin-top:10px; width:100%" color="#128D15;" text-color="white" label="확인" :to="url"/>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";


export default class AcceptPage extends Vue {
  one = true;
  two = true;
  three = true;
  foru = true;
  url = '/join/privacy';

  async created() {
    console.log(this.$store)
    this.$store.dispatch('setJoinToolbarName', '약관동의');
  }
}
</script>
