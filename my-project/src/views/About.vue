<template>
  <div class="about-page">
    <!-- Banner Superior -->
    <section class="hero-banner">
      <div class="banner-content">
        <h1>Sobre a ONG</h1>
          <img src="../assets/logo2.png" alt="Logo-2" width="250px">
      </div>
    </section>

    <!-- Conteúdo Principal -->
    <main class="main-content">
      <section class="about-section">
        <div class="container">
          <div class="about-card">
            <h2>QUEM SOMOS</h2>
            <div class="about-text">
              <p>
                A <strong>Associação Protetora dos Animais Aliança do Bem</strong> é uma organização sem fins
                lucrativos,
                oficialmente constituída em 2022, mas com mais de <strong>20 anos de atuação voluntária</strong> na
                causa animal e ambiental.
              </p>

              <div class="image-divider">
                <img src="../assets/happy-dog.jpg" alt="Cachorros felizes">
              </div>

              <p>
                Formada por um grupo de protetoras independentes, a instituição surgiu em <strong>Campinas/SP</strong>
                com o propósito de promover o
                <strong>resgate, cuidado, adoção responsável</strong> de animais em situação de abandono, bem como a
                <strong>preservação dos ecossistemas</strong> locais.
              </p>

              <div class="mission-box">
                <h3>Nossos pilares</h3>
                <div class="pillars">
                  <div class="pillar">
                    <span class="icon">❤️</span>
                    <span>Amor</span>
                  </div>
                  <div class="pillar">
                    <span class="icon">🙏</span>
                    <span>Respeito</span>
                  </div>
                  <div class="pillar">
                    <span class="icon">🌱</span>
                    <span>Compromisso com a vida</span>
                  </div>
                </div>
              </div>

              <p class="closing">
                Somos movidos pelo desejo genuíno de causar um <strong>impacto real</strong> na sociedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Equipe -->
      <section class="team-section">
        <div class="container">
          <h2>Nossa Equipe</h2>
          <div class="team-grid">
            <div class="team-member">
              <div class="avatar" style="background-color: #f6e9d4;">
                <span>👩🏽</span>
              </div>
              <h3>Ana Silva</h3>
              <p>Fundadora</p>
            </div>
            <div class="team-member">
              <div class="avatar" style="background-color: #f6e9d4;">
                <span>👵🏼</span>
              </div>
              <h3>Maria Oliveira</h3>
              <p>Veterinária</p>
            </div>
            <div class="team-member">
              <div class="avatar" style="background-color: #f6e9d4;">
                <span>👩🏼‍🦰</span>
              </div>
              <h3>Carlota Santos</h3>
              <p>Resgate</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Você pode adicionar lógica aqui se necessário
</script>

<style scoped>
/* Cores */
:root {
  --dark: #364648;
  --primary: #fbbb17;
  --light: #f6e9d4;
}

.about-page {
  color: var(--dark);
}

/* Banner Superior */
.hero-banner {
  background: #F9EBD6;
  background-size: cover;
  background-position: center;
  color: var(--dark);
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  padding-left: 20px;
  text-align: center;
}

.hero-banner h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  color: var(--primary);
  text-shadow: 1px 1px 2px var(--dark);
}

.hero-banner p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.banner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Conteúdo Principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-card {
  background: white;
  border-radius: 15px;
  padding: 40px;
  margin-top: -50px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-card h2 {
  color: var(--primary);
  font-size: 2.2rem;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
}

.about-card h2::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--primary);
  margin: 15px auto;
}

.about-text {
  line-height: 1.8;
  font-size: 1.1rem;
}

.about-text p {
  margin-bottom: 25px;
}

.about-text strong {
  color: var(--primary);
}

/* Divisor de Imagem */
.image-divider {
  margin: 30px 0;
  text-align: center;
}

.image-divider img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

/* Missão */
.mission-box {
  background: var(--light);
  padding: 25px;
  border-radius: 10px;
  margin: 40px 0;
  border-left: 5px solid var(--primary);
}

.mission-box h3 {
  color: var(--dark);
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.pillars {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
}

.pillar .icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.closing {
  font-style: italic;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 40px !important;
}

/* Equipe */
.team-section {
  padding: 60px 0;
  background: var(--light);
  margin-top: 50px;
}

.team-section h2 {
  text-align: center;
  color: var(--dark);
  margin-bottom: 40px;
  font-size: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.team-member {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.team-member:hover {
  transform: translateY(-10px);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: var(--light);
}

.team-member h3 {
  color: var(--dark);
  margin-bottom: 5px;
}

.team-member p {
  color: var(--primary);
  font-weight: 500;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-banner {
    padding: 80px 20px;
  }

  .hero-banner h1 {
    font-size: 2.2rem;
  }

  .about-card {
    padding: 30px 20px;
    margin-top: -30px;
  }

  .pillars {
    flex-direction: column;
    align-items: center;
  }
}
</style>