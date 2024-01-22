<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
      <SocailMedia/>
      <div class="flex-box-big">
        <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/album/25tFsAkm6vA35hWOLi1jvd?utm_source=generator&theme=0"
                width="100%"
                height="352" frameBorder="0"
                allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
        </iframe>
      </div>
    </div>
  </main>
  <Footer/>
</template>


<script lang="ts">
import Navbar from "../components/Navbar.vue";
import MusicCardsSmall from "../MusicCardSmall.ts";
import MusicCardsBig from "../MusicCardBig.ts";
import { defineComponent, ref } from "vue";
import MusicPlayerBig from "../components/MusicPlayerBig.vue";
import MuscicPlayerSmall  from "../components/MusicPlayerSmall.vue"
import Footer from "../components/Footer.vue";
import SocailMedia from "../components/SocialMedia.vue";

export default defineComponent({
  name: "Music",
  components: {SocailMedia, Footer, MusicPlayerBig, MuscicPlayerSmall, Navbar },
  setup() {

  return { MusicCardsSmall, MusicCardsBig }
  }
})

</script>

<style scoped>

.site-wrapper {
  height: calc(100svh - 60px);
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 60px 0 0;
}

.flex-box-big {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 32px;
}
.flex-box-wrapper {
  width: 100%;
}

.flex-box-grid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--card-background-color);
  border-radius: 14px;
  box-sizing: border-box;
  padding: 8px;
}
@media (min-width: 740px) {
  .site-wrapper {
    padding: 0;
    margin: 0;
    height: calc(100vh - 160px);
  }
  .flex-box-big {
    flex-direction: row;
    align-items: flex-end;
    max-width: 900px;
    width: 90%;
    position: relative;
    z-index: 2;
    gap: 0;
  }

  .flex-box-grid {
    height: 463px;
    border-radius: 0 14px 14px 0;
  }
  .flex-box-wrapper:nth-child(1) {
    width: fit-content;
  }
}
</style>
