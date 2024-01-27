<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
    <SocailMedia/>
      <div class="content-container">
        <h3 class="desktop-view">Lysah - Vienna-born pop singer, combining commercial pop music and catchy hooks.</h3>
        <div class="quote-wrapper">
          <div class="header-wrapper">
            <div class="img-wrapper"></div>
            <h3 class="tablet-view">Lysah - Vienna-born pop singer, combining commercial pop music and catchy hooks.</h3>
          </div>
          <div class="text-container">
            <p>Lysah is a Vienna based <span>Pop singer</span>, songwriter and performer.
              She skilfully <span>combines</span> commercial <span>Pop music</span> with <span>electronic and classical elements</span>, with her style having been described as a mix of Taylor Swift, Banks and Victoria Canal.
            </p>
            <p>
              <span>Sail</span> - Lysahs most popular release to date- has since amassed <span>over 100.000 streams</span>
              combined and was remixed by DJ Selecta.
            </p>
          </div>
        </div>
        <p>
          At a young age and just having learnt how to play the guitar, Lysah started writing lyrics and fell in love
          with the storytelling aspect of songwriting.
        </p>
        <p>
          Inspired by the likes of Whitney Houston, Sade and Adele, she later started writing pop ballads, which she performed
          during her pop music studies in the creative capital <span>London</span>.
          Although Lysah has since moved on from heavy power ballads, she still incorporates dramatic elements such as
          <span>live strings</span> into her music, making her sound distinctive and honest. Her heavy involvement in the production of her songs
          strengthens her identity as an artist and makes every song unmistakably <span class="italic-styling">her</span>.
        </p>
        <p>
          In 2019, when the <span>city of Vienna</span> created a <span>documentary</span> about the importance of music to the city,
          Lysah was <span>invited to record</span> "The Book of Love" with the world renowned <span>Synchron Stage Orchestra</span>
          . She later released her rendition of the song as well as a music video including short videos of her own childhood.
        </p>
      </div>
    </div>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SocailMedia from "../components/SocialMedia.vue";

export default defineComponent({
  name:"About",
  components: {SocailMedia, Footer, Navbar },
  setup() {
    return {}
  }

})
</script>

<style scoped>
h3 {
  font-family: var(--header-font);
  font-weight: normal;
  font-size: 26px;
  margin: 0;
  text-align: left;
}
.site-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 100px;
  margin-bottom: 80px;
}
.content-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 24px;
}
p {
  text-align: left;
}
p > span {
  font-weight: bold;
}

.img-wrapper {
  height: 300px;
  min-width: 300px;
  border-radius: 150px 150px 10px 10px;
  background-image: url("/assets/Lisa_Home_BG-small.jpg");
  background-repeat: no-repeat;
  background-position-y:-15px;
  background-position-x:center;
  background-size: 600px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
}
.quote-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}
.quote-wrapper > .text-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.italic-styling {
  font-style: italic;
  font-weight: normal;
}
.header-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.desktop-view {
  display: none;
}
@media(min-width: 740px) {
  .desktop-view {
    display: none;
  }
  .tablet-view {
    text-align: left;
    font-size: 32px;
  }
  .quote-wrapper {
    align-items: normal;
  }
  .img-wrapper {
    width: 300px;
  }
  .header-wrapper {
    flex-direction: row;
    gap: 24px;
    align-items: flex-end;
  }
  .img-wrapper {
    border-radius: 150px 10px 10px 10px;
  }
}
@media (min-width: 1200px) {
  .tablet-view {
    display: none;
  }
  .desktop-view{
    display: block;
  }
  h3 {
    text-align: left;
    font-size: 42px;
  }
  .content-container {
    width: 80%;
    max-width: 800px;
    gap: 32px;
  }
  .quote-wrapper {
    flex-direction: row;
    gap: 80px;
  }
  .quote-wrapper > .text-container {
    justify-self: flex-end;
    align-self: flex-end;
    text-align: justify;
  }
  .img-wrapper {
    border-radius: 150px 10px 10px 10px;
  }
}
</style>