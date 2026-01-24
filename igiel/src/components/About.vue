<template>
  <section class="about" id="about">
    <div class="container">
      <h2 class="section-title">O nas</h2>
      <p class="about-text">
        Jesteśmy specjalistami w zakresie kompleksowej dezynfekcji, dezynsekcji i deratyzacji. 
        Działamy głównie na terenie województwa zachodniopomorskiego i wielkopolskiego, oferując szybką i dyskretną pomoc w sytuacjach wymagających natychmiastowej interwencji.
      </p>
      <p class="about-text">
        Nasze metody są bezpieczne dla ludzi i zwierząt domowych, a jednocześnie skuteczne wobec szkodników i patogenów. 
        Stawiamy na profesjonalizm, doświadczenie i zaufanie klientów.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 0;
  margin: 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #1f2937;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: #e63946;
  background: #d62828;
  margin: 1rem auto 0;
  border-radius: 2px;
}

.about-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #4b5563;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 1.5rem;
}
</style>