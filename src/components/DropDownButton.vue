<template>
  <div ref="dropDownContainer" class="drop-down-container">
    <div
        @click="handleClick()"
        class="button-wrapper"
        :class="[isSecondary ? 'button-wrapper-secondary' : 'button-wrapper-primary']">
      <p> {{ buttonText }}</p>
      <span :class="[expanded ? 'face-down' : 'face-up']">
        <img v-if="!isSecondary"
             src="/assets/ic_drop-down-light.svg"
             alt="drop-down image"
        >
        <img v-else
             src="/assets/ic_drop-down-dark.svg"
             alt="drop-down image"
        >
      </span>
    </div>
    <div v-if="isBuyButton && expanded"  class="options-wrapper">
      <div class="option" v-for="(option, index) in buyOptions"
           :key="index"
      >
        <a :href="option.URL" target="_blank"><img :src="option.imgPath" alt="img"></a>
      </div>
    </div>
    <div v-else-if="isStreamButton && expanded"  class="options-wrapper">
      <div class="option" v-for="(option, index) in streamOptions"
           :key="index"
      >
        <a :href="option.URL" target="_blank"><img :src="option.imgPath" alt="img"></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent, PropType} from "vue";
import { useClickOutside } from "../clickOutside.js"

export default defineComponent({
  name: "DropDownButton",
  props: {
    buttonText: {
      type: String,
      required: true,
      default: "stream"
    },
    isSecondary: {
      type: Boolean,
      default: false
    },
    isBuyButton: {
      type: Boolean,
      default: true
    },
    spotifyURL: {
      type: String,
      required: false
    },
    iTunesURL: {
      type: String,
      required: false
    },
    appleMusicURL: {
      type: String,
      required: false
    },
    amazonMusicURL: {
      type: String,
      required: false
    },
    youtubeURL: {
      type: String,
      required: false
    },
    isStreamButton: {
      type: Boolean,
      default: false
    },
    arrayOfOptions: {
      type: Array
    }
  },
  setup(props) {
    const expanded = ref(false);
    const dropDownContainer = ref(null);

    useClickOutside(dropDownContainer, ()=>{
      expanded.value = false
    })
    const buyOptions = [
      {
        imgPath:"/assets/ic_itunes.svg",
        URL: props.iTunesURL
      },
      {
        imgPath: "/assets/ic_amazon-music.svg",
        URL: props.amazonMusicURL
      }
    ]

    const streamOptions = [
      {
        imgPath:"/assets/ic_spotify.svg",
        URL: props.spotifyURL
      },
      {
        imgPath:"/assets/ic_apple-music.svg",
        URL: props.appleMusicURL
      },
      {
        imgPath:"/assets/ic_youtube.svg",
        URL: props.youtubeURL
      }
    ]

    function handleClick() {
      expanded.value = !expanded.value;
    }

    return { buyOptions, streamOptions , expanded, handleClick, dropDownContainer }
  }
})

</script>

<style scoped>

.drop-down-container {
  display: flex;
  position: relative;
  max-width: 320px;
  width: 110px;
  height: 40px;
  box-sizing: border-box;
  align-items: center;
}
.button-wrapper-primary {
  background: var(--cta-color);
  color: var(--main-font-color-light);
  border-radius: 7px;
  display: flex;
  transition: all ease 150ms;
  width: 100%;
  padding: 8px;
}
.button-wrapper-primary:hover {
  cursor: pointer;
  background: var(--cta-color-hover);
  transition: all ease 150ms;
}

.button-wrapper-secondary {
  width: 100%;
  border: 1px solid var(--cta-color);
  color: var(--cta-color);
  border-radius: 7px;
  display: flex;
  justify-content: flex-start;
  transition: all ease 100ms;
  padding: 8px;
}
.button-wrapper-secondary:hover {
  cursor: pointer;
  background: var(--secondary-button-hover-color);
  transition: all ease 100ms;
}

.options-wrapper {
  position: absolute;
  top: 45px;
  border-radius: 7px;
  width: 100%;
  height: fit-content;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 11;
}
.options-wrapper > .option {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}
.options-wrapper > .option::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 80px;
  border-bottom: 1px solid #e1e1e1;
  z-index: -1;
}
.last-option {
  border-bottom: none;
}
.options-wrapper > .option > a{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
}
.options-wrapper > .option > a:hover {
  background: #e1e1e1;
}
.options-wrapper > .option > a > img {
  width: 100px;
  height: 20px;
}


.button-wrapper > span > img {
  width: 16px;
}
.button-wrapper > .face-up {
  rotate: 0deg;
  transition: all 100ms ease-in-out;
}
.button-wrapper > .face-down {
  rotate: 180deg;
  transition: all 100ms ease-in-out;
}
.button-wrapper > p {
  margin-right: auto;
  padding-left: 4px;
}
</style>