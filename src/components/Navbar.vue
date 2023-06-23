<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <router-link class="logo-desktop" to="/">
        <img src="/assets/lysah-logo-light.svg" alt="" :class="[logo ? 'logo-opacity-full' : 'logo-opacity-null']">
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
  height: 80px;
  width: 100vw;
  position: fixed;
  align-items: center;
  z-index: 20;
  box-sizing: border-box;
  background: v-bind(backgroundColor);
}
.navbar-wrapper {
  display: flex;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
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
  margin-top: 8px;
  width: 80px;
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
  top: 0px;
  background: var(--card-background-color);
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
  width: 80px;
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


@media(min-width: 740px){

  .navbar {
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 80px;
  }

  .burger-menu {
    display: none;
  }
  .logo-desktop {

  }
  .logo-desktop > img {
    width: 120px;
    margin-top: 64px;
    margin-left: -60px;
  }
  .navbar-container-mobile {
    display: none;
  }
  .navbar-container-desktop {
    display: flex;
    flex-direction: row;
    gap: 64px;
  }
  .navbar-wrapper {
    width: fit-content;
  }
  .navbar-container-desktop > .active-link {
    box-shadow: 0 1px 0 0 var(--main-font-color-light);
    padding-bottom: .5px;
  }
  .navbar-container-desktop > a {
    text-decoration: none;
    color: var(--main-font-color-light);
  }
  .navbar-container-desktop > a:hover {
    cursor: pointer;
    box-shadow: 0 1px 0 0 var(--main-font-color-light);
    padding-bottom: .5px;
  }
}

@media (min-width: 1200px) {
  .logo-desktop > img {
    margin-left: 0;
  }
}

</style>
