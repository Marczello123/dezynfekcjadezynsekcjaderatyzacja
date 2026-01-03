<template>
  <section class="services" id="services">
    <div class="container">
      <h2 class="section-title">Nasze usługi</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3>Dezynfekcja</h3>
          <p>Skuteczne zwalczanie wirusów, bakterii i grzybów w domach, biurach i lokalach użytkowych.</p>
        </div>
        <div class="service-card">
          <h3>Dezynsekcja</h3>
          <p>Profesjonalne usuwanie owadów: karaluchów, pluskiew, mrówek, os i innych szkodników.</p>
        </div>
        <div class="service-card">
          <h3>Deratyzacja</h3>
          <p>Bezpieczne i trwałe pozbywanie się gryzoni – szczurów i myszy – z posesji i budynków.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 4rem 0;
  background-color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
}

.service-card h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  position: relative;
}

.service-card h3::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: #e63946;
  margin: 0.75rem auto 0;
  border-radius: 2px;
}

.service-card p {
  color: #6b7280;
  line-height: 1.7;
}
</style>