<template>
<div class="popup-wrapper">
  <div ref="popupContainer" class="popup-container">
    <div class="img-wrapper">
      <img :src="imgPath" alt="">
      <div class="description">
        <p class="song-title">{{ songName }}</p>
        <p class="artist">{{ artist }}</p>
      </div>
    </div>
    <div class="options-wrapper">
      <div class="option">
        <p class="option-header">buy</p>
        <a :href="iTunesURL" target="_blank">
          <img src="/assets/ic_itunes.svg" alt="">
        </a>
        <a :href="amazonMusicURL" target="_blank">
          <img src="/assets/ic_amazon-music.svg" alt="">
        </a>
      </div>
      <div class="option">
        <p class="option-header">stream</p>
        <a :href="youtubeURL" target="_blank">
          <img src="/assets/ic_youtube.svg" alt="">
        </a>
        <a :href="appleMusicURL" target="_blank">
          <img src="/assets/ic_apple-music.svg" alt="">
        </a>
        <a :href="spotifyURL" target="_blank">
          <img src="/assets/ic_spotify.svg" alt="">
        </a>
      </div>
    </div>
    <div class="close" @click="closePopUp">
      <p>close</p>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DropDownButton from "./DropDownButton.vue";
import {useClickOutside} from "../clickOutside";

export default defineComponent({
  name:"MusicPlayerPopUp",
  components: { DropDownButton },
  props: {
    songName: {
      type: String,
      required: true
    },
    imgPath: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true,
      default: "Lysah"
    },
    iTunesURL: String,
    amazonMusicURL: String,
    spotifyURL: String,
    appleMusicURL: String,
    youtubeURL: String,
  },
  emits:["closePopUp"],

  setup(props, context){
    const popupContainer = ref(null);
    function closePopUp() {
      context.emit("closePopUp")
    }


    return { closePopUp, popupContainer };
  }
})
</script>

<style scoped>
.popup-wrapper {
  position: absolute;
  background: var(--background-color-light);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-container {
  height: 500px;
  width: 300px;
  border-radius: 14px;
  background: var(--main-font-color-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
}

.options-wrapper {
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
}

.option {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.option > .option-header {
  font-size: 18px;
  text-align: center;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--main-font-color-dark);
}
.option > a > img {
  width: 90px;
}
.img-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 6px;
}
.img-wrapper > img {
  width: 160px;
  border-radius: 7px;
  box-shadow: var(--box-shadow);
}
.close {
  margin-top: auto;
  width: 80%;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--main-font-color-dark);
}
.close > p {
  margin-top: 6px;
}
.description {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description > .song-title {
  font-size: 18px;
  text-align: center;
  font-weight: 500;
}
.description > .artist {
  font-size: 12px;
  margin-top: -4px;
  text-align: center;
}

</style>