const { response } = require("express");
const Pasaje = require("./../models/pasaje");
const pasajeCtrl = {};

//* Get All
pasajeCtrl.getPasajes = async (req, res = response) => {
	const pasajes = await Pasaje.find().populate("pasajero");
	try {
		res.json({
			ok: true,
			results: pasajes,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Error procesando operacion.",
		});
	}
};

//* Create
pasajeCtrl.createPasaje = async (req, res = response) => {
	const newPasaje = new Pasaje(req.body);
	console.log(req.body);
	try {
		await newPasaje.save();
		res.json({
			ok: true,
			msg: "Pasaje creado con exito.",
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Error al crear el Pasaje.",
			error,
		});
	}
};

//* Edit
pasajeCtrl.editPasaje = async (req, res = response) => {
	const pasajeUpdate = req.body;
	pasajeUpdate._id = req.params.id;
	console.log(pasajeUpdate);
	console.log("pasajeID: " + req.params.id);

	try {
		await Pasaje.updateOne({ _id: req.params.id }, pasajeUpdate);
		res.json({
			ok: true,
			msg: "Pasaje actualizado con exito.",
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: `Error al editar Pasaje con Id: ${req.params.id}`,
		});
	}
};

//* Filter
pasajeCtrl.getPorCategoria = async (req, res = response) => {
	const byCategoria = await Pasaje.find({
		categoriaPasajero: req.params.categoria,
	}).populate("pasajero");
	try {
		res.json({
			ok: true,
			results: byCategoria,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Error en la operacion.",
			error: error,
		});
	}
};

//* Buscar un Pasaje
pasajeCtrl.getPasajeById = async (req, res = response) => {
	const pasaje = await Pasaje.find({ _id: req.params.id }).populate("pasajero");
	try {
		res.json({
			ok: true,
			result: pasaje,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: `No se encontro pasaje con id: ${req.params.id}`,
		});
	}
};

//* Delete
pasajeCtrl.deletePasaje = async (req, res = response) => {
	console.log(req.params.id);
	try {
		await Pasaje.deleteOne({ _id: req.params.id });
		res.json({
			ok: true,
			msg: "Pasaje deleted successfully",
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Error deleting",
		});
	}
};

//* 📦 exportamos el modulo de rutas 📦
module.exports = pasajeCtrl;
