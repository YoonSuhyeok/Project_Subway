<template>
  <q-page id="sign">
    <div>
      <q-card>
        <q-card-section class="text-center">
          <div class="text-h6 text-bold">인증 번호 입력</div>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="text-subtitle2 text-weight-thin">
            입력한 이메일에 도착한 인증번호를 입력해주세요.
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <q-input
            :dense="dense"
            placeholder="인증 번호"
            mask="######"
            v-model="certkey"
          ></q-input>
        </q-card-section>
        <q-card-actions vertical>
          <q-btn color="green" @click="checkCert()">확인</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style>
#page {
  margin: 100px;
}
input::placeholder {
  text-align: center;
}
input {
  text-align: center;
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { useStore } from 'vuex';

export default class Certify extends Vue {
  dense = 'dense';
  $store = useStore();
  certkey!: number;

  async checkCert() {
    await this.$store.dispatch('moduleUser/certmail', this.certkey).then(
      (response) => {
        console.log(response, typeof response);
        console.log(response.data, typeof response.data);
        if (response.data === 'success') {
          void this.$router.push('/join/complete');
        }
      },
      (error) => {
        if (error.response.data === 'Invaild token') {
          alert('잘못된 인증번호입니다.');
        } else if (error.response.data === 'timeout') {
          alert('인증번호 입력 시간이 초과했습니다.');
        } else {
          console.log('Other Error : ', error.response.data);
        }
      }
    );
  }
}
</script>
