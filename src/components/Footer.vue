<template>
  <div class="footer-wrapper">
    <router-link to="/impressum">Impressum</router-link>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from "vue";

export default defineComponent({
  name:"Footer",
  setup() {
    return {}
  }
})
</script>

<style scoped>
.footer-wrapper {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: relative;
}
.footer-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  height: 1px;
  background: var(--main-font-color-light);
  width: 90%;
}
a {
  text-decoration: none;
  color: var(--main-font-color-light);
}
.footer-wrapper > a:hover {
  cursor: pointer;
  box-shadow: 0 1px 0 0 var(--main-font-color-light);
  padding-bottom: .5px;
}

</style>