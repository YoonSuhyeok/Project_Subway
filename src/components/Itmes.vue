<template>
        <ion-card class="menu-box">
            <ion-card-header class="menu-box-header" @click='select(info)'>
                <img class="menu-img" :src="info.src" :alt="info.name" />
                <ion-card-title class="menu-name">{{ info.name }}</ion-card-title>
                <ion-card-subtitle class="menu-kcal">{{ info.kcal }}Kcal</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
</template>

<style scoped>

    @charset "utf-8";

    @font-face {
        font-family: 'NanumGothicExtraBold';
        src: url(../../public/assets/font/NanumGothicExtraBold.ttf);
    }

    .menu-box-header {
        padding: 0;
        margin: 0;
    }

    .menu-name, .menu-kcal {
        font-weight: bold;
        color: black;
        font-family: NanumGothicExtraBold;
    }

    .menu-img {
        padding: 5px;
    }

    @media screen and (max-width: 360px) {
        .menu-box {
            width: 80px;
            height: 90px;
            border-radius: 15px;
            box-shadow: 1px 4px 5px 0px lightgrey;
        }

        .menu-name, .menu-kcal {
            font-size: 1px;
        }

    }

    @media screen and (min-width: 360px) and (max-width:480px) {
        .menu-box {
            width: 100px;
            height: 112px;
        }

        .menu-name, .menu-kcal {
            font-size: xx-small;
        }

        .menu-img {
            height: 60px;
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
            const select = (info) => {
                console.log(info.type)
                console.log(info.name)
                console.log(info.kcal)
                console.log(info.src);
                switch(info.type){
                    case 0: {
                        const currentMenu = store.getters.getSelectMenu;
                        if(currentMenu.name == info.name) { 
                            store.dispatch('selectMenu', '' );
                        }
                        else { 
                            store.dispatch('selectMenu', info );
                        }
                        break;
                    }
                    case 1: {
                        const currentBread = store.getters.getSelectBread;
                        if(currentBread.name == info.name) { 
                            store.dispatch('selectBread', '' ); 
                        }
                        else { 
                            store.dispatch('selectBread', info );
                        }
                        break;
                    }
                    case 3: {
                        const currentVege = store.getters.getSelectVege;
                        if(currentVege.name == info.name) { 
                            store.dispatch('selectVege', '' );
                        }
                        else { 
                            store.dispatch('selectVege', info );
                        }
                        break;
                    }
                    case 4: {
                        const currentSource = store.getters.getSelectSource;
                        if(currentSource.name == info.name) { 
                            store.dispatch('selectSource', '' ); 
                        }
                        else { 
                            store.dispatch('selectSource', info );
                        }
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