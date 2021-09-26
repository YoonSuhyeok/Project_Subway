<template>
  <q-page padding>
    <div style="margin-left: 7.8vw; margin-right: 7.8vw">
      <p style="font-size: 1.5vmax; color: #494949">
        * 표시는 필수 입력 항목입니다.
      </p>
      <form>
        <q-input
          color="green"
          v-model="nickname"
          label="닉네임 *"
          stack-label
          :dense="dense"
        />
        <q-input
          color="green"
          v-model="email"
          label="이메일 *"
          stack-label
          :dense="dense"
        />
        <q-input
          color="green"
          v-model="password"
          type="password"
          label="비밀번호 *"
          stack-label
          :dense="dense"
          autocomplete="off"
        />
        <q-input
          color="green"
          v-model="password2"
          type="password"
          label="비밀번호 확인 *"
          stack-label
          :dense="dense"
          autocomplete="off"
        />
      </form>
      <q-btn
        @click="sign"
        style="margin-top: 3vh; background: #128d15; width: 100%"
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
import { useStore } from 'vuex';

export default class PrivacyPage extends Vue {
  dense = 'dense';
  nickname = '';
  email = '';
  password = '';
  password2 = '';
  url = '';

  $store = useStore();

  async created() {
    await this.$store.dispatch('setJoinToolbarName', '회원가입');
  }

  get signState() {
    return this.$store.getters['moduleUser/signState'];
  }

  async sign() {
    if (this.nickname == '') {
      alert('닉네임을 입력해주세요.');
      return;
    }

    if (this.email == '') {
      alert('이메일을 입력해주세요.');
      return;
    }

    if (
      this.password != this.password2 ||
      this.password == '' ||
      this.password2 == ''
    ) {
      alert('비밀번호가 동일하지 않습니다.');
      return;
    }

    await this.$store.dispatch('moduleUser/sign', {
      email: this.email,
      password: this.password,
      nickname: this.nickname,
    });

    const signState = this.$store.getters['moduleUser/signState'];

    if (signState) {
      this.$store.commit('moduleUser/email', this.email);
      this.$store.commit('moduleUser/setNickname', this.nickname);
      this.$store.commit('moduleUser/setPassword', this.password);
      await this.$store
        .dispatch('moduleUser/sendmail', this.email)
        .then(void this.$router.push('/join/certify'));
      alert('입력하신 메일로 인증번호가 발송되었습니다.');
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
