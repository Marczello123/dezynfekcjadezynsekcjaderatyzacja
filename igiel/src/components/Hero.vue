<template>
  <section class="hero">
    <!-- Wideo w tle tylko dla desktop -->
    <video
      v-if="!isMobile"
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
      Twoja przeglądarka nie obsługuje tagu video.
    </video>

    <!-- Fallback dla mobile -->
    <div class="hero-fallback" v-else></div>

    <!-- Overlay półprzezroczyste -->
    <div class="hero-overlay"></div>

    <!-- Tekst + CTA -->

    <div class="hero-content">
  <h1>Profesjonalna dezynfekcja i deratyzacja</h1>
  <p>Działamy szybko, skutecznie i bezpiecznie</p>

  <!-- MOBILE: kliknięcie dzwoni -->
  <a
    v-if="isMobile"
    href="tel:+48 791 535 969"
    class="cta"
  >
    Zadzwoń teraz
  </a>

  <!-- DESKTOP: pokaz numer -->
  <div v-else class="cta desktop-number">
    +48 791 535 969
  </div>
</div>

  </section>
</template>

<script setup>

// import { ref, onMounted, onUnmounted } from 'vue'

// const isMobile = ref(false)

// const checkMobile = () => {
//   isMobile.value = window.innerWidth <= 768
// }

// onMounted(() => {
//   checkMobile() // sprawdza przy starcie
//   window.addEventListener('resize', checkMobile) // reaguje na zmianę rozmiaru
// })

// onUnmounted(() => {
//   window.removeEventListener('resize', checkMobile)
// })
</script>



<style scoped>
.hero {
  position: relative;
  height: 80vh;                /* wysokość hero */
  margin-top: 80px;            /* <<< KLUCZOWE: odstęp równy wysokości navbara */
  overflow: hidden;
}
@media (max-width: 768px) {
  .hero {
    margin-top: 60px; /* dostosuj do wysokości mobilnego navbara */
  }
}

/* Wideo i fallback */
.hero-video,
.hero-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* transform: translate(-50%, -50%); */
  object-fit: cover;
  z-index: 1;
}

.hero-fallback {
  background: url('/images/hero-mobile-bg.jpg') center/cover no-repeat;
  /* lub po prostu kolor */
  /* background-color: #000; */
}

/* Overlay półprzezroczyste */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45); /* 45% przyciemnienia */
  z-index: 2;
}

/* Tekst i CTA */
.hero-content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
@media (min-width: 769px) {
  .hero-content h1 {
    font-size: 3.5rem;
  }
}
.hero-content p {
  font-size: 1.25rem;
  max-width: 800px;
}

.cta {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background: #e63946;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.cta:hover {
  background: #d62828;
}

</style>
