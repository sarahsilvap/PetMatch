<template>
  <div class="donate-page">
    <!-- Banner Superior -->
    <section class="hero-banner">
      <div class="banner-content">
        <h1>Quero Ajudar</h1>
        <p>Sua contribuição faz a diferença na vida de muitos animais</p>
      </div>
    </section>

    <!-- Conteúdo Principal -->
    <main class="main-content">
      <div class="container">
        <!-- Opções de Doação -->
        <section class="donation-options">
          <h2>Escolha como ajudar</h2>
          
          <div class="options-grid">
            <!-- Doação via PIX -->
            <div class="option-card pix-option">
              <div class="option-header">
                <span class="icon">💛</span>
                <h3>Doação via PIX</h3>
              </div>
              
              <div class="pix-info">
                <div class="qr-code-container">
                  <img src="../assets/qr-code.png" alt="QR Code PIX" class="qr-code">
                  <p>Escaneie este QR Code</p>
                </div>
                
                <div class="divider">ou</div>
                
                <div class="pix-key">
                  <h4>Chave PIX (e-mail):</h4>
                  <div class="key-box">
                    <span>doacoes@aliancadobem.org.br</span>
                    <button @click="copyPixKey" class="copy-btn">
                      <span v-if="!copied">Copiar</span>
                      <span v-else>Copiado!</span>
                    </button>
                  </div>
                  <p class="pix-tip">O valor fica disponível imediatamente para a ONG</p>
                </div>
              </div>
            </div>

            <!-- Outras formas de doação -->
            <div class="option-card">
              <div class="option-header">
                <span class="icon">🔄</span>
                <h3>Doação Recorrente</h3>
              </div>
              <p>Seja um doador mensal e nos ajude a planejar melhor nossos projetos</p>
              <router-link to="/doacao-recorrente" class="btn">Saber mais</router-link>
            </div>

            <div class="option-card">
              <div class="option-header">
                <span class="icon">🛍️</span>
                <h3>Doação de Materiais</h3>
              </div>
              <p>Precisamos de ração, medicamentos, cobertores e outros itens</p>
              <router-link to="/doacao-materiais" class="btn">Ver lista completa</router-link>
            </div>

            <div class="option-card">
              <div class="option-header">
                <span class="icon">🏢</span>
                <h3>Empresa Parceira</h3>
              </div>
              <p>Sua empresa pode ajudar com doações ou patrocínios de projetos</p>
              <router-link to="/empresa-parceira" class="btn">Como participar</router-link>
            </div>
          </div>
        </section>

        <!-- Impacto das Doações -->
        <section class="impact-section">
          <h2>Seu apoio transforma vidas</h2>
          <div class="impact-grid">
            <div class="impact-item">
              <span class="impact-number">R$50</span>
              <p>Vacina 1 animal</p>
            </div>
            <div class="impact-item">
              <span class="impact-number">R$120</span>
              <p>Alimenta 3 cães por 1 mês</p>
            </div>
            <div class="impact-item">
              <span class="impact-number">R$250</span>
              <p>Cobre custos de 1 castração</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const copied = ref(false);

const copyPixKey = () => {
  const pixKey = 'doacoes@aliancadobem.org.br';
  navigator.clipboard.writeText(pixKey)
    .then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    })
    .catch(err => {
      console.error('Falha ao copiar:', err);
    });
};
</script>

<style scoped>
/* Cores */
:root {
  --dark: #364648;
  --primary: #fbbb17;
  --light: #f6e9d4;
}

.donate-page {
  color: var(--dark);
}

/* Banner Superior */
.hero-banner {
   background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
              url('../assets/help-dog.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 150px 20px;
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

/* Container Principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Opções de Doação */
.donation-options h2 {
  text-align: center;
  color: var(--dark);
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 2rem;
  position: relative;
}

.donation-options h2::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--primary);
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.option-card {
  align-items: center; /* centraliza itens horizontalmente */
  text-align: center; /* garante texto alinhado ao centro dentro do card */
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.option-card p,
.option-card .option-header {
  width: 100%;
  text-align: left; /* deixa texto e cabeçalho alinhados à esquerda */
}

.option-card .btn {
  margin-top: 15px;
  /* já será centralizado pelo align-items do pai */
}

.option-card:hover {
  transform: translateY(-5px);
}

.pix-option {
  grid-column: 1 / -1;
}

.option-header {
  display: flex;
  align-items: center;
}

.option-header .icon {
  font-size: 2rem;
  margin-right: 15px;
}

.option-header h3 {
  color: var(--primary);
  font-size: 1.5rem;
}

.pix-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 0px;
}

.qr-code-container {
  text-align: center;
}

.qr-code {
  width: 200px;
  height: 200px;
  border: 2px solid var(--primary);
  border-radius: 10px;
  background: white;
}

.divider {
  font-weight: bold;
  color: var(--dark);
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 50px;
  height: 1px;
  background: var(--primary);
}

.divider::before {
  right: 100%;
  margin-right: 15px;
}

.divider::after {
  left: 100%;
  margin-left: 15px;
}

.pix-key {
  flex: 1;
  min-width: 250px;
}

.pix-key h4 {
  color: var(--dark);
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.key-box {
  display: flex;
  align-items: center;
  background: var(--light);
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.key-box span {
  flex: 1;
  font-family: monospace;
  font-size: 1.1rem;
  color: var(--dark);
}

.copy-btn {
  background: var(--primary);
  color: var(--dark);
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.copy-btn:hover {
  background: #e6a90b;
}

.pix-tip {
  font-style: italic;
  color: #666;
  font-size: 0.9rem;
}

.btn {
  display: inline-block;
  background: var(--primary);
  color: var(--dark);
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 15px;
  transition: all 0.3s;
}

.btn:hover {
  background: #e6a90b;
  transform: translateY(-2px);
}

/* Impacto das Doações */
.impact-section {
  padding: 40px 0 80px;
  text-align: center;
}

.impact-section h2 {
  color: var(--dark);
  margin-bottom: 20px;
  font-size: 2rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.impact-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.impact-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 10px;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-banner {
    padding: 80px 20px;
  }
  
  .hero-banner h1 {
    font-size: 2.2rem;
  }
  
  .pix-info {
    flex-direction: column;
    gap: 30px;
  }
  
  .divider {
    margin: 20px 0;
  }
  
  .divider::before,
  .divider::after {
    width: 30px;
  }
}
</style>