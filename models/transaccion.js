const { Schema, model } = require("mongoose");

const TrasaccionScheme = new Schema({
	monedaOrigen: { type: String, require: true },
	cantidadOrigen: { type: Number, require: true },
	monedaDestino: { type: String, require: true },
	cantidadDestino: { type: Number, require: true },
	emailCliente: { type: String, require: true },
	tasaConversion: { type: Number, default: 0 },
});

//* 📦 Exportacion de Modulo 📦
module.exports = model.Transaccion || model("Transaccion", TrasaccionScheme);
