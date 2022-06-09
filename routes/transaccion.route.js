const { Router } = require("express");
const transaccionCtrl = require("../controllers/transaccion.controller");
const router = Router();

router.get("/", transaccionCtrl.getListaTransacciones);
router.post("/", transaccionCtrl.createTransaccion);
router.get("/:email", transaccionCtrl.getHistoricoTransacciones);
router.get("/listCurrency/:mOrigen/:mDestino", transaccionCtrl.getTransaccion);

//* 📦 exportamos el modulo de rutas 📦
module.exports = router;
