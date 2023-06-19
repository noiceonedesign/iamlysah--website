<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
      <div class="flex-box-big">
        <div class="flex-box-wrapper">
          <MusicPlayerBig/>
        </div>
        <div class="flex-box-wrapper flex-box-grid">
          <MuscicPlayerSmall/>
          <MuscicPlayerSmall/>
          <MuscicPlayerSmall/>
          <MuscicPlayerSmall/>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import Navbar from "../components/Navbar.vue";
import musicCardsSmall from "../MusicCardSmall.js";
import musicCardsBig from "../MusicCardBig.js";
import {ref} from "vue";
import MusicPlayerBig from "../components/MusicPlayerBig.vue";
import MuscicPlayerSmall  from "../components/MusicPlayerSmall.vue"

const _musicCardsSmall = ref(musicCardsSmall);
const _musicCardsBig = ref(musicCardsBig)


</script>


<style scoped>

.site-wrapper {
  margin-top: 200px;
  display: flex;
  width: 1200px;
}

.flex-box-big {
  display: flex;
  gap: 64px;
  width: 100%;
}
.flex-box-wrapper {
  width: 100%;
}
.flex-box-wrapper:nth-child(1) {
  width: fit-content;
}

.flex-box-grid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
