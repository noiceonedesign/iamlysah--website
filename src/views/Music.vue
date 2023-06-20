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
</template>


<script lang="ts">
import Navbar from "../components/Navbar.vue";
import MusicCardsSmall from "../MusicCardSmall.ts";
import MusicCardsBig from "../MusicCardBig.ts";
import { defineComponent, ref } from "vue";
import MusicPlayerBig from "../components/MusicPlayerBig.vue";
import MuscicPlayerSmall  from "../components/MusicPlayerSmall.vue"

export default defineComponent({
  name: "Music",
  components: { MusicPlayerBig, MuscicPlayerSmall, Navbar},
  setup() {

  return { MusicCardsSmall, MusicCardsBig }
  }
})

</script>

<style scoped>

.site-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 120px 20px;
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
@media (min-width: 1200px) {
  .flex-box-big {
    flex-direction: row;
    align-items: flex-end;
    max-width: 1100px;
  }

  .flex-box-grid {
    height: 479px;
  }
  .flex-box-wrapper:nth-child(1) {
    width: fit-content;
  }
}
</style>
