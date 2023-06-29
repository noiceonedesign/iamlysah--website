<template>
  <div class="footer-wrapper">
    <div class="footer-content">
      <router-link to="/impressum">Impressum</router-link>
      <div class="social-media-container">
        <div class="social-media-icons">
          <a href="https://www.instagram.com/iamlysah" target="_blank">
            <img src="/assets/ic_instagram-footer.svg">
          </a>
          <a href="https://www.facebook.com/iamlysah/" target="_blank">
            <img src="/assets/ic_facebook-footer.svg">
          </a>
          <a href="https://www.tiktok.com/@iamlysah/" target="_blank">
            <img src="/assets/ic_tiktok.svg">
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
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from "vue";

export default defineComponent({
  name:"Footer",
  setup() {
    return {}
  }
})
</script>

<style scoped>
.footer-wrapper {
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: center;
  align-items: center;
  position: relative;
}

.footer-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  height: 1px;
  background: var(--main-font-color-light);
  width: 90%;
}

a {
  text-decoration: none;
  color: var(--main-font-color-light);
}

.footer-content > a {
  opacity: 70%;
  transition: all 100ms ease-in-out;
  box-shadow: 0 1px 0 0 #FFFFFF00;
  padding-bottom: .5px;
}

.footer-content > a:hover {
  cursor: pointer;
  box-shadow: 0 1px 0 0 var(--main-font-color-light);
  padding-bottom: .5px;
  opacity: 100%;
  transition: all 100ms ease-in-out;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 90%;
}


.footer-content > .social-media-wrapper > a:hover {
  opacity: 100%;
  transition: all 50ms ease-in-out;
}

.social-media-container {
  display: none;
}
.subscribe-button-wrapper {
  position: absolute;
  z-index: 5;
  width: 90%;
  display: flex;
  justify-content: center;
  top: -120px;
}
.subscribe-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 280px;
  padding: 16px 0;
  border-radius: 20px 20px 0 0;
  border-left: 1px solid var(--main-font-color-light);
  border-right: 1px solid var(--main-font-color-light);
  border-top: 1px solid var(--main-font-color-light);
}
.subscribe-button {
  width: fit-content;
  background: var(--cta-color);
  color: var(--main-font-color-light);
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 7px;
  display: flex;
  gap: 16px;
  transition: all ease 150ms;
  text-decoration: none;
}
.subscribe-button > img {
  width: 16px;
  rotate: 90deg;
}
.subscribe-button:hover {
  cursor: pointer;
  background: var(--cta-color-hover);
  transition: all ease 150ms;
}

@media(min-width: 740px) {
  .footer-wrapper {
    height: 80px;
  }
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .social-media-container {
    display: flex;
    gap: 64px;

  }
  .social-media-container > div {
    display: flex;
    gap: 16px;
  }
  .social-media-container > div > a {
    display: flex;
    opacity: 60%;
    transition: all 100ms ease-in-out;
  }
  .social-media-container > div > a:hover {
    display: flex;
    opacity: 100%;
    transition: all 100ms ease-in-out;
  }
  .social-media-container > div > a > img{
    width: 24px;
  }
}

@media (min-width: 1400px) {
  .social-media-container {
    display: none;
  }

}
</style>