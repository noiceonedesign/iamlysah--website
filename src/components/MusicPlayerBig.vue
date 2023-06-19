<template>
  <div class="component-wrapper">
    <div class="img-container">
      <img src="../assets/MusicPlayerPics/Sail-2048x2048.jpg" alt="">
      <div :class="[!playing ? 'play-button-wrapper' : 'pause-button-wrapper']">
        <div @click="pressPlay" :class="[!playing ? 'play-button' : 'pause-button']">
          <img v-if="!playing" src="../assets/ic_play-button.svg" alt="">
          <img v-else src="../assets/ic_pause-button.svg" alt=""/>
          <audio @ended="songEnd" hidden="true" ref="audio">
            <source src="../assets/Snippets/Lysah%20-%20Sail%20-%2030sec.mp3" type="audio/mpeg">
          </audio>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="description">
        <p class="song-name">SAIL</p>
        <p class="artist">Lysah</p>
      </div>
      <div class="button-container">
        <ContinueButton/>
        <DropDownButton/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import ContinueButton from "./ContinueButton.vue";
import DropDownButton from "./DropDownButton.vue";
export default defineComponent({
  components: {ContinueButton, DropDownButton},
  name:"MusicPlayerBig",
  setup() {
    const playing = ref(false);
    const audio = ref<HTMLAudioElement>();

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

    return { audio, pressPlay, playing, songEnd };
  }
})

</script>

<style scoped>
.component-wrapper {
  height: fit-content;
  width: 350px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  gap: 16px;
  background: var(--card-background-color);
}
.component-wrapper:hover {
  cursor: pointer;
}
.component-wrapper:hover .img-container > .play-button-wrapper {
  opacity: 100%;
  transform: translateY(-8px);
  transition: ease 150ms;
}
.img-container {
  display: flex;
  position: relative;
}
.component-wrapper > .img-container > img {
  width: 332px;
  border-radius: 7px;
  box-shadow: var(--box-shadow);
}
.play-button-wrapper {
  position: absolute;
  height: 56px;
  width: 56px;
  bottom: 8px;
  right: 32px;
  opacity: 0;
  transform: translateY(8px);
  transition: ease 350ms;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
}

.play-button {
  width: 100%;
  height: 100%;
  background: #FFFFFF99;
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 150ms;
}

.play-button > img {
  width: 64px;
  margin-left: 8px;
}

.img-container > .play-button-wrapper > .play-button:hover {
  transform: scale(1.2);
  transition: ease 150ms;
}
.pause-button-wrapper {
  position: absolute;
  height: 56px;
  width: 56px;
  bottom: 16px;
  right: 32px;
  opacity: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
}
.pause-button {
  width: 100%;
  height: 100%;
  background: #FFFFFF90;
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 150ms;
}
.pause-button > img {
  width: 64px;
}
.img-container > .pause-button-wrapper > .pause-button:hover {
  transform: scale(1.2);
  transition: ease 150ms;
}

.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.description {
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  position: relative;
  gap: 1px;
}
.description > p {
  margin: 0;
  height: 20px;
  display: flex;
  align-items: center;
}
.description > .song-name {
  font-size: 20px;
  font-weight: 400;
}
.description > .artist {
  font-size: 14px;
}
.button-container {
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
}
</style>