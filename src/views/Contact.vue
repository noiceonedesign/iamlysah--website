<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
      <div class="content-wrapper">
        <div class="img-outlines-container">
          <div class="img-wrapper">
          </div>
        </div>
        <div class="social-media-container">
          <h3>Social Media</h3>
          <div class="link-container">
            <a href="https://www.instagram.com/iamlysah" target="_blank">
              <img src="/assets/ic_instagram-footer.svg"> <span>iamlysah</span>
            </a>
            <a href="https://www.facebook.com/iamlysah/" target="_blank">
              <img src="/assets/ic_facebook-footer.svg"> <span>iamlysah</span>
            </a>
            <a href="https://www.tiktok.com/@iamlysah/" target="_blank">
              <img src="/assets/ic_tiktok.svg"> <span>@iamlysah</span>
            </a>
          </div>
        </div>
        <div class="img-outlines-container-2">
          <div class="img-wrapper"></div>
        </div>
        <div class="music-listen-container">
          <h3>Music</h3>
          <div class="link-container">
            <a href="https://music.apple.com/at/artist/lysah/1105341781?l=en" target="_blank">
              <img src="/assets/ic_apple-music-footer.svg"> <span>lysah</span>
            </a>
            <a href="https://open.spotify.com/artist/5SjM2ojBf2nyI1DYn2kIBd?si=7Zh4pfqjQbGaFPcXHXamPQ" target="_blank">
              <img src="/assets/ic_spotify-footer.svg"> <span>lysah</span>
            </a>
            <a href="https://www.youtube.com/lysah" target="_blank">
              <img src="/assets/ic_youtube-footer.svg"> <span>lysah</span>
            </a>
          </div>
        </div>
        <div class="mail-container">
          <p>email adress</p>
          <div class="link-container">
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
  </main>
  <Footer/>
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
h3 {
  font-size: 40px;
  margin: 0 0  8px 0;
  font-weight: 300;
  font-family: var(--header-font);
}
.img-wrapper {
  height: 350px;
  width: 250px;
  border-radius: 120px 20px 120px 120px;
  background-image: url("/assets/Lisa_Home_BG-small.jpg");
  background-repeat: no-repeat;
  background-position-y:-30px;
  background-position-x:-200px;
  background-size: 600px;
  overflow: hidden;
  justify-self: center;
  box-shadow: var(--box-shadow);
}

.img-outlines-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  height: 400px;
  width: 300px;
}
.img-outlines-container > img {
  position: absolute;
  width: 200px;
  bottom: -20px;
  right: -20px;
}
.img-outlines-container:after {
  position: absolute;
  content: '';
  height: 400px;
  width: 30px;
  border-left: 1px solid var(--main-font-color-light);
  left: 50px;
  z-index: -1;
}
.img-outlines-container:before {
  position: absolute;
  content: '';
  height: 400px;
  width: 300px;
  top: 40px;
  border-top: 1px solid var(--main-font-color-light);
  z-index: -1;
}

.site-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 100px;
  margin-bottom: auto;
}
.content-wrapper {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: column;
  gap: 64px;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 80px;
}
.social-media-container,
.music-listen-container,
.mail-container,
.subscribe-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  position: relative;
}
.link-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: fit-content;
  padding: 0 16px;
  align-items: center;
}
a > img {
  width: 24px;
}
.link-container > a {
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
button {
  width: 120px;
  background: var(--cta-color);
  color: var(--main-font-color-light);
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 7px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: all ease 150ms;
  font-size: 16px;
  border: none;
}
button:hover {
  cursor: pointer;
  background: var(--cta-color-hover);
  transition: all ease 150ms;
}
.img-outlines-container-2 {
  display: none;
}
.subscribe-container > p,
.mail-container > p {
  background: rgb(174,166,155);
  padding: 0 6px;
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
  text-decoration: none;
  transition: all ease 150ms;
}
.subscribe-container > a:hover {
  background: var(--cta-color-hover);
  transition: all ease 150ms;
}
.subscribe-container > a:hover img {
  transform: translateY(-4px);
  transition: all ease 150ms;
}
.subscribe-container > a > img {
  width: 16px;
  rotate: 90deg;
  transition: all ease 150ms;
}

.subscribe-container:after {
  content: '';
  position: absolute;
  width: 60%;
  height: 85px;
  top: 13px;
  border-top: 1px solid var(--main-font-color-light);
  z-index: -1;
}
.mail-container:after {
  content: '';
  position: absolute;
  width: 60%;
  height: 85px;
  top: 13px;
  border-top: 1px solid var(--main-font-color-light);
  z-index: -1;
}
@media (min-width: 740px) {
  .site-wrapper {
    padding-top: 100px;
  }
  .content-wrapper {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: flex-end;
    max-width: 740px;
  }
  .social-media-container {
    grid-column: 2;
    grid-row: 1;
  }
  .music-listen-container {
    grid-column: 1;
    grid-row: 2;
  }
  .mail-container {
    grid-column: 2;
    grid-row: 3;
    align-self: flex-end;
    justify-self: flex-end;
    height: 100%;
  }
  .img-outlines-container-2 {
    grid-column: 2;
  }
  .social-media-container,
  .music-listen-container,
  .mail-container,
  .subscribe-container{
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 50px;
    height: 100%;
  }
  .mail-container
  .link-container {
    padding: 0;
  }
  .img-outlines-container-2 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    height: 400px;
    width: 300px;
  }
  .img-outlines-container-2 > .img-wrapper {
    border-radius: 20px 120px 120px 120px;
  }
  .img-outlines-container-2:after {
    position: absolute;
    content: '';
    height: 400px;
    width: 300px;
    border-right: 1px solid var(--main-font-color-light);
    right: 50px;
    z-index: -1;
  }
  .img-outlines-container-2:before {
    position: absolute;
    content: '';
    height: 400px;
    width: 300px;
    bottom: 40px;
    border-bottom: 1px solid var(--main-font-color-light);
    z-index: -1;
  }
  .subscribe-container,
  .mail-container {
    padding: 0;
    align-self: flex-end;
    justify-self: flex-end;
  }
  .subscribe-container:after {
    content: '';
    position: absolute;
    width: 70%;
    height: 85px;
    top: 18px;
    border-top: 1px solid var(--main-font-color-light);
    z-index: -1;
  }
  .mail-container:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 85px;
    top: 13px;
    border-top: 1px solid var(--main-font-color-light);
    z-index: -1;
  }

}
@media (min-width: 1200px) {
  .content-wrapper {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    margin-bottom: 60px;
  }
  .social-media-container{
    justify-content: center;
    padding-bottom: 16px;
  }
  .music-listen-container {
    padding-top: 16px;
    grid-column: 1;
    grid-row: 2;
    justify-content: center;
  }
  .img-outlines-container-2 {
    grid-column: 2;
    grid-row: 2;
  }
  .img-outlines-container-2 > .img-wrapper {
    border-radius: 120px 120px 120px 20px;
  }
}
</style>