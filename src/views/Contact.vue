<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="site-wrapper">
      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
        <div id="mc_embed_signup">
          <form action="https://iamlysah.us21.list-manage.com/subscribe/post?u=26859dd5e00b536655a42c1bf&amp;id=e110d0e4eb&amp;f_id=00395ee1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
            <div id="mc_embed_signup_scroll"><h2>KEEP IN TOUCH</h2>
              <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
              </div>
              <div class="mc-field-group"><label for="mce-FNAME">First Name </label>
                <input type="text" name="FNAME" class=" text" id="mce-FNAME" value="">
              </div>
              <div class="mc-field-group"><label for="mce-MMERGE6">City </label>
                <input type="text" name="MMERGE6" class=" text" id="mce-MMERGE6" value="">
              </div>
              <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display: none;"></div>
                <div class="response" id="mce-success-response" style="display: none;"></div>
              </div>
              <div aria-hidden="true" style="position: absolute; left: -5000px;">
                /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                <input type="text" name="b_26859dd5e00b536655a42c1bf_e110d0e4eb" tabindex="-1" value="">
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                  <p class="brandingLogo" style="margin: 0px auto;"><a href="http://eepurl.com/itte6M" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" alt="referral badge"></a></p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script type="text/javascript">
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]=EMAIL;
            ftypes[0]=merge;
            fnames[1]=FNAME;
            ftypes[1]=merge;
            fnames[6]=MMERGE6;
            ftypes[6]=merge;
            fnames[2]=LNAME;
            ftypes[2]=merge;
            fnames[3]=ADDRESS;
            ftypes[3]=merge;
            fnames[4]=PHONE;
            ftypes[4]=merge;
            fnames[5]=BIRTHDAY;
            ftypes[5]=merge;false}
          (jQuery));
          var $mcj = jQuery.noConflict(true);
        </script>
      </div>

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