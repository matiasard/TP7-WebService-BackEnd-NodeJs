//* Defino el controlador para el manejo de CRUD
const agenteCtrl = require("./../controllers/agente.controller");

//* Creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//* Definimos las rutas para la gestion de agente
router.get("/", agenteCtrl.getAgentes);
router.post("/", agenteCtrl.createAgente);
router.get("/:id", agenteCtrl.getAgente);
router.put("/:id", agenteCtrl.editAgente);
router.delete("/:id", agenteCtrl.deleteAgente);

//* 📦 exportamos el modulo de rutas 📦
module.exports = router;
// export default router;
