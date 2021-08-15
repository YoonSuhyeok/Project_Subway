<template>
  <q-page padding>
    <div style="margin-left: 40px; margin-right: 40px">
      <p>{{ signState }}* 표시는 필수 입력 항목입니다.</p>
      <q-input
        color="green"
        v-model="nickname"
        label="닉네임 *"
        stack-label
        :dense="true"
      />
      <q-input
        color="green"
        v-model="email"
        label="이메일 *"
        stack-label
        :dense="true"
      />
      <q-input
        color="green"
        v-model="password"
        type="password"
        label="비밀번호 *"
        stack-label
        :dense="true"
      />
      <q-input
        color="green"
        v-model="password2"
        type="password"
        label="비밀번호 확인 *"
        stack-label
        :dense="true"
      />
      <q-btn
        @click="sign"
        style="background: #128d15; margin-top: 10px; width: 100%"
        color="#128D15;"
        text-color="white"
        label="확인"
        :to="url"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class PrivacyPage extends Vue {
  nickname = '';
  email = '';
  password = '';
  password2 = '';

  url = '/join/privacy';

  async created() {
    this.$store.dispatch('setJoinToolbarName', '회원가입');
  }

  get signState() {
    return this.$store.getters['moduleUser/signState'];
  }

  sign() {
    this.$store.dispatch('moduleUser/sign', {
      email: this.email,
      password: this.password,
      nickname: this.nickname,
    });

    if (this.password != this.password2) {
      alert('비밀번호가 동일하지 않습니다.');
      return;
    }
    const signState: boolean = this.$store.getters[
      'moduleUser/signState'
    ] as boolean;

    if (signState) {
      this.init();
      window.location.href = '/';
    }
  }

  init() {
    this.nickname = '';
    this.email = '';
    this.password = '';
    this.password2 = '';
  }
}
</script>
