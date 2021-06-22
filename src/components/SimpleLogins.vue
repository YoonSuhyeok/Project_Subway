<template>
    <ion-button expand="block" fill="outline" size="large" style="color:clr;">
                <ion-icon :icon="square"/>
                <ion-label><b>{{idkind}} 으로 계속하기</b></ion-label>
    </ion-button>
</template>

<script>
    export default {
        name: 'SimpleLogins',
        props: ['idkind', 'clr']
    }
</script>

<style scoped>
    ion-button {
        color: black;
        /*--border-color: #F9E83B;*/
    }
    ion-icon { 
        margin-right: auto; 
    }
    ion-label { 
        margin-right: auto; 
        font-size: 15px
    }
</style>