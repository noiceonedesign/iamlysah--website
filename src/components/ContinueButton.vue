<template>
  <div class="button-wrapper">
    <img src="" alt="">
    <p>buy</p>
  </div>
</template>

<script setup>

</script>

<style scoped>
.button-wrapper {
  max-width: 320px;
  width: 120px;
  background: var(--cta-color);
  color: var(--main-font-color-light);
  padding: 8px 16px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  transition: ease 150ms;
}
.button-wrapper:hover {
  cursor: pointer;
  background: var(--cta-color-hover);
  transition: ease 150ms;
}
</style>