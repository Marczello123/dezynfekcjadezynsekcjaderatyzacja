<script setup>
import intermarche from '@/assets/logos/intermarche.jpg'
import mag from '@/assets/logos/mag.svg'
import solar from '@/assets/logos/solar.png'
import axpo from '@/assets/logos/axpo.jpg'

const logos = [
  { src: intermarche, alt: 'Intermarché', class: 'intermarche' },
  { src: mag, alt: 'Mag', class: 'mag' },
  { src: solar, alt: 'Solar' },
  { src: axpo, alt: 'Axpo' }
]
</script>

<template>
  <section class="trusted">
    <div class="container">
      <h2 class="section-title trusted-title">Zaufali nam</h2>

      <div class="trusted-logos">
        <img
          v-for="logo in logos"
          :key="logo.alt"
          :src="logo.src"
          :alt="logo.alt"
          :class="logo.class"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.trusted {
  background-color: #f9f9f9;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 1.5rem;
}

.section-title {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #1f2937;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #d62828;
  margin: 0.75rem auto 0;
  border-radius: 2px;
}

.trusted-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.trusted-logos img {
  max-height: 48px;
  max-width: 160px;
  height: auto;
  width: auto;
  object-fit: contain;
  opacity: 1;
  display: block;
}

.trusted-logos img.intermarche {
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 4px;
  max-height: 60px;
  max-width: 200px;
}

.trusted-logos img.mag {
  background-color: #121111;
  padding: 0.5rem;
  border-radius: 4px;
}



</style>
