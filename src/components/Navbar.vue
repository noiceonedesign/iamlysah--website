<template>
  <div @click="clickedBurgerMenuIcon" class="burger-menu">
    <img v-if="!clicked" class="burger-menu-icon" src="../assets/ic_BM-closed-light.svg" alt="">
    <img v-else class="burger-menu-icon" src="../assets/ic_BM-open-light.svg" alt="">
  </div>
  <div v-if="clicked" class="navbar-container-mobile">
    <div class="links">
      <router-link active-class="active" to="/music">music</router-link>
      <router-link active-class="active" to="/about">about</router-link>
      <router-link active-class="active" to="/video">video</router-link>
      <router-link active-class="active" to="/contact">contact</router-link>
    </div>
  </div>
  <router-link v-if="props.logo" class="logo-desktop" to="/">
    <img src="../assets/lysah-logo-light.svg" alt="">
  </router-link>
  <div class="navbar-container-desktop">
    <router-link active-class="active" to="/music">music</router-link>
    <router-link active-class="active" to="/about">about</router-link>
    <router-link active-class="active" to="/video">video</router-link>
    <router-link active-class="active" to="/contact">contact</router-link>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const props = defineProps({
  logo: {
    type: Boolean,
    default: true
  }
})

const clicked = ref(false)

function clickedBurgerMenuIcon() {
  clicked.value = !clicked.value
}

</script>


<style scoped>
.active {
  text-decoration: underline;
}
.navbar-container-desktop {
  display: none;
}
.logo-desktop {
  position: fixed;
  top: 24px;
  left: 32px;
  z-index: 11;
}
.logo-desktop > img {
  width: 80px;
}
.navbar-container-mobile{
  background: var(--background-color-light);
  position: absolute;
  height: 100%;
  width: 100vw;
  top: 0;
  right: 0;
  backdrop-filter: blur(4px);
  z-index: 9;
  border-radius: 7px 0 0 7px;
  overflow: hidden;
}

.navbar-container-mobile > .links {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 128px 0;
}
.navbar-container-mobile > .links > a:last-child {
  border: none;
}
.burger-menu {
  position: fixed;
  display: flex;
  z-index: 10;
  right: 24px;
  cursor: pointer;
}
.burger-menu > .burger-menu-icon {
  width: 80px;
}
.navbar-container-mobile > .links > a {
  text-decoration: none;
  color: var(--main-font-color-light);
  border-bottom: 1px solid white;
  padding:32px 0;
  min-width: 128px;
  text-align: center;
}
.navbar-container-mobile > .links > a:hover {
  cursor: pointer;
  text-decoration: underline;
}


@media(min-width: 1200px){
  .burger-menu {
    display: none;
  }
  .logo-desktop {
    top: 32px;
    left: 128px;
    z-index: 10;
  }
  .logo-desktop > img {
    width: 120px;
  }
  .navbar-container-mobile {
    display: none;
  }
  .navbar-container-desktop {
    display: flex;
    flex-direction: row;
    gap: 64px;
    position: fixed;
    right: 128px;
    top: 64px;
    z-index: 10;
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
  .navbar-container-desktop > .active {
    box-shadow: 0 1px 0 0 var(--main-font-color-light);
    font-weight: bold;
    padding-bottom: .5px;
  }
}

</style>
