<template>
  <section id="hero" class="hero" >
    
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

    
    <div class="hero-fallback" v-else></div>

    
    <div class="hero-overlay"></div>



    <div class="hero-content">
  <h1>Profesjonalna dezynfekcja, dezynsekcja i deratyzacja</h1>
  <p>Działamy szybko, skutecznie i bezpiecznie</p>

  
  <a
    v-if="isMobile"
    href="tel:+48 791 535 969"
    class="cta"
  >
    Zadzwoń teraz
  </a>

  
  <div v-else class="cta desktop-number">
    +48 791 535 969
  </div>
</div>

  </section>
</template>

<script setup>




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


.hero-video,
.hero-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
}







.hero-fallback {
  background: url('/images/hero-mobile-bg.jpg') center/cover no-repeat;

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


/* :root {
  --header-height: 100px;
}

.site-header {
  height: var(--header-height);
}

.hero {
  min-height: calc(100vh - var(--header-height));
  margin-top: var(--header-height);
} */



</style>
