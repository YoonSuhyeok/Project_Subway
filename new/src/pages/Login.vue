<template>
  <q-page padding>
    <!-- content -->

    <div
      class="logo"
      style="
        margin-top: 6vh;
        margin-left: 12vh;
        margin-right: 12vh;
        margin-bottom: 5vh;
      "
    >
      <q-img
        style="image-rendering: optimizequality"
        src="../assets/img/logo.png"
      />
      <!-- 
        <img src="../assets/img/logo.png"
      style="height:50px; width:50px;">
        <img src="../assets/img/logo.svg"></img>
         -->
    </div>
    <div style="margin-top: 2vh; font-size: 3.3vmax; text-align: center">
      서브웨이 마스터와<br /><strong>더 맛있고 건강한 레시피</strong>
    </div>

    <div
      class="loginBox"
      style="margin-top:50px; margin-left:30px; margin-right:30px; border"
    >
      <q-input
        color="green"
        v-model="email"
        label="이메일 주소"
        stack-label
        :dense="dense"
      />
      <q-input
        color="green"
        v-model="password"
        type="password"
        label="비밀번호"
        stack-label
        :dense="dense"
      />
      <q-btn
        outline
        @click="login()"
        style="margin-top: 4.5vh; width: 100%"
        color="white"
        text-color="black"
        label="Login"
      />
    </div>

    <div class="loginBtn">
      <div style="color: #636363;">회원이 되고 싶으신가요?</div>
      <div style="color: #636363">아이디/PW를 잊으셨나요?</div>
      <q-btn
        flat
        style="color: #2f2f2f; font-weight: bold"
        label="회원가입"
        @click="signin()"
      />
      <q-btn
        flat
        style="color: #2f2f2f; font-weight: bold"
        label="아이디/PW찾기"
        @click="non()"
      />
    </div>

    <!-- <div style="margin-top:10px; text-align: center;">
      <div style="color: #636363">아직 서브웨이 마스터의 회원이 아니시라면,</div>
      <q-btn flat style="color:#2F2F2F; font-weight:bold" label="회원가입" />/
      <q-btn flat style="color:#2F2F2F; font-weight:bold " label="문의하기" />
    </div> -->
  </q-page>
</template>

<style scoped>
  .loginBtn {
    display: grid; 
    margin-top: 3.5vh; 
    justify-items: center; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr;
  }
</style>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  watch: {
    login(state: boolean) {
      this.loginState(state);
    },
  },
})
export default class LoginPage extends Vue {
  loginType = 0;
  email = '';
  password = '';
  dense = 'dense';

  loginState(login: boolean) {
    return this.$store.getters['moduleUser/loginState'] as boolean;
  }

  async login() {
    await this.$store.dispatch('moduleUser/login', {
      email: this.email,
      password: this.password,
    });
    if (this.$store.getters['moduleUser/loginState']) {
      window.location.href = '/tabs';
    }
  }

  signin() {
    void this.$router.push('/join');
  }

  non() {
    alert("미구현 기능입니다.");
  }
}
</script>
