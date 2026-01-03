<template>
  <header class="header">
    <nav class="navbar">
      <!-- LOGO -->
      <div class="logo" @click="scrollTop">
        Igiel
      </div>

      <ul class="nav-links">
        <li><a @click.prevent="scrollTo('about')">O nas</a></li>
        <li><a @click.prevent="scrollTo('services')">Usługi</a></li>
        <li><a @click.prevent="scrollTo('contact')">Kontakt</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const NAV_HEIGHT = 80

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  const y =
    el.getBoundingClientRect().top +
    window.pageYOffset -
    NAV_HEIGHT

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  color: #111;
  transition: color 0.4s ease;

}

.logo:hover {
  color: #e63946;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

a {
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: #333;
  transition: color 0.35s ease;
}

a:hover {
  color: #e63946;
}
</style>
