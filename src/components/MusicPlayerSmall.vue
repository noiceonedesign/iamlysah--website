<template>
  <div class="component-wrapper" @mouseover="mouseOver = true" @mouseleave="mouseOver = false">
    <img src="../assets/MusicPlayerPics/IDMY-2048x2048.jpg" alt="">
    <div class="description-container">
      <p class="song-name">I DONT MISS YOU</p>
      <p class="artist">Lysah</p>
    </div>
    <div v-if="mouseOver" class="button-wrapper">
      <ContinueButton/>
      <DropDownButton/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ContinueButton from "./ContinueButton.vue";
import DropDownButton from "./DropDownButton.vue";

export default defineComponent({
  name:"MusicPlayerSmall",
  components: {ContinueButton, DropDownButton},
  setup(){
    const playing = ref(false);
    const audio = ref<HTMLAudioElement>();
    const mouseOver = ref(false);

    function pressPlay() {
      playing.value = !playing.value;
      if (playing.value) {
        audio.value.play();
      }
      else {
        audio.value.pause();
      }
    }
    function songEnd() {
      playing.value = false
    }

    return { audio, pressPlay, playing, songEnd, mouseOver };
  }
})
</script>

<style scoped>
  .component-wrapper {
    display: flex;
    width: 100%;
    height: 110px;
    border-radius: 14px;
    box-sizing: border-box;
    align-items: center;
    padding: 7px;
    gap: 16px;
  }
  .component-wrapper:hover {
    background: var(--card-background-color);
    cursor: pointer;
  }

  .component-wrapper  > img {
    width: 96px;
    border-radius: 7px;
    box-shadow: var(--box-shadow);
  }

  .description-container {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
  }
  .description-container > .song-name {
    font-size: 20px;
    font-weight: 400;
  }
  .description-container {
    font-size: 14px;
  }
  .component-wrapper > .button-wrapper {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-left: auto;
    display: flex;
  }


</style>