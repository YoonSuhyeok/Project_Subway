<!--로그인 창-->

<template>
    <LoginComponent></LoginComponent>
</template>


<script>
import LoginComponent from '../components/LoginComponent.vue'
import { useStore } from 'vuex';
import AxiosService from "@/service/axios.service"
import { computed } from '@vue/runtime-core';
//import axios from 'axios';

export default {
    name: 'logins',
    components: { LoginComponent },
    setup () {
        const store = useStore();
        
        return{
            kakao: {
                idkind:'Kakao Talk',
                clr: '#F9E83B'
            },
            naver: {
                idkind: 'Naver ID',
                clr: '#1ED600'
            },
            google: {
                idkind: 'Google Id',
                clr: '#EB5042'
            },
            value: computed( () => store.getters.getToken )
        }
    }
}
</script>  