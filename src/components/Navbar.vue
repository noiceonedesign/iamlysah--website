<template>
  <div class="navbar-container">
    <router-link to="/">music</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/">video</router-link>
    <router-link to="/about">contact</router-link>
  </div>
</template>

<style scoped>
@media(min-width: 1200px){
  a {
    text-decoration: none;
    color: #F3F0EB;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .navbar-container {
    display: flex;
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