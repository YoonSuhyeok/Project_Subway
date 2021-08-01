<template>
    <ion-page>
        <ion-content>
            <div class="wrap">
                <img src="/assets/img/logo.png" class="logo">
                <img src="/assets/img/SUBWAY MASTER.png" alt="">
                <!-- <h1 class="logo_text"><b>나만의 서브웨이 레시피</b></h1> -->
                <div class="box_left"><img src="/assets/img/no-use/splash_left.png" alt=""></div>
                <div class="box_right"><img src="/assets/img/no-use/splash_right.png" alt=""></div>
                <div class="persons">
                    <img src="/assets/img/logo/logo_person1.png" alt="" class="person person1">
                    <img src="/assets/img/logo/logo_person2.png" alt="" class="person person2">
                    <img src="/assets/img/logo/logo_person3.png" alt="" class="person person3">
                    <img src="/assets/img/logo/logo_person4.png" alt="" class="person person4">
                </div>
                <div class="blt"><img src="/assets/img/logo/ItalianBLT.png" alt="이탈리안BLT"></div>
            </div>
        </ion-content>
    </ion-page>
</template>

<style>

    img {
        display: block;
        margin: auto;
    }

    .persons {
        margin-top: 10px;
    }

    .person {
        display: inline;
        width: 25%;
    }

    .blt {
        position: fixed;
        bottom: 10px;
    }

    .box_left, .box_right {
        display: none;
        /* display: inline-block; */
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
            width: 150px;
            height: auto;
            margin-top:15%;
            margin-bottom: 5%;
        }

        /* .logo_text {
            margin-top:50px;
        } */

        /* .box_left, .box_right {
            width: 150px;
        } */
    }

    @media screen and (min-width: 480px) and (max-width:768px) {
        .logo {
            width: 130px;
            height: auto;
            margin-top:20%;
            margin-bottom: 5%;
        }

        .blt {
            display: none;
        }

        .box_left, .box_right {
            display: inline-block;
        }

        /* .logo_text {
            margin-top:70px;
        } */

        /* .box_left, .box_right {
            width: 180px;
        } */
    }

    @media screen and (min-width: 768px) {
        .logo {
            width: 150px;
            height: auto;
            margin-top:10%;
            margin-bottom: 5%;
        }

        .person {
            width: 15%;
        }

        .blt {
            display: none;
        }

        .box_left, .box_right {
            display: inline-block;
        }

        /* .logo_text {
            margin-top:100px;
        } */
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