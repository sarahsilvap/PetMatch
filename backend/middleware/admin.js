// middleware/admin.js
const admin = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Usuário não autenticado." });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Acesso negado. Admins apenas." });
    }

    next();
  } catch (err) {
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default admin;
