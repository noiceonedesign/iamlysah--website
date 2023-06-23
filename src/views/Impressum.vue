<template>
  <Navbar/>
  <main>
    <div class="site-wrapper">
      <div class="text-container">
        <h1>Impressum</h1>
        <p>Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB</p>
        <p>Webseitenbetreiber: Lysah</p>
        <p>Anschrift: Arakawastraße 10/17, 1220 Wien, Österreich</p>
        <p>UID-Nr: ATU74747278</p>
        <p>Tel: +43 660 6959724</p>
        <p>E-Mail: social@iamlysah.com</p>
        <p>Urheberrecht: Die Gesamtheit der auf der Website veröffentlichten Texte und Abbildungen unterliegt dem Urheberrechtsschutz. Alle Bilder auf der Website © Lysah, sofern nicht anders angegeben.</p>
        <p>Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
      </div>
    </div>
  </main>
  <Footer/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
  name: "Impressum",
  components: {Footer, Navbar},
  setup() {
    return {}
  }
})
</script>

<style scoped>
p {
  margin: 16px 0;
}
.site-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 80px;
  margin-bottom: auto;
}

.text-container {
  width: 90%;
  color: var(--main-font-color-light);
}
@media (min-width: 740px) {
  .site-wrapper {
    width: 80%;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100svh - 100px);
    height: calc(100vh - 100px);
    padding-top: 120px;
  }
  p {
    padding: 0 16px;
  }
}
</style>