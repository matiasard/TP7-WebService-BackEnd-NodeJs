const Transaccion = require("./../models/transaccion");
const { response } = require("express");
const transaccionCtrl = {};

transaccionCtrl.getListaTransacciones = async (req, res = response) => {
	try {
		const transacciones = await Transaccion.find();

		res.json({
			ok: true,
			msg: "operacion exitosa",
			listaTransacciones: transacciones,
		});
	} catch (err) {
		res.status(400).json({
			ok: false,
			msg: "Error procesando operacion",
		});
	}
};

transaccionCtrl.createTransaccion = async (req, res = response) => {
	const transaccion = new Transaccion(req.body);
	try {
		// console.log(transaccion);
		await transaccion.save();
		res.json({
			ok: true,
			msg: "operacion exitosa, se guardo correctamente",
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Error al procesar la informacion",
		});
	}
};

transaccionCtrl.getHistoricoTransacciones = async (req, res = response) => {
	const email = req.params.email;
	console.log(email);

	try {
		const historical = await Transaccion.find({ emailCliente: email });

		res.json(historical);
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Error al procesar la informacion",
		});
	}
};

transaccionCtrl.getTransaccion = async (req, res = response) => {
	const { mOrigen, mDestino } = req.params;
	const transaccion = await Transaccion.find({
		monedaOrigen: mOrigen,
		monedaDestino: mDestino,
	});
	try {
		// console.log(origen, destino);
		res.json({
			ok: true,
			query: { mOrigen, mDestino },
			results: transaccion,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Error al procesar la informacion",
		});
	}
};

module.exports = transaccionCtrl;
