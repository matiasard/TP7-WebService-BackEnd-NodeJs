const { response } = require("express");
// * πImportacion del Modelo Libro
const Libro = require("../models/libro");
const libroCtrl = {};

libroCtrl.getLibros = async (req, res = response) => {
	const libros = await Libro.find();
	//* Accion π
	res.json(libros);
};

libroCtrl.createLibro = async (req, res = response) => {
	const libro = new Libro(req.body);
	try {
		//* Accion π
		await libro.save();

		//* Respuesta π
		res.json({
			status: "1",
			msg: "Libro Guardado correctamente.",
		});
	} catch (error) {
		//* Respuesta de Error π
		res.status(400).json({
			status: "0",
			msg: "Error procesando operacion.",
		});
	}
};

libroCtrl.deleteLibro = async (req, res = response) => {
	const libroId = req.params.id;
	console.log(libroId);
	try {
		//* π Accion
		await Libro.deleteOne({ _id: libroId });
		//* π Todo OK: Respuesta
		res.json({
			ok: true,
			msg: `Se borro con exito el libro con el ID: ${libroId}}`,
		});
	} catch (error) {
		//* π NOT FOund: Respuesta
		res.status(400).json({
			ok: false,
			msg: `No se encontro el Libro con id: ${libroId}`,
		});
	}
};

libroCtrl.editLibro = async (req, res = response) => {
	const updateLibro = new Libro(req.body);
	updateLibro._id = req.params.id;
	try {
		await Libro.updateOne({ _id: req.params.id }, updateLibro);

		//* Respuesta
		res.json({ ok: true, msg: `Se actualizo el libro correctamente` });
	} catch (error) {
		res.status(400).json({ ok: false, msg: "Error Libro no encontrado" });
	}
};

libroCtrl.getLibrosDestacados = async (req, res = response) => {
	try {
		//* π Accion
		const busqueda = await Libro.find({ destacado: true });

		//* π Respuesta
		res.json({
			ok: true,
			msg: "Operacion exitosa",
			destacados: busqueda,
		});
	} catch (error) {
		//* π Respuesta
		res.status(400).json({
			ok: false,
			msg: "No se encontro ningun libro",
			error: error,
		});
	}
};

module.exports = libroCtrl;
