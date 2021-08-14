<template>
  <q-page padding>
    <div style="margin-left: 40px; margin-right:40px;">
      <p>* 표시는 필수 입력 항목입니다.</p>
      <q-input color="green" v-model="name" label="이름 *" stack-label :dense="dense" /> 
      <q-input color="green" v-model="email" label="이메일 *" stack-label :dense="dense" /> 
      <q-input color="green" v-model="password" type="password" label="비밀번호 *" stack-label :dense="dense" /> 
      <q-input color="green" v-model="password2" type="password" label="비밀번호 확인 *" stack-label :dense="dense" /> 
      <q-btn style="background: #128D15; margin-top:10px; width:100%" color="#128D15;" text-color="white" label="확인" :to="url"/>
    </div>
  </q-page>
</template>

<script lang="ts">
import { watch } from 'fs';
import { Options, Vue } from 'vue-class-component';

export default class PrivacyPage extends Vue {
  async created() {
    console.log(this.$store)
    this.$store.dispatch('setJoinToolbarName', '회원가입');
  }
}
</script>
