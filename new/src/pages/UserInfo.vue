<template>
  <q-page>
    <div>
      <q-card flat bordered>
        <q-card-section horizontal>
          <q-item>
            <q-item-section avatar>
              <q-avatar size="100px">
                <img src="../assets/img/ProfileEX.png" />
              </q-avatar>
            </q-item-section>
          </q-item>

          <q-item class="flex column">
            <q-item-section>
              <q-item class="text-h5">닉네임</q-item>
            </q-item-section>
            <div class="flex">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h2">0</q-item-label>
                  <q-item-label caption>조합</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div>
                    <q-item-label class="text-h2">2</q-item-label>
                    <q-item-label caption>댓글</q-item-label>
                  </div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div>
                    <q-item-label class="text-h2">0</q-item-label>
                    <q-item-label caption>공유</q-item-label>
                  </div>
                </q-item-section>
              </q-item>
            </div>
            <div class="flex">
              <q-btn flat color="black" disable>이메일</q-btn>

              <q-separator vertical />

              <q-btn flat>비밀번호 변경</q-btn>
            </div>
          </q-item>
        </q-card-section>
      </q-card>
    </div>

    <div class="flex flex-center">새로운 요소 추가 공간</div>

    <q-footer>
      <div class="flex flex-center q-gutter-md bg-white">
        <q-btn color="green" class="full-width">앱 환경설정</q-btn>
        <q-btn color="green" class="full-width">약관 및 정책</q-btn>
      </div>
    </q-footer>
  </q-page>
</template>

<style scoped></style>

<script lnag="ts">
import { Vue, Options } from 'vue-class-component';

export default class UserInfoPage extends Vue {}
</script>
