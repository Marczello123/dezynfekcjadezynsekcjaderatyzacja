<template>
  <section id="hero" class="hero" >
    
    <!-- Fallback pod spodem – widać przy ładowaniu lub gdy video się nie odtworzy -->
    <div class="hero-fallback"></div>

    <video
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      aria-label="Tło wideo"
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
      Twoja przeglądarka nie obsługuje tagu video.
    </video>

    
    <div class="hero-overlay"></div>



    <div class="hero-content">
  <h1>Profesjonalna dezynfekcja, dezynsekcja i deratyzacja</h1>
  <p>Działamy szybko, skutecznie i bezpiecznie</p>

  
  <a
    :href="phoneHref"
    class="cta-phone"
    :class="{ 'cta-phone--mobile': isMobile }"
  >
    <span class="cta-phone__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </span>
    <span v-if="!isMobile" class="cta-phone__number">+48 791 535 969</span>
    <span v-else class="cta-phone__label">Zadzwoń teraz</span>
  </a>
</div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phoneHref = 'tel:+48791535969'
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  window.matchMedia('(max-width: 768px)').addEventListener('change', (e) => {
    isMobile.value = e.matches
  })
})
</script>



<style scoped>
.hero {
  position: relative;
  height: 100vh;
  /* margin-top: 80px;             */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  color: white;


}
@media (max-width: 768px) {
  .hero {
    margin-top: 0; 
    
  }
}


.hero-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: #1a1a1a center/cover no-repeat;
  background-image: url('/images/hero-mobile-bg.jpg');
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
}









.hero-overlay {
  background: rgba(0, 0, 0, 0.45); 
  position: absolute;
  inset: 0;
  z-index: 2;
}

/* Tekst i CTA */
.hero-content {
  position: relative;
  z-index: 2;
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

/* Przycisk / numer telefonu – jeden spójny element */
.cta-phone {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  padding: 0.85rem 1.75rem;
  background: rgba(230, 57, 70, 0.95);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.cta-phone:hover {
  background: #d62828;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
}

.cta-phone__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cta-phone__number {
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.05em;
}

.cta-phone--mobile .cta-phone__label {
  margin-left: 0.15rem;
}





</style>
