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

	//? ********************** Peticion a RapidApi ***********************
	const axios = require("axios");
	let resultConversion = "";

	const encodedParams = new URLSearchParams();
	encodedParams.append("from-value", transaccion.cantidadOrigen);
	encodedParams.append("from-type", transaccion.monedaOrigen);
	encodedParams.append("to-type", transaccion.monedaDestino);

	const options = {
		method: "POST",
		url: "https://community-neutrino-currency-conversion.p.rapidapi.com/convert",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-RapidAPI-Key": "2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c",
			"X-RapidAPI-Host":
				"community-neutrino-currency-conversion.p.rapidapi.com",
		},
		data: encodedParams,
	};

	await axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
			resultConversion = response.data.result;
			transaccion.cantidadDestino = Number(resultConversion);
		})
		.catch(function (error) {
			console.error(error);
		});
	//? ****************************************************************

	try {
		console.log(transaccion);
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

const monedaConversionAPI = (monedaOrigen, cantidad, monedaDestino) => {
	const axios = require("axios");
	let resultConversion = "";
	console.log(monedaOrigen, cantidad, monedaDestino);

	const encodedParams = new URLSearchParams();
	encodedParams.append("from-value", cantidad);
	encodedParams.append("from-type", monedaOrigen);
	encodedParams.append("to-type", monedaDestino);

	const options = {
		method: "POST",
		url: "https://community-neutrino-currency-conversion.p.rapidapi.com/convert",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-RapidAPI-Key": "2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c",
			"X-RapidAPI-Host":
				"community-neutrino-currency-conversion.p.rapidapi.com",
		},
		data: encodedParams,
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data.result);
			resultConversion = response.data.result;
			console.log(resultConversion);
			return resultConversion;
		})
		.catch(function (error) {
			console.error(error);
		});
};

module.exports = transaccionCtrl;
