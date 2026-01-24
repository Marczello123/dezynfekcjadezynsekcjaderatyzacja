<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">Skontaktuj się z nami</h2>
      <div class="contact-content">
        <p class="contact-text">
          Potrzebujesz szybkiej pomocy? Zadzwoń – jesteśmy dostępni 24/7.
        </p>
        <a href="tel:+48123456789" class="cta-big">
          <svg class="phone-icon-big" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          +48 791 535 969
        </a>
        <p class="contact-info">
          lub napisz: <a href="mailto:wojciechigiel@gmail.com">wojciechigiel@gmail.com</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 0;
  margin: 0;
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: white;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

.contact-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.contact-text {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-big {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: bold;
  background: #e63946;
  color: white;
  padding: 1.5rem 3rem;
  border-radius: 60px;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(230, 57, 70, 0.4);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.cta-big:hover {
  background: #d62828;
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(230, 57, 70, 0.5);
}

.phone-icon-big {
  width: 40px;
  height: 40px;
}

.contact-info {
  margin-top: 2rem;
  font-size: 1.1rem;
  opacity: 0.8;
}

.contact-info a {
  color: #e63946;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .cta-big {
    font-size: 1.4rem;
    padding: 1.2rem 2rem;
    gap: 0.75rem;
  }
  
  .phone-icon-big {
    width: 32px;
    height: 32px;
  }
}
</style>