<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import TrustedPartners from './components/TrustedPartners.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <Header />
  <main class="main-content">
    <Hero />
    <About />
    <TrustedPartners />
    <Services />
    <Contact />
  </main>

  <footer class="site-footer">
    <p>
      Copyright © {{ new Date().getFullYear() }} Dezynfekcja Dezynsekcja Deratyzacja |
      <a href="https://proderat.com.pl/polityka-prywatnosci/" target="_blank" rel="noopener">
        Polityka prywatności
      </a>
    </p>
  </footer>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
:root {
  color-scheme: light;
}
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: transparent;
}

.main {
  margin: 0;
  padding: 0;
  /* display: block; */
}

.main-content {
  margin: 0;
  padding: 0;
  width: 100%;
}

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
