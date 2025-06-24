<template>
  <footer>
    <div class="container">
      <div class="footer-section">
        <h3>Aliança do Bem</h3>
        <p>Associação Protetora dos Animais</p>
        <p>Campinas/SP - Desde 2022</p>
      </div>
      <div class="footer-section">
        <h3>Contato</h3>
        <p>contato@aliancadobem.org.br</p>
        <p>(19) 99999-9999</p>
      </div>
      <div class="footer-section">
        <h3>Redes Sociais</h3>
        <div class="social-icons">
          <div class="flex gap-4 mt-3">
            <a href="https://www.instagram.com/aliancadobem.org.br/?hl=en" target="_blank"
              class="text-[#E1306C] text-2xl hover:scale-110 transition">
              <font-awesome-icon :icon="['fab', 'instagram']" />
              Instagram </a>
          </div>
          <div class="flex gap-4 mt-3">
            <a href="https://www.facebook.com/aliancadobem.org.br/" target="_blank"
              class="text-[#3b5998] text-2xl hover:scale-110 transition">
              <font-awesome-icon :icon="['fab', 'facebook']" />
              Facebook</a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2023 Aliança do Bem - Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background-color: #383C41;
  color: white;
  padding: 40px 0 0;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  padding: 0 15px;
}

.footer-section h3 {
  margin-bottom: 15px;
  font-size: 18px;
}

.social-icons a {
  color: white;
  margin-right: 15px;
  font-size: 18px;
}

.copyright {
  text-align: center;
  padding: 15px 0;
  margin-top: 30px;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>