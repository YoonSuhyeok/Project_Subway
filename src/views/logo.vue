<template>
    <ion-page>
        <ion-content>
            <div class="background">
                <img src="/assets/img/subway-logo.png" class="logo">
            </div>
        </ion-content>
    </ion-page>
</template>

<style>
    

    @media (max-width: 600px) {
        .logo {
            width: 100%;
            height: auto;
        }
    }

    @media (min-width: 600px) {
        .logo {
            width: 40%;
            height: auto;
        }
        .background { text-align: center;}
    }

    .background {
        background-image: url('/assets/img/splash-background.png');
        width: 100%;
        height: 100%;
    }
</style>

<script>
// import { IonButton } from '@ionic/vue';
// import { defineComponent } from 'vue';

// export default defineComponent({
//   components: { IonButton }
// });
</script>