<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <Header />
  <main class="main-content">
    <Hero />
    <About />
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
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Arial, sans-serif;
}

.main-content {
  margin-top: 80px; 
  width: 100%;
  background: white;
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
