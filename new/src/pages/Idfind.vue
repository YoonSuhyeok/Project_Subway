<template>
  <q-page>
    <q-tabs
      v-model="segmentModel"
      dense
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab name="idfind" label="아이디 찾기" />
      <q-tab name="pwdfind" label="비밀번호 변경" />
    </q-tabs>
    <q-tab-panels v-model="segmentModel" animated>
      <q-tab-panel name="idfind">
        <div>
          <q-input v-model="id" label="이름" stack-label />
          <q-input v-model="pwd" label="휴대폰 번호" stack-label />
          <q-btn
            @click="login()"
            style="margin-top: 10px; width: 100%"
            color="secondary"
            text-color="black"
            label="아이디 찾기"
          />
        </div>

        <div>
          <p>
            - 회원님의 가입 시 입력한 이름과 휴대폰번호로 아이디 정보를 찾을 수
            있습니다.<br /><br />
            - 네이버, 카카오톡, 삼성 앱카드, 애플아이디로 가입하신 회원님은 각
            해당 서비스를 통해 아이디/비밀번호를 찾아 주시기 바랍니다.
          </p>
        </div>
      </q-tab-panel>
      <q-tab-panel name="pwdfind">
        <div>
          <q-input v-model="id" label="이름" stack-label />
          <q-input v-model="pwd" label="이메일 주소" stack-label />
          <q-btn
            @click="login()"
            style="margin-top: 10px; width: 100%"
            color="secondary"
            text-color="black"
            label="비밀번호 재설정"
          />
        </div>

        <div>
          <p>
            - 비밀번호 재설정 선택 후 이메일을 확인해주세요.<br /><br />
            - 메일을 확인할 수 없는 경우, 스팸메일함을 확인해주세요.<br /><br />
            - 네이버, 카카오톡, 삼성 앱카드, 애플아이디로 가입하신 회원님은 각
            해당 서비스를 통해 아이디/비밀번호를 찾아 주시기 바랍니다.
          </p>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <div></div>
  </q-page>
</template>

<style>
p {
  padding: 30px 10px;
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class IdfindPage extends Vue {
  segmentModel = 'idfind';
  id = '';
  pwd = '';

  login() {
    console.log('기능 구현 아직');
  }
}
</script>
