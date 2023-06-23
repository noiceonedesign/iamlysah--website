<template>
  <div class="footer-wrapper">
    <div class="footer-content">
      <router-link to="/impressum">Impressum</router-link>
      <div class="social-media-wrapper">
        <a href=""><img src="/assets/ic_apple-music-footer.svg"></a>
        <a href=""><img src="/assets/ic_instagram-footer.svg"></a>
        <a href=""><img src="/assets/ic_spotify-footer.svg"></a>
        <a href=""><img src="/assets/ic_facebook-footer.svg"></a>
        <a href=""><img src="/assets/ic_youtube-footer.svg"></a>
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
  opacity: 50%;
  transition: all 50ms ease-in-out;
}

.footer-content > a:hover {
  cursor: pointer;
  box-shadow: 0 1px 0 0 var(--main-font-color-light);
  padding-bottom: .5px;
  opacity: 100%;
  transition: all 50ms ease-in-out;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  width: 90%;
}

.footer-content > .social-media-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
}

.footer-content > .social-media-wrapper > a {
  opacity: 50%;
  transition: all 50ms ease-in-out;
}

.footer-content > .social-media-wrapper > a:hover {
  opacity: 100%;
  transition: all 50ms ease-in-out;
}

.footer-content > .social-media-wrapper > a > img {
  height: 32px;
}

.footer-content > .social-media-wrapper > a:nth-child(1) > img {
  height: 16px;
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
}
</style>