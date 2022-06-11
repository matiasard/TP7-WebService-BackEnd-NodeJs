const { Router } = require("express");
const personaCtrl = require("../controllers/persona.controller");
const router = Router();

router.get("/", personaCtrl.getPersonas);
router.post("/", personaCtrl.createPersona);
router.get("/:id", personaCtrl.getOnePersona);

//* 📦 Exportacion de Modulo 📦
module.exports = router;
