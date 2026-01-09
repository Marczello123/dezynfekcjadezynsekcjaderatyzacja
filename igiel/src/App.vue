<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
// import TrustedPartners from './components/TrustedPartners.vue'


</script>

<template>
<Header />
<Hero />
<About />
<Services />
<Contact />
<!-- <TrustedPartners /> -->

<footer class="site-footer">
    <p>
      Copyright © 2026 Dezynfekcja Dezynsekcja Deratyzacja | 
      <a href="https://proderat.com.pl/polityka-prywatnosci/" target="_blank" rel="noopener">
        Polityka prywatności
      </a>
    </p>
  </footer>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
}

/* Główny kontener – tylko dla treści POD hero */
.main-content {
  margin-top: 80px; /* miejsce na fixed navbar – dostosuj do jego wysokości */
  background: white; /* po zscrollowaniu – białe tło */
  position: relative;
  z-index: 1;
}

/* Stopka */
.site-footer {
  text-align: center;
  padding: 30px 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: #666;
}

.site-footer a {
  color: #007bff;
  text-decoration: underline;
}

</style>
