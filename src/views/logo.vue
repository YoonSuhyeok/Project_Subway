<template>
    <ion-page>
        <ion-content>
            <div class="wrap">
                <img src="/assets/img/logo(nomal).png" class="logo">
                <h1 class="logo_text"><b>나만의 서브웨이 레시피</b></h1>
                <div class="box_left"><img src="/assets/img/splash_left.png" alt=""></div>
                <div class="box_right"><img src="/assets/img/splash_right.png" alt=""></div>
            </div>
        </ion-content>
    </ion-page>
</template>

<style>

    .box_left, .box_right {
        display: inline-block;
        position: relative;
    }

    .box_left {
        position: fixed;
        bottom: 0px;
        left: 0px;
    }
    .box_right {
        position: fixed;
        bottom: 0px;
        right: 0px;
    }

    @media screen and (max-width: 480px) {
        .logo {
            width: 120px;
            height: auto;
            margin-top:30%;
            margin-bottom: 5%;
        }

        .logo_text {
            margin-top:50px;
        }

        .box_left, .box_right {
            width: 150px;
        }
    }

    @media screen and (min-width: 480px) and (max-width:768px) {
        .logo {
            width: 130px;
            height: auto;
            margin-top:20%;
            margin-bottom: 5%;
        }

        .logo_text {
            margin-top:70px;
        }

        .box_left, .box_right {
            width: 180px;
        }
    }

    @media screen and (min-width: 768px) {
        .logo {
            width: 150px;
            height: auto;
            margin-top:10%;
            margin-bottom: 5%;
        }

        .logo_text {
            margin-top:100px;
        }
    }

    .wrap {
        text-align: center;
    }

</style>

<script>
// import { IonButton } from '@ionic/vue';
// import { defineComponent } from 'vue';

// export default defineComponent({
//   components: { IonButton }
// });
</script>