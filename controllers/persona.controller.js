const { response } = require("express");
const Persona = require("../models/persona");
const personaCtrl = {};

personaCtrl.getPersonas = async (req, res = response) => {
	const personas = await Persona.find();
	try {
		res.json({
			ok: true,
			results: personas,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Error procesando operacion.",
		});
	}
};

personaCtrl.createPersona = async (req, res = response) => {
	const newPersona = new Persona(req.body);
	console.log(req.body);
	try {
		await newPersona.save();
		res.json({
			ok: true,
			msg: "Persona guardado.",
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Invalid JSON string.",
		});
	}
};

personaCtrl.getOnePersona = async (req, res = response) => {
	const persona = await Persona.find({ _id: req.params.id });
	console.log(req.params.id);
	try {
		res.json({
			ok: true,
			result: persona,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: `No se encontro persona con id: ${req.params.id}`,
		});
	}
};

//* 📦 Exportacion de Modulo 📦
module.exports = personaCtrl;
