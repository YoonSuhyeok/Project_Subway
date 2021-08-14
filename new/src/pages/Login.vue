<template>
  <q-page padding>
    <!-- content -->

    <div class="logo" style="margin:100px">
      <q-img
        src="../assets/img/logo.png"
        :ratio="1"
        />
    </div>
    <div style="margin-top:-50px; font-size:x-large; text-align: center;">hihi서브웨이 마스터와<br><strong>더 맛있고 건강한 레시피</strong></div>

<div>
  <q-input v-model="email" label="Standard" />
<q-input v-model="password" label="Standard" />  

</div>
  </q-page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

// @Options(components:{})
export default class LoginPage extends Vue {
  loginType = 0;
  email = 'cooltime15@gmail.com';
  password = '1234';

  changeBtn(type: number){
    this.loginType = type;
    return this.loginType;
  }

  async login(email: string, password: string){
    this.$store.dispatch('moduleUser/login', {email: email, password: password});
    //const loginCheck = await Axio
  }

}
</script>
