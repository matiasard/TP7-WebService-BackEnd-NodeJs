const { Router } = require("express");
const libroCtrl = require("./../controllers/libro.controller");
const router = Router();

router.get("/", libroCtrl.getLibros);
router.get("/destacados", libroCtrl.getLibrosDestacados);
router.post("/", libroCtrl.createLibro);
router.delete("/:id", libroCtrl.deleteLibro);
router.put("/:id", libroCtrl.editLibro);

//* 📦 exportamos el modulo de rutas 📦
module.exports = router;
