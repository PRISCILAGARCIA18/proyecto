const express = require("express");
const router = express.Router();
const { crearUsuario, obtenerUsuarios } = require("../controllers/userController");

router.post("/api/usuarios", crearUsuario);
router.get("/api/usuarios", obtenerUsuarios);

module.exports = router;
