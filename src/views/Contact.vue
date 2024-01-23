<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
      <div class="content-container">
        <div class="link-button-wrapper">
          <h3>Find me on social media</h3>
          <div class="contact-container">
            <p>instagram</p>
            <a href="https://www.instagram.com/iamlysah" class="link-container" target="_blank">
              <img src="/assets/ic_instagram-footer.svg"><p>|</p> <p>iamlysah</p>
            </a>
          </div>
          <div class="contact-container">
            <p>facebook</p>
            <a href="https://www.facebook.com/iamlysah/" class="link-container" target="_blank">
              <img src="/assets/ic_facebook-footer.svg"><p>|</p> <p>iamlysah</p>
            </a>
          </div>
          <div class="contact-container">
            <p>tik tok</p>
            <a href="https://www.tiktok.com/@iamlysah/" class="link-container" target="_blank">
              <img src="/assets/ic_tiktok.svg"><p>|</p> <p>iamlysah</p>
            </a>
          </div>
        </div>
        <div class="link-button-wrapper">
          <h3>Listen to my music</h3>
          <div class="contact-container">
            <p>apple music</p>
            <a href="https://music.apple.com/at/artist/lysah/1105341781?l=en" class="link-container" target="_blank">
              <img src="/assets/ic_apple-music-footer.svg"><p>|</p> <p>lysah</p>
            </a>
          </div>
          <div class="contact-container">
            <p>spotify</p>
            <a href="https://open.spotify.com/artist/5SjM2ojBf2nyI1DYn2kIBd?si=7Zh4pfqjQbGaFPcXHXamPQ" class="link-container" target="_blank">
              <img src="/assets/ic_spotify-footer.svg"><p>|</p> <p>lysah</p>
            </a>
          </div>
          <div class="contact-container">
            <p>youtube</p>
            <a href="https://www.youtube.com/lysah" class="link-container" target="_blank">
              <img src="/assets/ic_youtube-footer.svg"><p>|</p> <p>lysah</p>
            </a>
          </div>
        </div>
        <div class="link-button-wrapper">
          <h3>Contact me by email</h3>
          <div class="contact-container">
            <p>email adress</p>
            <a href="mailto:hello@iamlysah.com" class="link-container" target="_blank">
              <img src="/assets/ic_email.svg"><p>|</p> <p>hello@iamlysah.com</p>
            </a>
          </div>
        </div>
        <div class="link-button-wrapper">
          <h3>Sign up to my newsletter</h3>
          <div class="contact-container news-letter-container">
            <p>newsletter</p>
            <a href="http://eepurl.com/is6DQk" class="news-letter-button" target="_blank">
              <p>sign up</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>


<script lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import {ref, defineComponent, reactive} from "vue";
import BaseInput from "../components/BaseInput.vue";
import SocailMedia from "../components/SocialMedia.vue";
export default defineComponent({
  name:"Contact",
  components: {SocailMedia, BaseInput, Footer, Navbar},
  setup() {


    return { }
  }
})

</script>

<style scoped>
.site-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 100px;
  margin-bottom: 80px;
}
.content-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: column;
  width: 80%;
  gap: 40px;
}
h3 {
  font-family: var(--header-font);
  margin: 0;
}
.link-button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.contact-container > a {
  display: flex;
  gap: 8px;
  box-sizing: border-box;
  padding: 8px 12px;
  border: 1px solid #ffffff20;
  width: fit-content;
  border-radius: 8px;
  background: #ffffff10;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  text-decoration: none;
  box-shadow: 2px 3px 20px 5px #5e5e5e20;
  transition: all ease-in-out 50ms;
}
.contact-container > p {
  padding: 0 8px;
}
.contact-container > a:hover {
  background: #ffffff30;
  border:1px solid #ffffff60;
  transition: all ease-in-out 150ms;
}
.contact-container > a > p {
  color: var(--main-font-color-light);
}
.contact-container > a > img {
  width: 24px;
}
.news-letter-container > a {
  background: var(--cta-color);
  padding: 8px 24px;
  transition: all ease-in-out 50ms;
}
.news-letter-container > a:hover {
  background: var(--cta-color-hover);
  transition: all ease-in-out 50ms;
}
@media(min-width: 740px) {
  .content-container {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    justify-content: center;
    width: 80%;
    gap: 80px;
  }
  .site-wrapper {
    height: calc(100dvh - 160px);
    height: calc(100vh - 160px);
  }
}
@media (min-width: 1200px) {
  .content-container {
    gap: 120px;
  }
}
@media (min-width: 1400px) {
  .site-wrapper {
    align-items: center;
    justify-content: center;
    padding-top: 0;
    margin-bottom: 0;
  }
}
@media (min-width: 1920px) {
  .content-container{}
}
</style>