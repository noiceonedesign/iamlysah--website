<template>
  <div v-if="!contact" class="social-media-component-wrapper">
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
  </div>
  <div v-else class="contact-component-wrapper">
    <div class="subscribe-button-wrapper">
      <div class="email-container">
        <p>email adress</p>
        <div class="link-container-contact">
          <a href="mailto:hello@iamlysah.com">
            <img src="/assets/ic_email.svg" alt=""> <span>hello@iamlysah.com</span>
          </a>
        </div>
      </div>
      <div class="subscribe-container">
        <p>to my newsletter</p>
        <a  target="_blank"
            class="subscribe-button"
            href="https://iamlysah.us21.list-manage.com/subscribe/post?u=26859dd5e00b536655a42c1bf&amp;id=e110d0e4eb&amp;f_id=00395ee1f0">
          <span>sign up</span><img src="/assets/ic_drop-down-light.svg" alt="">
        </a>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import {ref, defineComponent} from "vue";

export default defineComponent({
  name: 'SocailMedia',
  components: {},
  props: {
    contact: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {  }
  }
})
</script>


<style scoped>
.social-media-component-wrapper {
  display: none;
}
@media(min-width: 740px) {
  .contact-component-wrapper {
    position: absolute;
    z-index: 0;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
  }
  .email-container,
  .subscribe-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 16px;
  }

  .subscribe-container > a {
    width: fit-content;
    background: var(--cta-color);
    color: var(--main-font-color-light);
    padding: 8px 16px;
    box-sizing: border-box;
    border-radius: 7px;
    display: flex;
    gap: 16px;
    transition: all ease 150ms;
  }
  .subscribe-container > a > img {
    width: 16px;
    rotate: 90deg;
  }
  .link-container-contact {
    display: flex;

  }
  .link-container-contact > a > img {
    width: 24px;
  }
  .link-container-contact > a {
    text-decoration: none;
    font-size: 16px;
    color: var(--main-font-color-light);
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    width: fit-content;
    border-radius: 25px;
    border: 1px solid var(--main-font-color-light);
  }
  .subscribe-button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 128px;
  }
}
@media (min-width: 1400px) {
  .social-media-component-wrapper {
    position: absolute;
    z-index: 1;
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
    gap: 32px;
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
    width: 28px;
  }
}
</style>