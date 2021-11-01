<template>
    <q-page>
        <div class="text-center">
            <p class="text-center">조합식</p>
            <q-card>
                <q-card-section>
                    <h5>당신의 조합식</h5>
                </q-card-section>
                <q-card-section>
                    <div>
                        <p>조합식 이름 : {{ recipe.name }}</p>
                        <p>만든이 : {{ recipe.user }}</p>
                        <p>메뉴 : {{ menuName }}</p>
                        <p>빵 : {{ breadName }}</p>
                        <p>extra : {{ recipe.extraId }}</p>
                        <p>Ingredient : {{ recipe.igdId }}</p>
                    </div>
                    <div>
                        <q-input 
                            color="green"
                            v-model="recipeName"
                            label="조합 이름"
                            :dense="dense"
                        />
                        <q-btn
                            outline
                            @click="setName()"
                            style="margin-top: 4.5vh; width: 100%"
                            color="white"
                            text-color="black"
                            label="완성"
                        />
                    </div>
                </q-card-section>
            </q-card>

            <q-dialog v-model="confirm">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">이름 확정</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        해당 조합의 이름을 "{{ recipeName }}"으로 하시겠어요?
                    </q-card-section>

                    <q-card-section align="right">
                        <q-btn flat label="아니오" color="green" v-close-popup />
                        <q-btn flat label="네" color="green" v-on:click="go()"/>
                    </q-card-section>
                </q-card>
            </q-dialog>
        </div>
    </q-page>
</template>

<style scoped>

</style>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { Recipe } from '../store/recipe.store';
import AxiosService from '../service/axios.service';

export default class Makesand extends Vue {
    $store = useStore();
    userName = '';
    recipeName = '';
    dense = 'dense';
    breadName = '';
    menuName = '';
    confirm = false;

    recipe: Recipe = {
        name: '',
        user: '',
        breadId: 0,
        menuId: 0,
        extraId: '',
        igdId: ''
    }

    async created() {
        if(this.checkLogin()) {
            this.recipe = {
                name: '',
                user: this.$store.getters['moduleUser/email'],
                breadId: this.$store.getters['moduleRecipe/BreadId'],
                menuId: this.$store.getters['moduleRecipe/MenuId'],
                extraId: this.$store.getters['moduleRecipe/ExtraId'],
                igdId: this.$store.getters['moduleRecipe/IgdId']
            }
        } else {
            alert("로그인이 필요한 서비스입니다.");
            //void this.$router.push('/login');
        }
        await this.mapping();
    }

    checkLogin() {
        if (this.$store.getters['moduleUser/loginState'] === undefined || this.$store.getters['moduleUser/loginState'] === false) return false;
        else return true;
    }

    async setName() {
        this.recipe.name = this.recipeName;
        await this.$store.dispatch('moduleRecipe/setRecipe', this.recipe);
        console.log(this.$store.getters['moduleRecipe/Recipe']);
        this.confirm = true;
    }

    async go() {
        await this.$store.dispatch('moduleUser/pushRecipe', this.recipe);
        const postResponse = await this.$store.dispatch('moduleUser/sendRecipe', {
            Recipe_name: this.recipe.name,
            User_id: this.recipe.user,
            Bread_id: this.recipe.breadId,
            Menu_id: this.recipe.menuId,
            Ingredient: this.recipe.igdId,
            Extra: this.recipe.extraId
        });
        if(postResponse.data == 'success') {
            alert("레시피 제작 완료");
            void this.$router.push('/tabs/tab4');
        } else alert('레시피 보내기 에러');
    }

    async mapping() {
        const breadResponse = await AxiosService.instance.get(`/bread/${this.recipe.breadId}`);
        this.breadName = breadResponse.data['Bread_name'];
        const menuResponse = await AxiosService.instance.get(`/menu/${this.recipe.menuId}`)
        this.menuName = menuResponse.data['Menu_name'];
    }
}
</script>
