<template>
    <q-page class="page">
        <q-avatar size="300px" class="logoImg">
            <img src="../assets/img/logo.png" />
        </q-avatar>
        <h1>Subway Master</h1>
        <div class="btnGroup">
            <q-btn color="brand" padding="xs lg" @click="loginUrl()">로그인</q-btn>
            <q-btn color="brand" padding="xs lg" @click="joinUrl()">회원가입</q-btn>
        </div>
    </q-page>
</template>

<style scoped>
    .text-brand { color: white !important }
    .bg-brand { background: #128d15 !important }
    h1 {
        text-align: center;
    }
    .page {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background: #E4F5DE;
    }
    .btnGroup {
        width: 50%;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
    }
</style>

<script>
import { Vue } from 'vue-class-component';

export default class Logo extends Vue {
    loginUrl() {
        void this.$router.push('/login');
    }
    joinUrl() {
        void this.$router.push('/join');
    }
}
</script>
