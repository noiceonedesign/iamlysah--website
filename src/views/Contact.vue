<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
      <div class="content-wrapper">
        <div class="social-media-container">
          <p>find me on social media:</p>
          <div class="link-container">
            <a href="https://www.instagram.com/iamlysah" target="_blank">
              <img src="/assets/ic_instagram-footer.svg"> <span>iamlysah</span>
            </a>
            <a href="https://www.facebook.com/iamlysah/" target="_blank">
              <img src="/assets/ic_facebook-footer.svg"> <span>iamlysah</span>
            </a>
            <a href="https://www.tiktok.com/@iamlysah/" target="_blank">
              <img src="/assets/ic_tiktok.svg"> <span>@iamlysah</span>
            </a>
          </div>
        </div>
        <div class="music-listen-container">
          <p>listen to my music:</p>
          <div class="link-container">
            <a href="https://music.apple.com/at/artist/lysah/1105341781?l=en" target="_blank">
              <img src="/assets/ic_apple-music-footer.svg"> <span>lysah</span>
            </a>
            <a href="https://open.spotify.com/artist/5SjM2ojBf2nyI1DYn2kIBd?si=7Zh4pfqjQbGaFPcXHXamPQ" target="_blank">
              <img src="/assets/ic_spotify-footer.svg"> <span>lysah</span>
            </a>
            <a href="https://www.youtube.com/lysah" target="_blank">
              <img src="/assets/ic_youtube-footer.svg"> <span>lysah</span>
            </a>
          </div>
        </div>
        <form @submit.prevent="submitForm">
          <BaseInput label="name" type="text" v-model="formData.name" placeholder="What's your name?"/>
          <BaseInput label="city" type="text" v-model="formData.city" placeholder="Where do you live?"/>
          <BaseInput label="email *" type="email" v-model="formData.email" placeholder="What's your email adress?"/>
          <span v-for="error in v$.email.$errors" :key="error.$uid">
            error
          </span>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
  </main>
  <Footer/>
</template>


<script lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import {ref, defineComponent, reactive} from "vue";
import BaseInput from "../components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import {required, email} from "@vuelidate/validators";

export default defineComponent({
  name:"Contact",
  components: {BaseInput, Footer, Navbar},
  setup() {

    const formData = reactive({
      email: "",
      name: "",
      city: ""
    })

    const rules = {
      email: {  },
      name: {  },
      city: {  }
    }
    const v$ = useVuelidate(rules, formData);

    function postData() {
      fetch('https://us21.api.mailchimp.com/3.0/lists/e110d0e4eb', {
        method: 'POST',
        headers:{
          Authorization: 'auth e0bab39682d04718e6a84e7309404a1a-us21',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email_address: formData.email,
          status: 'pending'
        })
      })
          .then(response => response.json())
          .then(data => console.log(data))
    }
    const submitForm = async () => {
      const result = await v$.value.$validate();
      if (!result) {
        alert("nope")
      } else {
        postData()
      }
    }

    return { submitForm, formData, v$}
  }
})

</script>

<style scoped>
.site-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 100px;
  margin-bottom: auto;
}
.content-wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
}
.social-media-container,
.music-listen-container{
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
}
.link-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: fit-content;
  padding: 0 16px;
}
a > img {
  width: 40px;
}
a {
  text-decoration: none;
  font-size: 16px;
  color: var(--main-font-color-light);
  display: flex;
  align-items: center;
  gap: 8px;
}
button {
  width: 120px;
  background: var(--cta-color);
  color: var(--main-font-color-light);
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 7px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: all ease 150ms;
  font-size: 16px;
  border: none;
}
button:hover {
  cursor: pointer;
  background: var(--cta-color-hover);
  transition: all ease 150ms;
}
@media (min-width: 740px) {
  .site-wrapper {
    height: calc(100dvh - 160px);
    height: calc(100vh - 160px);
  }


}
</style>