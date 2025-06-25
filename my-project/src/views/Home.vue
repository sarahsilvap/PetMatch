<script setup>
import PetCard from "../components/PetCard.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import axios from "axios"; // não esqueça de importar axios

// Variáveis de estado
const pets = ref([]);
const loading = ref(false);

// Configuração do slideshow
const slideInterval = ref(5000); 
const currentSlide = ref(0);
let intervalId = null;

// Slides do banner
const slides = [
  {
    image: "/src/assets/banner1.png",
    title: "Transformando vidas, um animal de cada vez",
    description: "Resgate, cuidado e adoção responsável de animais em situação de vulnerabilidade"
  },
  {
    image: "/src/assets/banner2.png",
    title: "Feira de Adoção Semanal",
    description: "Confira na nossa página do Instagram as datas de feiras de adoção em Campinas e região"
  },
  {
    image: "/src/assets/banner3.png",
    title: "Seja um Anjo Voluntário",
    description: "Junte-se a nós nesta causa de amor e proteção animal"
  }
];

// Navegação do slideshow
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

// Inicia o slideshow automático
const startSlideShow = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, slideInterval.value);
};

// Para o slideshow quando o componente é desmontado
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

onMounted(() => {
  startSlideShow();
});

// Requisição dos pets
onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get("http://localhost:3000/api/pets");
    pets.value = response.data;
    console.log("Pets carregados:", pets.value);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  } finally {
    loading.value = false;
  }
});

// Filtra apenas os pets disponíveis
const availablePets = computed(() => {
  return pets.value.filter((pet) => !pet.available);
});
</script>


<template>
  <div class="home">
    <!-- Banner Rotativo -->
    <section class="rotating-banner">
      <div class="slideshow-container">
        <!-- Slides -->
        <div v-for="(slide, index) in slides" 
             :key="index"
             class="slide"
             :class="{ active: currentSlide === index }"
             :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <div class="cta-buttons">
              <router-link to="/adotar" class="btn btn-primary">Quero Adotar</router-link>
              <router-link to="/doar" class="btn btn-outline">Quero Ajudar</router-link>
            </div>
          </div>
        </div>
        
        <!-- Controles -->
        <button class="prev" @click="prevSlide">&lt;</button>
        <button class="next" @click="nextSlide">&gt;</button>
        
        <!-- Indicadores -->
        <div class="indicators">
          <span v-for="(slide, index) in slides" 
                :key="index"
                :class="{ active: currentSlide === index }"
                @click="currentSlide = index"></span>
        </div>
      </div>
    </section>

    <!-- Conteúdo principal -->
    <main class="main-content">
      <!-- Destaques -->
      <section class="highlights">
        <div class="section-container">
          <h2>Nossos Destaques</h2>
          <div class="highlight-cards">
            <div class="card">
              <h3>Feira de Adoção</h3>
              <p>Todo sábado no Parque Portugal</p>
            </div>
            <div class="card">
              <h3>Campanha Castração</h3>
              <p>Castração gratuita para animais de rua</p>
            </div>
            <div class="card">
              <h3>Loja EcoPet</h3>
              <p>Produtos sustentáveis para pets</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Animais para Adoção -->
      <section class="animals">
        <div class="section-container">
          <h2>Alguns dos nossos amigos que já encontraram um lar!</h2>
          <div v-if="availablePets.length > 0" class="animal-grid">
            <PetCard v-for="pet in availablePets" :key="pet.id" :pet="pet" />
          </div>
          <div v-else class="no-pets">
            <p>No momento, todos os nossos pets encontraram lares temporários.</p>
            <p>Volte em breve para conhecer nossos novos resgatados!</p>
          </div>
          <div class="center-button">
            <router-link to="/adotar" class="btn btn-primary">Ver animais disponíveis!</router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Estilos do banner rotativo */
.rotating-banner {
  position: relative;
  width: 100%;
  height: 500px; /* Altura fixa do banner */
  overflow: hidden;
}

.slideshow-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover; 
  background-position: center center; 
  background-repeat: no-repeat; 
  opacity: 0;
  transition: opacity 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.slide.active {
  opacity: 1;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.slide-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 900px;
  padding: 0 20px;
}

.slide-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.slide-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Controles */
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.prev:hover, .next:hover {
  background: rgba(255, 255, 255, 0.5);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

/* Indicadores */
.indicators {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 10;
}

.indicators span {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

.indicators span.active {
  background: white;
  transform: scale(1.2);
}

/* Botões */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  padding: 12px 25px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  line-height: 1; /* <--- aqui */
  vertical-align: middle; /* <--- aqui */
}

.btn-primary {
  background: #F2A413;
  color: #383C41;
  border: 2px solid #F2A413;
}

.btn-primary:hover {
  background-color: #e69500;
}

.btn-outline {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Conteúdo principal */
.main-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-container {
  font-size: large;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

/* Destaques */
.highlights {
  padding: 60px 0;
  width: 100%;
}

.highlights h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #383C41;
}

.highlight-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  color: #F2A413;
  margin-bottom: 10px;
}

/* Animais para adoção */
.animals {
  width: 100%;
  padding-bottom: 20px;
}

.animals h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #383C41;
}

.animal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin: 30px 0;
  width: 100%;
}

.center-button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.no-pets {
  text-align: center;
  padding: 40px 0;
  color: #383C41;
}

.no-pets p {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

/* Responsividade */
@media (max-width: 768px) {
  .rotating-banner {
    height: 400px;
  }
  
  .slide-content h1 {
    font-size: 1.8rem;
  }
  
  .slide-content p {
    font-size: 1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .btn {
    width: 100%;
    max-width: 200px;
  }

  .highlight-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .card {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }
  
  .animal-grid {
    grid-template-columns: 1fr;
  }
}
</style>