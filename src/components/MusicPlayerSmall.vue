<template>
  <div class="mobile-player">
  <div class="component-wrapper"
       :class="[playing ? 'showing-details' : '']"
  >
    <div class="img-container" @click="pressPlay">
      <img :src="imgPath" alt="">
      <div :class="[!playing ? 'play-button-wrapper' : 'pause-button-wrapper']">
        <div :class="[!playing ? 'play-button' : 'pause-button']">
          <img v-if="playing" src="/assets/ic_play-button.svg" alt="">
          <audio @ended="songEnd" hidden="true" ref="audio">
            <source :src="songPath" type="audio/mpeg">
          </audio>
        </div>
      </div>
    </div>
    <div class="description-container" @click="pressPlay">
      <p class="song-name">{{ songName }}</p>
      <p class="artist">{{ artist }}</p>
    </div>
    <div class="mobile-setting-container">
      <img src="/assets/ic_settings.svg" alt="" @click="handleSettings">
    </div>
  </div>
    <MusicPlayerPopUp
        v-if="settingsActive"
        :img-path="imgPath"
        :artist="artist"
        :song-name="songName"
        :i-tunes-u-r-l="iTunesURL"
        :youtube-u-r-l="youtubeURL"
        :apple-music-u-r-l="appleMusicURL"
        :spotify-u-r-l="spotifyURL"
        :amazon-music-u-r-l="amazonMusicURL"
        @closePopUp="handleSettings"
    />
  </div>
  <div class="desktop-player">
    <div class="component-wrapper"
         :class="[playing ? 'showing-details' : '']"
         @mouseover="mouseOver = true"
         @mouseleave="mouseOver = false">
      <div class="img-container">
        <img :src="imgPath" alt="">
        <div :class="[!playing ? 'play-button-wrapper' : 'pause-button-wrapper']">
          <div @click="pressPlay" :class="[!playing ? 'play-button' : 'pause-button']">
            <img v-if="!playing" src="/assets/ic_play-button.svg" alt="">
            <img v-else src="/assets/ic_pause-button.svg" alt=""/>
            <audio @ended="songEnd" hidden="true" ref="audio">
              <source :src="songPath" type="audio/mpeg">
            </audio>
          </div>
        </div>
      </div>
      <div class="description-container">
        <p class="song-name">{{ songName }}</p>
        <p class="artist">{{ artist }}</p>
      </div>
      <div v-if="mouseOver || playing" class="button-wrapper">
        <DropDownButton
            button-text="buy"
            :i-tunes-u-r-l="iTunesURL"
            :amazon-music-u-r-l="amazonMusicURL"
        />
        <DropDownButton
            button-text="stream"
            :is-secondary="true"
            :is-stream-button="true"
            :is-buy-button="false"
            :youtube-u-r-l="youtubeURL"
            :apple-music-u-r-l="appleMusicURL"
            :spotify-u-r-l="spotifyURL"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DropDownButton from "./DropDownButton.vue";
import MusicPlayerPopUp from "./MusicPlayerPopUp.vue";

export default defineComponent({
  name:"MusicPlayerSmall",
  components: { DropDownButton, MusicPlayerPopUp },
  props: {
    id: {
      type: Number
    },
    songName: {
      type: String,
      required: true
    },
    imgPath: {
      type: String,
      required: true
    },
    songPath: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true,
      default: "Lysah"
    },
    active: {
      type: Boolean,
      default: false
    },
    iTunesURL: String,
    amazonMusicURL: String,
    spotifyURL: String,
    appleMusicURL: String,
    youtubeURL: String,
  },

  setup(props, context){
    const playing = ref(false);
    const audio = ref<HTMLAudioElement>();
    const mouseOver = ref(false);
    const settingsActive = ref(false);

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

    function setActive() {
      context.emit("setActive")
    }
    function handleSettings() {
      settingsActive.value = !settingsActive.value
    }

    function getImageURL() {
      return new URL(`/assets/MusicPlayerPics/${ props.imgPath }`, import.meta.url).href
    }

    return { audio, pressPlay, playing, songEnd, mouseOver, settingsActive, handleSettings, getImageURL };
  }
})
</script>

<style scoped>
.desktop-player {
  display: none;
}
.showing-details {
  background: var(--card-background-color);
}
.component-wrapper {
  display: flex;
  width: 100%;
  height: 110px;
  border-radius: 7px;
  box-sizing: border-box;
  align-items: center;
  padding: 8px;
  gap: 16px;
}

.component-wrapper > .img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.component-wrapper > .img-container  > img {
  width: 88px;
  border-radius: 3px;
  box-shadow: var(--box-shadow);
}
.img-container > .pause-button-wrapper {
  height: 100%;
  width: 100%;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #FFFFFF10;
  backdrop-filter: blur(4px);
  opacity: 100%;
}
.pause-button > img {
  width: 64px;
}
.description-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.description-container > .song-name {
  font-size: 16px;
  font-weight: 500;
}
.description-container > .artist {
  font-size: 12px;
}
.mobile-setting-container {
  position: relative;
  z-index: 8;
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mobile-setting-container > img {
  width: 48px;
  z-index: 20;
  rotate: 90deg;
}
 @media (min-width: 1200px) {
   .mobile-player {
     display: none;
   }
   .desktop-player {
     display: block;
   }
   .component-wrapper {
     display: flex;
     width: 100%;
     height: 110px;
     border-radius: 7px;
     box-sizing: border-box;
     align-items: center;
     padding: 8px;
     gap: 16px;
   }
   .showing-details {
     background: var(--card-background-color);
   }
   .component-wrapper:hover {
     background: var(--card-background-color-hover);
     cursor: pointer;
   }

   .component-wrapper > .img-container {
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;
   }

   .component-wrapper > .img-container  > img {
     width: 96px;
     border-radius: 3px;
     box-shadow: var(--box-shadow);
   }

   .description-container {
     display: flex;
     flex-direction: column;
   }
   .description-container > .song-name {
     font-size: 20px;
     font-weight: 500;
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

   .pause-button > img {
     width: 64px;
   }
   .play-button > img {
     width: 64px;
     margin-left: 5px;
   }

   .component-wrapper:hover > .img-container > .play-button-wrapper {
     opacity: 100%;
   }

   .img-container > .play-button-wrapper {
     height: 100%;
     width: 100%;
     border-radius: 3px;
     display: flex;
     justify-content: center;
     align-items: center;
     position: absolute;
     background: #FFFFFF10;
     backdrop-filter: blur(4px);
     opacity: 0;
   }
   .play-button {
     display: flex;
   }

   .img-container > .pause-button-wrapper {
     height: 100%;
     width: 100%;
     border-radius: 3px;
     display: flex;
     justify-content: center;
     align-items: center;
     position: absolute;
     background: #FFFFFF10;
     backdrop-filter: blur(4px);
     opacity: 100%;
   }
 }
</style>