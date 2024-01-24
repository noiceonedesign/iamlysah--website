<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <router-link class="logo-desktop" to="/">
        <img src="/assets/lysah-logo-light.svg" alt="">
      </router-link>
      <div @click="clickedBurgerMenuIcon" class="burger-menu">
        <img v-if="!clicked" class="burger-menu-icon" src="/assets/ic_BM-closed-light.svg" alt="">
        <img v-else class="burger-menu-icon" src="/assets/ic_BM-open-light.svg" alt="">
      </div>
    </div>
    <div class="navbar-container-mobile" :class="clicked ? 'open' : 'closed'">
      <router-link active-class="active" to="/music">music</router-link>
      <router-link active-class="active" to="/about">about</router-link>
      <router-link active-class="active" to="/video">video</router-link>
      <router-link active-class="active" to="/contact">contact</router-link>
      <div class="social-media-icon-container">
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
    <div class="navbar-container-desktop">
      <router-link active-class="active-link" to="/music">music</router-link>
      <router-link active-class="active-link" to="/about">about</router-link>
      <router-link active-class="active-link" to="/video">video</router-link>
      <router-link active-class="active-link" to="/contact">contact</router-link>
    </div>
  </div>
</template>


<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: "Navbar",
  props: {
    logo: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const clicked = ref(false);
    const backgroundColor = ref(null);

    onMounted(()=> {
      document.body.style.overflow = 'visible';
      if (props.logo) {
        backgroundColor.value = '#AEA69BFF'
      }
      else {
        backgroundColor.value = '#AEA69BFF00'
      }
    })

    function clickedBurgerMenuIcon() {
      clicked.value = !clicked.value
      disableScroll();
    }

    function disableScroll() {
      if (clicked.value) {
        document.body.style.overflow = 'hidden';
      }
      else {
        document.body.style.overflow = 'visible';
      }
    }
    return{ clicked, clickedBurgerMenuIcon, backgroundColor }
  }
})

</script>


<style scoped>
.logo-opacity-null {
  opacity: 0;
}
.logo-opacity-full {
  opacity: 100%;
}
.navbar {
  display: flex;
  height: 60px;
  width: 100vw;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 20;
  box-sizing: border-box;
}
.navbar-wrapper {
  display: flex;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background: #ffffff10;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius:0 0 8px 8px;
  box-shadow: 2px 3px 20px 5px #5e5e5e20;
  border: 1px solid #ffffff20;
  position: relative;
  z-index: 20;
}
.active-link {
  text-decoration: underline;
}
.navbar-container-desktop {
  display: none;
}
.logo-desktop {
  display: flex;
  height: 100%;
  align-items: center;
  width: fit-content;
}
.logo-desktop > img {
  width: 50px;
  position: relative;
  z-index: 20;
}
.open {
  transition: all ease-in-out 350ms;
  transform: translateX(0px);
}
.closed {
  transition: all ease-in-out 350ms;
  transform: translateX(740px);
}

.navbar-container-mobile {
  position: absolute;
  top: 0;
  background: rgba(2, 2, 2, 0.50);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  display: flex;
  flex-direction: column;
  height: 100svh;
  height: 100vh;
  z-index: 19;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.navbar-container-mobile > a:last-child {
  border: none;
}
.burger-menu {
  display: flex;
  cursor: pointer;
}
.burger-menu > .burger-menu-icon {
  width: 60px;
  position: relative;
  z-index: 20;
}
.navbar-container-mobile > a {
  text-decoration: none;
  color: var(--main-font-color-light);
  border-bottom: 1px solid white;
  padding:32px 0;
  min-width: 128px;
  text-align: center;
}
.navbar-container-mobile > a:hover {
  cursor: pointer;
  text-decoration: underline;
}
.navbar-container-mobile > .social-media-icon-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 64px;
}
.social-media-icon-container > div {
  display: flex;
  gap: 32px;
}
.social-media-icon-container > div > a {
  display: flex;
}
.social-media-icon-container > div > a > img {
  width: 32px;
  opacity: 60%;
}

@media(min-width: 740px){

  .navbar {
    justify-content: center;
    align-items: flex-end;
    padding: 0 80px;
    height: 120px;
    gap: 4px;
  }

  .burger-menu {
    display: none;
  }

  .navbar-container-mobile {
    display: none;
  }
  .navbar-container-desktop {
    display: flex;
    flex-direction: row;
    gap: 64px;
    background: #ffffff10;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 2px 3px 20px 5px #5e5e5e20;
    border: 1px solid #ffffff20;
    box-sizing: border-box;
    height: 50px;
    transition: all ease-in-out 50ms;
  }
  .navbar-container-desktop:hover {
    cursor: pointer;
    background: #ffffff20;
    transition: all ease-in-out 150ms;
  }

  .navbar-wrapper {
    align-items: flex-end;
    padding: 0;
    width: fit-content;
    height: fit-content;
    border: none;
    background: none;
    box-shadow: none;

  }

  .logo-desktop {
    height: 50px;
    box-sizing: border-box;
    background: #ffffff10;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    padding: 8px 20px;
    border-radius: 8px;
    box-shadow: 2px 3px 20px 5px #5e5e5e20;
    border: 1px solid #ffffff20;
    transition: all ease-in-out 50ms;
  }
  .logo-desktop:hover {
    background: #ffffff20;
    cursor: pointer;
    transition: all ease-in-out 150ms;
  }
  .logo-desktop > img {
    width: 50px;
  }
  .navbar-container-desktop > .active-link {
    box-shadow: 0 1px 0 0 var(--main-font-color-light);
    padding-bottom: .5px;
  }
  .navbar-container-desktop > a {
    text-decoration: none;
    color: var(--main-font-color-light);
    box-shadow: 0 1px 0 0 #FFFFFF00;
    padding-bottom: .5px;
    transition: all ease-in-out 150ms;

  }
  .navbar-container-desktop > a:hover {
    cursor: pointer;
    box-shadow: 0 1px 0 0 var(--main-font-color-light);
    padding-bottom: .5px;
    transition: all ease-in-out 50ms;
  }
}

@media (min-width: 1200px) {
  .logo-desktop > img {
    margin-left: 0;
  }
  .navbar {
    height: 100px;
    padding: 0 100px;
    justify-content: flex-end;
  }
}

</style>
