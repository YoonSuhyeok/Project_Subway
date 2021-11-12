<template>
  <q-page>
    <div>
      <q-card flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <q-img class="col" src="../assets/img/ProfileEX.png" />
            <q-btn flat style="top: 20px; font-size: 14px; white-space: nowrap" @click="logout()">로그아웃</q-btn>
          </q-card-section>

          <q-item class="flex column">
            <q-item-section>
              <q-item class="text-h5">{{ nickname }}</q-item>
            </q-item-section>
            <div class="flex">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h4">0</q-item-label>
                  <q-item-label caption>조합</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div>
                    <q-item-label class="text-h4">2</q-item-label>
                    <q-item-label caption>댓글</q-item-label>
                  </div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div>
                    <q-item-label class="text-h4">0</q-item-label>
                    <q-item-label caption>공유</q-item-label>
                  </div>
                </q-item-section>
              </q-item>
            </div>
            <div class="flex">
              <q-btn class="text-caption" flat color="black" disable>{{email}}</q-btn>
              <q-btn flat>비밀번호 변경</q-btn>
            </div>
          </q-item>
        </q-card-section>
      </q-card>
    </div>

    <!-- 새로운 요소 추가 div -->
    <div class="flex flex-center"></div>

    <div
      class="flex flex-center q-gutter-md bg-white"
      style="position: absolute; bottom: 20px; width: 100%; margin: auto"
    >
      <q-btn color="green" class="full-width" @click="this.setLoginState(true)">앱 환경설정</q-btn>
      <q-btn color="green" class="full-width" @click="this.setLoginState(false)">약관 및 정책</q-btn>
    </div>
  </q-page>
</template>

<style scoped></style>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import router from '../router';

export default class UserInfoPage extends Vue {
  nickname = '';
  email = '';
  $store = useStore();

  init() {
    this.nickname = this.$store.getters['moduleUser/nickname'];
    this.email = this.$store.getters['moduleUser/email'];
  }

  created() {
    if(this.$store.getters['moduleUser/loginState'] == false) {
      alert("로그인이 필요한 서비스입니다.");
      void this.$router.push('/login');
    }
    else this.init();
  }

  async logout() {
    await this.$store.dispatch('moduleUser/logout');
    alert("조합식을 만들고 싶다면 다시 로그인 해주세요!");
    void this.$router.push('/login');
  }

  setLoginState(bool: boolean) {
    void this.$store.dispatch('moduleUser/setLS', bool);
  }
}
</script>
