<template>
  <q-page>
    <q-list bordered>
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-checkbox v-model="accept1" />
          </q-item-section>
          <q-item-section>
            <q-item-label>이용약관 동의 (필수)</q-item-label>
          </q-item-section>
        </template>
        <q-card>
          <q-card-section>
            <provision-1></provision-1>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-checkbox v-model="accept2" />
          </q-item-section>
          <q-item-section>
            <q-item-label>개인정보처리방침 (필수)</q-item-label>
          </q-item-section>
        </template>
        <q-card>
          <q-card-section>
            <provision-2></provision-2>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-item>
        <q-item-section avatar>
          <q-checkbox v-model="accept3" />
        </q-item-section>
        <q-item-section>
          <q-item-label>SNS 광고성 정보 동의 (선택)</q-item-label>
          <q-item-label caption
            >다양한 이벤트와 주문 정보를 보내드립니다.</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-checkbox v-model="accept4" />
        </q-item-section>
        <q-item-section>
          <q-item-label>"광고성 푸시알림 수신 동의 (선택)"</q-item-label>
          <q-item-label caption
            >다양한 이벤트와 쿠폰, 할인정보를 보내드립니다.</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
    <q-item>
      <q-item-section avatar>
        <q-checkbox v-model="acceptAll" />
      </q-item-section>
      <q-item-section>
        <q-item-label>약관 전체 동의</q-item-label>
      </q-item-section>
    </q-item>

    <p>
      이용약관/개인정보 수집 및 허용/개인정보 국외 이전 동의/ 만 14세 이상임을
      확인(필수)
    </p>

    <div style="display: flex; justify-content: center">
      <q-btn
        style="background: #128d15; width: 90%"
        color="#128D15;"
        text-color="white"
        label="확인"
        @click="checkProvision()"
      />

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">약관 동의 필요</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            회원가입을 위해선 필수 약관에 동의하셔야 합니다.
          </q-card-section>

          <q-card-section align="right">
            <q-btn flat label="확인" color="green" v-close-popup />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<style scoped>
p {
  padding: 50px;
}
</style>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import provision1 from 'components/Provision1.vue';
import provision2 from 'components/Provision2.vue';

@Options({
  components: {
    provision1,
    provision2,
  },
  watch: {
    acceptAll() {
      if (this.accept1 == false) this.accept1 = !this.accept1;
      if (this.accept2 == false) this.accept2 = !this.accept2;
      if (this.accept3 == false) this.accept3 = !this.accept3;
      if (this.accept4 == false) this.accept4 = !this.accept4;
      if (this.acceptAll == false) {
        this.accept1 = !this.accept1;
        this.accept2 = !this.accept2;
        this.accept3 = !this.accept3;
        this.accept4 = !this.accept4;
      }
    },
  },
})
export default class ProvisionPage extends Vue {
  alert = false;

  accept1 = false;
  accept2 = false;
  accept3 = false;
  accept4 = false;
  acceptAll = false;

  url = '/join/privacy';

  async created() {
    await this.$store.dispatch('setJoinToolbarName', '약관동의');
  }

  checkProvision() {
    if (this.accept1 == true && this.accept2 == true)
      void this.$router.push(this.url);
    else this.alert = true;
  }
}
</script>
