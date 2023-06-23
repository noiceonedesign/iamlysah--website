<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
      <div class="video-wrapper">
        <iframe
            src="https://www.youtube.com/embed/iqNRVlaecUw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
      </div>
    </div>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<script lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import {ref, defineComponent} from "vue";

export default defineComponent({
  name:"Video",
  components: {Navbar,Footer},
  setup() {
    return {}
  }
})
</script>

<style>
.site-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:calc(100svh - 140px);
  height:calc(100vh - 140px);
  width: 100%;
}
.video-wrapper{
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
iframe {
  width: 320px;
  height: 180px;
}

@media (min-width: 740px) {
  .site-wrapper {
    height: calc(100dvh - 160px);
    height: calc(100vh - 160px);
  }
  iframe {
    width: 560px;
    height: 315px;
  }
}
@media (min-width: 1200px) {
  iframe {
    width: 800px;
    height: 452px;
  }
}

@media (min-width: 1600px) {
  iframe {
    width: 1200px;
    height: 677px;
  }
}
</style>