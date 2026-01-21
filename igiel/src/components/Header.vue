<template>
  <header class="site-header">
    <nav class="navbar component">
      <div class="logo" @click="scrollTop" role="button" aria-label="Go to top">
        <strong>ProDerat</strong>
      </div>

      <ul class="nav-links">
        <li><a href="#" @click.prevent="scrollTo('about')">O nas</a></li>
        <li><a href="#" @click.prevent="scrollTo('services')">Usługi</a></li>
        <li><a href="#" @click.prevent="scrollTo('contact')">Kontakt</a></li>
      </ul>

      <button class="nav-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>

    <ul v-if="menuOpen" class="mobile-nav-links">
      <li><a href="#" @click.prevent="scrollTo('about'); toggleMenu()">O nas</a></li>
      <li><a href="#" @click.prevent="scrollTo('services'); toggleMenu()">Usługi</a></li>
      <li><a href="#" @click.prevent="scrollTo('contact'); toggleMenu()">Kontakt</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    scrollTo(section) {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
.site-header {
  width: 100%;
  background-color: #fff;
  /* box-shadow: 0 2px 6px rgba(0,0,0,0.1); */
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #2a2a2a;
  transition: color 0.2s;
}
.logo:hover {
  color: #e63946;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #e63946;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}
.nav-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
}

.mobile-nav-links {
  display: none;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  list-style: none;
  padding: 1rem 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.mobile-nav-links li {
  padding: 0.5rem 2rem;
}
.mobile-nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.mobile-nav-links li a:hover {
  color: #e63946;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .nav-toggle {
    display: flex;
  }
  .mobile-nav-links {
    display: flex;
  }
}
</style>
