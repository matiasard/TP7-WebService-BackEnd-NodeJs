const { Router } = require("express");
const pasajeCtrl = require("../controllers/pasaje.controller");
const router = Router();

router.get("/", pasajeCtrl.getPasajes);
router.post("/", pasajeCtrl.createPasaje);
router.delete("/:id", pasajeCtrl.deletePasaje);
router.put("/:id", pasajeCtrl.editPasaje);
router.get("/:id", pasajeCtrl.getPasajeById);
router.get("/:categoria", pasajeCtrl.getPorCategoria);

//* 📦 Exportacion de Modulo 📦
module.exports = router;
