<template>
  <section class="trusted-section py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        Zaufali nam
      </h2>

      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
      >
        <a
          v-for="partner in partners"
          :key="partner.name"
          :href="partner.url"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-transform duration-300 hover:scale-110"
        >
          <img
            :src="partner.logo"
            :alt="`Logo ${partner.name}`"
            class="max-h-24 md:max-h-32 w-auto object-contain"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  {
    name: 'Intermarché',
    url: 'https://intermarche.pl/',
    logo: '/logos/inter.svg'
  }
]
</script>

<style scoped>
.trusted-section {
  text-align: center;
}
</style>
