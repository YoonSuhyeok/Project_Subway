<template>
  <q-card class="my-card" style="background: green; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 15px;">
    <img style="height:6vh; width:23vw; margin-top:2vh; margin-left:auto; margin-right:auto; image-rendering:optimizequality" src="../assets/icons/빵.png" />
    <q-card-section style="margin-top:-1vh; color:black; text-align:center;">
      <div style="font-size:1vmax;">준비중</div>
      <!--<div style="font-size:1.2vmax">Our Changing</div>
      <div style="font-size:1vmax">by John Doe</div>-->
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component'
import { Todo, Meta } from './models'

class Props {
  readonly title!: string;
  readonly todos = prop<Todo[]>({ default: () => [] });
  readonly meta!: Meta;
  readonly active!: boolean;
}

export default class CombiComponent extends Vue.with(Props) {
  clickCount = 0;

  increment () {
    this.clickCount += 1
  }

  get todoCount () {
    return this.todos.length
  }
}
</script>
