<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="../assets/logo.png" alt="Aliança do Bem">
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/quem-somos">Quem Somos</router-link>
        <router-link to="/adotar">Adotar</router-link>
        <router-link to="/doar">Doar</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo img {
  height: 100px;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
}

nav a:hover {
  color: var(--primary);
}
</style>