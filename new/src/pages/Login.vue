<template>
  <q-page padding>
    <!-- content -->

    <div
      class="logo"
      style="
        margin-top: 40px;
        margin-left: 100px;
        margin-right: 100px;
        margin-bottom: 100px;
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
    <div style="margin-top: -50px; font-size: x-large; text-align: center">
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
        :dense="true"
      />
      <q-input
        color="green"
        v-model="password"
        type="password"
        label="비밀번호"
        stack-label
        :dense="true"
      />
      <q-btn
        @click="login()"
        style="margin-top: 10px; width: 100%"
        color="white"
        text-color="black"
        label="Login"
      />
    </div>

    <div style="margin-top: 10px; text-align: center">
      <div style="color: #636363">아이디/PW를 잊으셨나요?</div>
      <q-btn
        flat
        style="color: #2f2f2f; font-weight: bold"
        label="아이디/PW찾기"
      />
    </div>

    <div style="margin-top: 10px; text-align: center">
      <div style="color: #636363">
        아직 서브웨이 마스터의 회원이 아니시라면,
      </div>
      <q-btn flat style="color: #2f2f2f; font-weight: bold" label="회원가입" />/
      <q-btn flat style="color: #2f2f2f; font-weight: bold" label="문의하기" />
    </div>
  </q-page>
</template>

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
  url =
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4dad2d25-0acf-469e-87d4-0c2a29e315a7%2Flogo.png?table=block&id=0ba2e4b4-bbcb-4797-bd89-64541384b8db&spaceId=82630f3f-2bcd-4373-852b-daf5d717e746&width=1920&userId=2803cde0-99fc-44e6-8301-d769ec8f443c&cache=v2';

  changeBtn(type: number) {
    this.loginType = type;
    return this.loginType;
  }

  loginState(login: boolean) {
    //return (this.$store.getters['moduleUser/loginState'] as boolean);
  }

  async login() {
    await this.$store.dispatch('moduleUser/login', {
      email: this.email,
      password: this.password,
    });
    if (this.$store.getters['moduleUser/loginState']) {
      window.location.href = '/';
    }
  }
}
</script>
