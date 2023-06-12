<template>
  <div class="burger-menu">
    <img src="../assets/Burger_Menu-closed.svg" alt="">
  </div>
  <div class="navbar-container">
    <router-link active-class="active" to="/music">music</router-link>
    <router-link active-class="active" to="/about">about</router-link>
    <router-link active-class="active" to="/video">video</router-link>
    <router-link active-class="active" to="/contact">contact</router-link>
  </div>
</template>

<style scoped>
.active {
  text-decoration: underline;
}
.navbar-container {
  display: flex;
  flex-direction: column;
  background: var(--background-color-light);
  position: absolute;
  z-index: 10;
  left: -150px;
}
.burger-menu {
  position: absolute;
  display: flex;
  z-index: 10;
}
@media(min-width: 1200px){
  .burger-menu {
    display: none;
  }
  a {
    text-decoration: none;
    color: #F3F0EB;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .navbar-container {
    flex-direction: row;
    gap: 64px;
    position: fixed;
    right: 128px;
    top: 64px;
    z-index: 10;
  }
}

</style>
<script setup>
</script>