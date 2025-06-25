import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import Adopt from "../views/Adopt.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";
import AdminPetsView from "../views/AdminPetsView.vue";
import Donate from "../views/Donate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: Home,
      path: "/",
    },
    {
      component: Login,
      path: "/login",
    },
    {
      component: Cadastro,
      path: "/cadastro",
    },
    {
      component: Adopt,
      path: "/adotar",
    },
    {
      component: About,
      path: "/quem-somos",
    },
    {
      component: AdminPetsView,
      path: "/adm",
    },
    {
      component: Donate,
      path: "/doar",
    },
    {
      component: NotFound,
      path: "/:pathMatch(.*)*",
    },
  ],
});

// Proteção da rota /adm
router.beforeEach((to, from, next) => {
  if (to.path === "/adm") {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      // Se não tem token ou não é admin, redireciona para login ou home
      return next("/login"); // ou next('/') se preferir redirecionar para home
    }
  }

  next();
});

export default router;
