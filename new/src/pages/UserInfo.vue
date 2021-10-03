<template>
  <q-page>
    <div>
      <q-card flat bordered>
        <q-card-section horizontal>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/img/ProfileEX.png" />
              </q-avatar>
            </q-item-section>
          </q-item>

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
              <q-btn class="text-caption" flat color="black" disable>{{
                email
              }}</q-btn>
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
      <q-btn color="green" class="full-width">앱 환경설정</q-btn>
      <q-btn color="green" class="full-width">약관 및 정책</q-btn>
    </div>
  </q-page>
</template>

<style scoped></style>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { useStore } from 'vuex';

export default class UserInfoPage extends Vue {
  nickname = '';
  email = '';
  $store = useStore();

  init() {
    this.nickname = this.$store.getters['moduleUser/nickname'];
    this.email = this.$store.getters['moduleUser/email'];
  }

  created() {
    this.init();
  }
}
</script>
