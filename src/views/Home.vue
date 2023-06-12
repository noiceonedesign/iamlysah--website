<template>
    <div class="background-container">
      <img src="../assets/Lisa_Home_BG-small.jpg" alt="background image">
      <img src="../assets/Lysah_Logo_Lysah_Logo.svg" alt="Logo">
    </div>
</template>

<style scoped>
.background-container {
  position: relative;
  width: 100%;
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
  width: 180px;
  right: 60px;
  bottom: 32px;
}


@media (min-width: 1400px) {
  .background-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .background-container > img:nth-child(1) {
    position: absolute;
    width: 1700px;
  }
  .background-container > img:nth-child(2) {
    position: absolute;
    width: 486px;
    left: 120px;
    top: 178px;
  }
}


</style>