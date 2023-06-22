<template>
  <header>
    <Navbar :logo="false"/>
  </header>
  <main>
    <div class="background-container">
      <img src="/assets/Lisa_Home_BG-small.jpg" alt="background image">
      <img src="/assets/Lysah_Logo_Lysah_Logo.svg" alt="Logo">
    </div>
  </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

</script>

<style scoped>
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
  width: 1200px;
  margin-right: 100px;
}
.background-container > img:nth-child(2) {
  position: absolute;
  width: 250px;
  bottom: 120px;
}

@media (min-width: 740px) {
  .background-container {
    top: -80px;
  }
  .background-container > img:nth-child(1) {
    width: 1400px;
    margin-left: 200px;
    top: -10px;
  }
  .background-container > img:nth-child(2) {
    width: 300px;
    left: 64px;
    top: 130px;
  }
}

@media (min-width: 1200px) {
  .background-container > img:nth-child(1) {
    width: 1600px;
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
    left: 120px;
    top: 178px;
  }
}


</style>