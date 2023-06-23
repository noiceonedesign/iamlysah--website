<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">

    </div>
  </main>
  <Footer/>
</template>


<script lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import {ref, defineComponent} from "vue";

export default defineComponent({
  name:"Contact",
  components: {Footer, Navbar},
  setup() {


    return {  }
  }
})

</script>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  height:calc(100svh - 140px);
  height:calc(100vh - 140px);
  width: 100%;
}
@media (min-width: 740px) {
  .site-wrapper {
    height: calc(100dvh - 160px);
    height: calc(100vh - 160px);
  }
}
</style>