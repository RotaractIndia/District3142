<template>
  <div id="app">
    <div :style="cssProps"></div>
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
 import Vue from 'vue';
    import {library} from '@fortawesome/fontawesome-svg-core'
    import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
    import {faEnvelope,} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

    library.add(faFacebook , faTwitter, faInstagram, faLinkedin, faEnvelope);
    Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
  name:'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

body{
  font-family: 'Roboto', sans-serif !important;
  background-image: url('https://github.com/Chinmay2911/RID3142/blob/main/src/assets/body-bg.png?raw=true');
}
h1 h2 h3 h4 h5 h6{
  font-family: 'Playfair Display', sans-serif !important;
}
</style>
