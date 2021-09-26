<template>
  <q-page id="complete">
    <div class="box">
      <q-card>
        <q-card-section class="text-center">
          <div class="text-h6 text-bold">회원 가입 완료</div>
          <div class="text-caption text-grey">
            이제 나만의 레시피를 만들어보세요!
          </div>
        </q-card-section>
        <q-card-actions vertical>
          <q-btn color="green" @click="go()">로그인하기</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.box {
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 250px;
  margin: auto;
  text-align: center;
}
</style>

<script>
import { Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import AxiosService from 'src/service/axios.service';

export default class CompleteSign extends Vue {
  $store = useStore();

  async go() {
    await AxiosService.instance
      .post('/user', {
        email: this.$store.getters['moduleUser/email'],
        password: this.$store.getters['moduleUser/password'],
        nickname: this.$store.getters['moduleUser/nickname'],
      })
      .then((response) => {
        if (response.data === 'success') void this.$router.push('/login');
        else {
          alert('가입에 오류가 발생하였습니다.');
          void this.$router.push('/join');
        }
      });
  }
}
</script>
