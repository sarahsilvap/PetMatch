<template>
  <div class="admin-container min-h-screen bg-gradient-to-br from-[#f6e9d4] to-[#f6e9d4]/50">
    <!-- App Bar -->
    <header class="sticky top-0 z-10 bg-[#364648] shadow-lg">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <!-- Lado esquerdo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center gap-x-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span class="text-xl font-bold hidden sm:block">Home</span>
          </router-link>
        </div>

        <!-- Lado direito: título -->
        <h2 class="text-xl font-bold text-white hidden sm:block">
          Painel Administrativo
        </h2>
      </div>
    </header>


    <!-- Main Content -->
    <main class="container mx-auto px-4 py-6">
      <!-- Search and Stats Bar -->
      <div class="mb-8 bg-white rounded-xl shadow-md p-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="relative flex-grow max-w-2xl">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon class="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Busque por nome, espécie ou características..."
              class="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#fbbb17] focus:border-transparent transition-all duration-300"
              @input="handleSearch" :value="query" />
          </div>

          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <span class="hidden md:inline">Total de pets:</span>
            <span class="bg-[#364648] text-white px-3 py-1 rounded-full font-medium">{{ pets.length }}</span>
          </div>
        </div>
      </div>

      <!-- Pets Grid -->
      <section>
        <header class="sticky top-0 z-10">
          <div class="container mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <h1 class="text-2xl font-bold text-[#364648]">Pets cadastrados</h1>
            </div>
            <div class="flex items-center space-x-4">
              <button @click="openAddModal"
                class="hidden sm:flex items-center space-x-2 bg-[#fbbb17] hover:bg-[#e6a915] text-[#364648] font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg">
                <PlusIcon class="h-5 w-5" />
                <span>Novo Pet</span>
              </button>
              <button @click="openAddModal" class="sm:hidden bg-[#fbbb17] text-[#364648] p-2 rounded-full shadow-md">
                <PlusIcon class="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        <!-- Empty State -->
        <div v-if="!pets.length" class="bg-white rounded-xl shadow-sm p-8 text-center">
          <div class="max-w-md mx-auto">
            <PawPrintIcon class="h-16 w-16 mx-auto text-[#364648]/30" />
            <h4 class="mt-4 text-lg font-medium text-[#364648]">Nenhum pet cadastrado</h4>
            <p class="mt-2 text-gray-500">Comece adicionando seu primeiro pet para adoção.</p>
            <button @click="openAddModal"
              class="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#fbbb17] hover:bg-[#e6a915] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbbb17] transition-all duration-300">
              <PlusIcon class="-ml-1 mr-2 h-5 w-5" />
              Adicionar Pet
            </button>
          </div>
        </div>

        <!-- Pets Grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <CardPetAdm v-for="pet in filteredPets" :key="pet._id" :pet="pet" @edit="openEditModal" @delete="deletePet"
            class="transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg" />
        </div>
      </section>
    </main>

    <!-- Floating Action Button (Mobile) -->
    <button @click="openAddModal"
      class="fixed bottom-6 right-6 sm:hidden z-20 bg-[#fbbb17] text-white p-4 rounded-full shadow-xl hover:bg-[#e6a915] transition-all duration-300 animate-bounce">
      <PlusIcon class="h-6 w-6" />
    </button>

    <!-- Modal para adicionar/editar -->
    <ModalAddEditPet v-if="showModal" :mode="modalMode" :petData="currentPet" @close="closeModal"
      @confirm="handleModalConfirm" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import CardPetAdm from "../components/CardPetAdm.vue";
import ModalAddEditPet from "../components/ModalAddEditPet.vue";
import type { Pet } from "../models/pet";
import { computed } from "vue";
import logo2 from "../assets/logo2.png";

// Icons (substitua pelos seus componentes de ícone reais)
const PlusIcon = { template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>' };
const SearchIcon = { template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>' };
const RefreshIcon = { template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>' };
const PawPrintIcon = { template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>' };

const filteredPets = computed(() =>
  pets.value.filter((pet) =>
    pet.name.toLowerCase().includes(query.value.toLowerCase()) ||
    (pet.description && pet.description.toLowerCase().includes(query.value.toLowerCase()))
  )
);

const pets = ref<Pet[]>([]);
const showModal = ref(false);
const modalMode = ref<"add" | "edit">("add");
const currentPet = ref<Pet | null>(null);
const query = ref("");

const fetchPets = async () => {
  try {
    const res = await fetch("/api/pets");
    pets.value = await res.json();
  } catch (error) {
    console.error("Erro ao buscar pets:", error);
  }
};

const openAddModal = () => {
  modalMode.value = "add";
  currentPet.value = null;
  showModal.value = true;
};

const openEditModal = (pet: Pet) => {
  modalMode.value = "edit";
  currentPet.value = { ...pet };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handleModalConfirm = async (formData: FormData) => {
  try {
    const petId = formData.get("_id") as string | null;
    const url = petId ? `/api/pets/${petId}` : "/api/pets";
    const method = petId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Erro ao salvar pet");
    }

    closeModal();
    fetchPets();
  } catch (error) {
    console.error("Erro ao salvar pet:", error);
  }
};

const deletePet = async (id: string) => {
  try {
    await fetch(`/api/pets/${id}`, { method: "DELETE" });
    fetchPets();
  } catch (error) {
    console.error("Erro ao deletar pet:", error);
  }
};

const handleSearch = (event: Event) => {
  const target = event.target as HTMLInputElement;
  query.value = target.value;
};

onMounted(fetchPets);
</script>

<style scoped>
.admin-container {
  max-width: 100%;
}

/* Animação suave para o hover nos cards */
.card-enter-active,
.card-leave-active {
  transition: all 0.3s ease;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Efeito de skeleton loading */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.skeleton {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
}
</style>