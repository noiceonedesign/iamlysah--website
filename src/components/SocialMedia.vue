<template>
  <div class="social-media-component-wrapper">
    <div class="social-media-icons">
      <a href="https://www.instagram.com/iamlysah" target="_blank">
        <img src="/assets/ic_instagram-footer.svg">
      </a>
      <a href="https://www.facebook.com/iamlysah/" target="_blank">
        <img src="/assets/ic_facebook-footer.svg">
      </a>
    </div>
    <div class="listen-icons">
      <a href="https://music.apple.com/at/artist/lysah/1105341781?l=en" target="_blank">
        <img src="/assets/ic_apple-music-footer.svg">
      </a>
      <a href="https://open.spotify.com/artist/5SjM2ojBf2nyI1DYn2kIBd?si=7Zh4pfqjQbGaFPcXHXamPQ" target="_blank">
        <img src="/assets/ic_spotify-footer.svg">
      </a>
      <a href="https://www.youtube.com/lysah" target="_blank">
        <img src="/assets/ic_youtube-footer.svg">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from "vue";

export default defineComponent({
  name: 'SocailMedia',
  components: {},
  setup() {
    return {  }
  }
})
</script>


<style scoped>
.social-media-component-wrapper {
  display: none;
}

@media (min-width: 1400px) {
  .social-media-component-wrapper {
    position: absolute;
    z-index: 0;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 64px;
    justify-content: center;
    box-sizing: border-box;

  }
  .social-media-component-wrapper > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .social-media-component-wrapper > div > a {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 60%;
    transition: all 100ms ease-in-out;
  }
  .social-media-component-wrapper > div > a:hover {
    opacity: 100%;
    transition: all 100ms ease-in-out;
  }
  .social-media-component-wrapper > div > a > img {
    width: 32px;
  }
}
</style>