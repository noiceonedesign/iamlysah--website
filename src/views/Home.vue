<template>
  <header>
    <Navbar :logo="false"/>
  </header>
  <main>
    <SocailMedia/>
    <div class="background-container">
      <img src="/assets/Lysah_Underwater_Cover.jpg" alt="background image">
<!--      <img src="/assets/Lysah_Logo_Lysah_Logo.svg" alt="Logo">-->
      <div class="button-container">
        <p>
          Underwater
        </p>
        <div class="button-wrapper">
          <a href="https://tr.ee/DXvM2_M9Bc" target="_blank">Listen now!</a>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SocailMedia from "../components/SocialMedia.vue";

</script>

<style scoped>
header {
  position: absolute;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 5;
}
.background-container {
  position: relative;
  width: 100%;
  height: 100svh;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.background-container > img:nth-child(1) {
  position: absolute;
  width: 1000px;
}
.background-container > img:nth-child(2) {
  position: absolute;
  width: 250px;
  bottom: 120px;
}
.button-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 10;
  position: relative;
  top: 20%;
}

.button-wrapper {
  display: flex;
}
.button-container > p {
  font-family: var(--header-font);
  font-size: 36px;
  color: var(--main-font-color-light);
  text-shadow: 1px 1px 8px #01182C80;
}
.button-container > .button-wrapper > a {
  box-sizing: border-box;
  display: flex;
  padding: 10px 20px;
  color: var(--main-font-color-light);
  background: #637AA790;
  border: 1px solid var(--main-font-color-light);
  border-radius: 8px;
  transition: all ease-in-out 50ms;
  box-shadow: 1px 1px 25px 10px #01182C30;
}
.button-container > .button-wrapper > a:hover {
  background: #637AA7;
  transition: all ease-in-out 150ms;
}
@media (min-width: 740px) {
  .background-container > img:nth-child(1) {
    width: 2000px;
    top: -10px;
  }
  .background-container > img:nth-child(2) {
    width: 300px;
    left: 64px;
    top: 130px;
  }
  .button-container > p {
    font-size: 60px;
  }
}

@media (min-width: 1200px) {
  .background-container > img:nth-child(1) {
    width: 1920px;
    margin: 0;
    top: -20px;
  }
  .background-container > img:nth-child(2) {
    width: 300px;
    left: 120px;
    top: 20%;
  }
}

@media (min-width: 1400px) {

  .background-container > img:nth-child(1) {
    position: absolute;
    width: 1920px;
    margin: 0;
    top: -100px;
  }
  .background-container > img:nth-child(2) {
    position: absolute;
    width: 400px;
    left: 10%;
    top: 300px;
  }
}
@media (min-width: 1920px) {

  .background-container > img:nth-child(1) {
    width: 100%;
  }
}
</style>