<template>
    <ion-button v-bind:style="mystyle" expand="block" fill="outline" size="large" >
                <ion-icon />
                <ion-label><b>{{idkind}} 으로 계속하기</b></ion-label>
    </ion-button>
</template>


<script>
    import { IonButton, IonIcon, IonLabel } from '@ionic/vue'
    export default {
        name: 'SimpleLogins',
        props: ['idkind', 'clr'],
        data () {
            return {
                mystyle: '--border-color:' + this.clr + ';' + 'color:black;'
            }
        },
        components: { IonButton, IonIcon, IonLabel }
    }
</script>

<style scoped>
    ion-icon { 
        margin-right: auto; 
    }
    ion-label { 
        margin-right: auto; 
        font-size: 15px
    }
</style>