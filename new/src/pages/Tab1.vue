<template>
  <q-page>
    <q-item style="justify-content: center; margin-top: 3vh">
      <q-item-section avatar>
        <q-img
          style="padding: 0.2vh; image-rendering: optimizequality"
          src="../assets/icons/128.png"
        />
      </q-item-section>
      <q-item-section avatar>
        <q-item-label
          style="font-size: 2.5vh; color: #26923a; font-weight: 700"
        >
          SUBWAY MASTER
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-carousel
      v-model="slide"
      swipeable
      animated
      navigation
      padding
      control-color="black"
      :navigation-position="navPos"
      height="40vh"
      class="text-black rounded-borders"
      style="font-size: 1.2vh"
    >
      <q-carousel-slide name="style" class="bg-purple column no-wrap flex">
        <div style="font-weight: bold; font-size: 2.4vh; text-align: center">
          이 달의 베스트조합
        </div>
        <div style="display: flex; margin-top: 5vh">
          <combi-component
            style="
              margin-left: 1vw;
              margin-right: 1vw;
              height: 15vh;
              width: 30vw;
              align-self: flex-end;
            "
          ></combi-component>
          <q-card
            class="my-card"
            style="
              margin-left: 1vw;
              margin-right: 1vw;
              height: 20vh;
              width: 40vw;
              background: green;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 15px;
            "
          >
            <img
              style="
                height: 8vh;
                width: 30vw;
                margin-top: 2vh;
                margin-left: auto;
                margin-right: auto;
                image-rendering: optimizequality;
              "
              src="../assets/icons/빵.png"
            />
            <q-card-section
              style="margin-top: -1vh; color: black; text-align: center"
            >
              <div style="font-size: 1vmax">손명 진갈대같다</div>
              <div style="font-size: 1.5vmax">Our Changing</div>
              <div style="font-size: 1vmax">by John Doe</div>
            </q-card-section>
          </q-card>
          <combi-component
            style="
              margin-left: 1vw;
              margin-right: 0.5vw;
              height: 15vh;
              width: 30vw;
              align-self: flex-end;
            "
          ></combi-component>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="column no-wrap flex">
        <div style="font-weight: bold; font-size: 2.4vh; text-align: center">
          아침은 드셨나요? 아침 꿀 조합
        </div>
        <div style="display: flex; margin-top: 5vh">
          <combi-component
            style="
              margin-left: 1vw;
              margin-right: 1vw;
              height: 15vh;
              width: 30vw;
              align-self: flex-end;
            "
          ></combi-component>
          <combi-component
            style="
              margin-left: 1vw;
              margin-right: 1vw;
              height: 20vh;
              width: 40vw;
            "
          ></combi-component>
          <combi-component
            style="
              margin-left: 1vw;
              margin-right: 0.5vw;
              height: 15vh;
              width: 30vw;
              align-self: flex-end;
            "
          ></combi-component>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import CombiComponent from 'components/combiComponent.vue';

@Options({
  components: {
    CombiComponent,
  },
})
export default class PageIndex extends Vue {
  slide = 'style';
  navPos = 'bottom';
  navigationPositions = [
    { value: 'top', label: 'top' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom (default)' },
    { value: 'left', label: 'left' },
  ];

  url =
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F782ad842-e107-4deb-ac60-f8940e3378cb%2F128.png?table=block&id=35803218-9a1f-4d91-a273-f5ad0da0345f&spaceId=82630f3f-2bcd-4373-852b-daf5d717e746&width=260&userId=2803cde0-99fc-44e6-8301-d769ec8f443c&cache=v2';
}
</script>
