<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
      <div class="flex-box-big">
        <div class="flex-box-wrapper">
          <MusicPlayerBig v-for="(musicCardBig, index) in MusicCardsBig"
                          :kex="index"
                          :artist="musicCardBig.artist"
                          :song-path="musicCardBig.songPath"
                          :img-path="musicCardBig.imgPath"
                          :song-name="musicCardBig.songName"
                          :i-tunes-u-r-l="musicCardBig.iTunesURL"
                          :amazon-music-u-r-l="musicCardBig.amazonMusicURL"
                          :spotify-u-r-l="musicCardBig.spotifyURL"
                          :youtube-u-r-l="musicCardBig.youtubeURL"
          />
        </div>
        <div class="flex-box-wrapper flex-box-grid">
          <MuscicPlayerSmall ref="musicPlayerSmall" v-for="(musicCard, index) in MusicCardsSmall"
                             :key="index"
                             :artist="musicCard.artist"
                             :song-path="musicCard.songPath"
                             :img-path="musicCard.imgPath"
                             :song-name="musicCard.songName"
                             :i-tunes-u-r-l="musicCard.iTunesURL"
                             :amazon-music-u-r-l="musicCard.amazonMusicURL"
                             :spotify-u-r-l="musicCard.spotifyURL"
                             :youtube-u-r-l="musicCard.youtubeURL"
          />
        </div>
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

export default defineComponent({
  name: "Music",
  components: { Footer, MusicPlayerBig, MuscicPlayerSmall, Navbar },
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
    max-width: 1100px;
    width: 90%;
  }

  .flex-box-grid {
    height: 463px;
  }
  .flex-box-wrapper:nth-child(1) {
    width: fit-content;
  }
}
</style>
