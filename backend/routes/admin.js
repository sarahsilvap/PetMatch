// routes/admin.js
import express from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

// Exemplo de rota protegida só para admin
router.get("/dashboard", auth, admin, (req, res) => {
  res.send("Você está no painel admin!");
});

// Você pode adicionar outras rotas admin aqui, sempre usando auth + admin
// Exemplo:
// router.post("/some-admin-action", auth, admin, (req, res) => { ... });

export default router;
