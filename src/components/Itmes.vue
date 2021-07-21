<template>
    <div id="container">
        <ion-card class="menu-box">
            <ion-card-header class="menu-box-header" @click='select(info.type, info.name, info.kcal, info.src)'>
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
            const select = (type, name, kcal, src) => {
                console.log(type)
                console.log(name)
                console.log(kcal)
                console.log(src);
                switch(type){
                    case 0: {
                        const list = store.getters.getSelectMenuName;
                        if(list == name) { 
                            store.dispatch('selectMenuName', '' ); 
                            store.dispatch('selectMenuKcal', '' ); 
                            store.dispatch('selectMenuSrc', '' ); 
                        }
                        else { 
                            store.dispatch('selectMenuName', name );
                            store.dispatch('selectMenuKcal', kcal );
                            store.dispatch('selectMenuSrc', src );
                        }
                        break;
                    }
                    case 1: {
                        const list = store.getters.getSelectBreadName;
                        if(list == name) { 
                            store.dispatch('selectBreadName', '' ); 
                            store.dispatch('selectBreadKcal', '' ); 
                            store.dispatch('selectBreadSrc', '' ); 
                        }
                        else { 
                            store.dispatch('selectBreadName', name );
                            store.dispatch('selectBreadKcal', kcal );
                            store.dispatch('selectBreadSrc', src ); 
                        }
                        break;
                    }
                    case 3: {
                        const list = store.getters.getSelectVegeName;
                        if(list == name) { 
                            store.dispatch('selectVegeName', '' );
                            store.dispatch('selectVegeKcal', '' );
                            store.dispatch('selectVegeSrc', '' ); 
                        }
                        else { 
                            store.dispatch('selectVegeName', name );
                            store.dispatch('selectVegeKcal', kcal );
                            store.dispatch('selectVegeSrc', src ); 
                        }
                        break;
                    }
                    case 4: {
                        const list = store.getters.getSelectSourceName;
                        console.log(list);
                        if(list == name) { 
                            store.dispatch('selectSourceName', '' ); 
                            store.dispatch('selectSourceKcal', '' ); 
                            store.dispatch('selectSourceSrc', '' ); 
                        }
                        else { 
                            store.dispatch('selectSourceName', name ); 
                            store.dispatch('selectSourceKcal', kcal ); 
                            store.dispatch('selectSourceSrc', src ); 
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