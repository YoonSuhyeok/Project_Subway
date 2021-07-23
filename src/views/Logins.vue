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
    
        /*window.Kakao.init('4a297ff368ab0580ea37b40f07e5990d');
        console.log(window.Kakao.isInitialized());

        const kakaobtn = async function (){
            const params = {
                redirectUri: "http://localhost:8101/logins",
            };
            window.Kakao.Auth.authorize(params)         
        };
        
        if(window.location.search.substr(6)){
            const code = window.location.search.substr(6);
            const result = AxiosService.instance.post('/auth/kakao', ({"str": "TokenPost"}),{
                headers: {
                'Authorization': `Bearer ${code}`
                }
            }).then(t => {
                store.dispatch('setToken', t.data);
                window.Kakao.Auth.setAccessToken(t.data.access_token);
                window.Kakao.API.request({
                url: '/v2/user/me',
                success: function(response) {
                    window.location.href = '/tabs/tab1'
                },
                fail: function(error) {
                    window.location.href = '/'
                }
                });
            })
            
        }

        const googlebtn = async function(){
            const client_id = "1003443334313-5ro27fto5batt35loffg7777r44r20hb.apps.googleusercontent.com"
            const redirect_url = 'http://localhost:8101/logins'
            
            const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${redirect_url}&client_id=${client_id}`
            window.location.href = url;
            //`https://oauth2.googleapis.com/token?code=4/0AX4XfWgdigyyBdCfN3jE_sN_OhhjH4LeXisIJTUuL0H6Zg1lfs0Gph9Z0hEDkskeAbINvA&client_id=1003443334313-5ro27fto5batt35loffg7777r44r20hb.apps.googleusercontent.com&client_secret=m6A7tTvRpAcH3-HeedlwkVx8&redirect_uri=http://localhost:8101/logins&grant_type=authorization_code`
        }

        const naverbtn = async function(){
            const client_id = '9oluv5olg8TKDOtsVi6P';
            const redirect_url = 'http://localhost:8101/logins';
            const url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id='+client_id+'&redirect_uri='+redirect_url+'&state=1234';
            window.location.href = url;
            //YmZr2LWpFOeC7NdjIH&state=1234
        }*/

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
            facebook: {
                idkind: 'FaceBook',
                clr: '#3C599F'
            }, 
            /*kakaobtn,
            googlebtn,
            naverbtn,*/
            value: computed( () => store.getters.getToken )
        }
    }
}
</script>