// const res = require("express/lib/response");
const Agente = require("../models/agente");
const agenteCtrl = {};

agenteCtrl.getAgentes = async (req, res) => {
	//* Accion 👇
	var agentes = await Agente.find();
	//* Respuesta 👇
	res.json(agentes);
};

agenteCtrl.createAgente = async (req, res) => {
	var agente = new Agente(req.body);
	try {
		//* Accion 👇
		await agente.save();

		//* Respuesta 👇
		res.json({
			status: "1",
			msg: "Agente guardado",
		});
	} catch (error) {
		//* Respuesta de Error 👇
		res.status(400).json({
			status: "0",
			msg: "Error procesando operacion.",
		});
	}
};

agenteCtrl.getAgente = async (req, res) => {
	const agente = await Agente.findById(req.params.id);
	res.json(agente);
};

agenteCtrl.editAgente = async (req, res) => {
	const updateAgente = new Agente(req.body);
	updateAgente._id = req.params.id;

	try {
		console.log(req.body);
		console.log(req.params.id);
		console.log(req.body._id);
		//* Accion 👇
		await Agente.updateOne({ _id: req.params.id }, updateAgente);
		// await Agente.updateOne({ _id: req.body.id }, updateAgente);

		//* Respuesta 👇
		res.json({
			status: "1",
			msg: "Agente updated",
		});
	} catch (error) {
		//* Respuesta de Error 👇
		res.status(400).json({
			status: "0",
			msg: "Error procesando la operacion.",
		});
	}
};

agenteCtrl.deleteAgente = async (req, res) => {
	try {
		console.log(req.params.id);
		//* Accion 👇
		await Agente.deleteOne({ _id: req.params.id });

		//* Respuesta 👇
		res.json({
			status: "1",
			msg: "Agente deleted",
		});
	} catch (error) {
		//* Respuesta de Error 👇
		res.status(400).json({
			status: "0",
			msg: "Error procesando la operacion.",
		});
	}
};

//* 📦 Exportacion de Modulo 📦
module.exports = agenteCtrl;
