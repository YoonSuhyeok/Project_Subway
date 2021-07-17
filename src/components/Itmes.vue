<template>
    <div id="container">
        <ion-card class="menu-box">
            <ion-card-header class="menu-box-header" @click='select(info.type, info.name)'>
                <img :src="info.src" :alt="info.name" />
                <ion-card-title class="menu-name">{{ info.name }}</ion-card-title>
                <ion-card-subtitle class="menu-kcal">{{ info.kcal }}Kcal</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
    </div>
</template>

<style scoped>

    @charset "utf-8";

    @font-face {
        font-family: 'NanumGothicExtraBold';
        src: url(../../public/assets/font/NanumGothicExtraBold.ttf);
    }

    .menu-name, .menu-kcal {
        font-weight: bold;
        color: black;
        font-family: NanumGothicExtraBold;
    }

    .menu-box {
        border-radius: 30px;
    }

    @media screen and (max-width: 360px) {
        .menu-box {
            width: 80px;
            height: 90px;
        }

        .menu-name, .menu-kcal {
            font-size: xx-small;
        }

        .menu-kcal {
            display: none;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 480px) {
        .menu-box {
            width: 100px;
            height: 112px;
        }

        .menu-name, .menu-kcal {
            font-size: xx-small;
        }

        .menu-kcal {
            display: none;
        }
  }

    @media screen and (min-width: 480px) and (max-width:768px) {
        .menu-box {
            width: 130px;
            height: 135px;
        }

        .menu-name, .menu-kcal {
            font-size: 10px;
        }
  }

    @media screen and (min-width: 768px) {
        .menu-box {
            width: 200px;
            height: 200px;
        }

        .menu-name, .menu-kcal {
            font-size: 15px;
        }
  }

</style>

<script >
    import { IonCard } from '@ionic/vue';
    import { useStore } from 'vuex';

    export default  {
        props: ["info"],
        components: { IonCard },
        setup(){
            const store = useStore();
            const select = (type, name) => {
                console.log(type)
                console.log(name);
                switch(type){
                    case 0: {
                        const list = store.getters.getSelectMenu;
                        if(list == name) { store.dispatch('selectMenu', '' ); }
                        else { store.dispatch('selectMenu', name ); }
                        break;
                    }
                    case 1: {
                        const list = store.getters.getSelectBread;
                        if(list == name) { store.dispatch('selectBread', '' ); }
                        else { store.dispatch('selectBread', name ); }
                        console.log(store.getters.getSelectBread);
                        break;
                    }
                    case 3: {
                        const list = store.getters.getSelectVegetable;
                        if(list == name) { store.dispatch('selectVegetable', '' ); }
                        else { store.dispatch('selectVegetable', name ); }
                        console.log(store.getters.getSelectVegetable)
                        break;
                    }
                    case 4: {
                        const list = store.getters.getSelectSource;
                        if(list == name) { store.dispatch('selectSource', '' ); }
                        else { store.dispatch('selectSource', name ); }
                        console.log(store.getters.getSelectSource)
                        break;
                    }
                }
                

            }

            return {
                select,
            }
        }
    }
</script>